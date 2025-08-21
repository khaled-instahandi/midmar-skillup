import React, { useState, useMemo, useEffect } from 'react';

import deleteIcon from '../././../../../images/delete-table-icon.svg'
import Button from '../../../../elements/Buttons/Button';
import detialeIcon from '../././../../../images/detials-tavle-icon.svg'

import lineUnder from '../../../../images/under-title-opration.svg';


import Pagination from '../../../../elements/Pagination/Pagination';

import CircleProgressBar from '../../../../components/CircleProgressBar/CircleProgressBar';

import AlertMessage from '../../../../elements/AlertMessage/AlertMessage';
import verify from '../../../../images/verify2.svg';
import infoCircle from '../../../../images/info-circle2.svg';
import Modal from '../../../Modal';

const sampleData = [
    { id: 1, TrainerName: "khaled alahmad", PreTestMark: "65", PostTestMark: "90", ProgressPercent: "25" },
    { id: 2, TrainerName: "khaled alahmad", PreTestMark: "65", PostTestMark: "90", ProgressPercent: "25" },
    { id: 3, TrainerName: "khaled alahmad", PreTestMark: "65", PostTestMark: "90", ProgressPercent: "25" },
    { id: 4, TrainerName: "khaled alahmad", PreTestMark: "65", PostTestMark: "90", ProgressPercent: "25" },
    { id: 5, TrainerName: "khaled alahmad", PreTestMark: "65", PostTestMark: "90", ProgressPercent: "25" },
    { id: 6, TrainerName: "khaled alahmad", PreTestMark: "65", PostTestMark: "90", ProgressPercent: "25" },
    { id: 7, TrainerName: "khaled alahmad", PreTestMark: "65", PostTestMark: "90", ProgressPercent: "25" },
    { id: 8, TrainerName: "khaled alahmad", PreTestMark: "65", PostTestMark: "90", ProgressPercent: "25" },

];
const defaultData = [...sampleData];


const TraineesMarks = ({ isOpen, onClose, projectData, onSave }) => {


    const [formData, setFormData] = useState(projectData);
    const [activities, setActivities] = useState(sampleData);
    const [expandedRows, setExpandedRows] = useState({});
    const [isSorted, setIsSorted] = useState(false);
    const [filterColumn, setFilterColumn] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortedActivities, setSortedActivities] = useState(sampleData);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

    const [showAlertDelete, setShowAlertDelete] = useState(false);
    const [showAlertConfirm, setShowAlertConfirm] = useState(false);


    const handleModalClose = () => {

        setShowAlertConfirm(false);
        setShowAlertDelete(false);
    };
    // Update to handle input change for search
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
        setCurrentPage(1); // Reset to first page on search
    };

    // Function to determine if an activity matches the search query
    const doesActivityMatchSearchTerm = (activity) => {
        return Object.values(activity).some(value =>
            value.toString().toLowerCase().includes(searchQuery)
        );
    };

    // Integrated sorting and filtering
    useEffect(() => {
        let updatedActivities = [...sampleData];

        if (searchQuery) {
            updatedActivities = updatedActivities.filter(doesActivityMatchSearchTerm);
        }

        if (isSorted && filterColumn) {
            updatedActivities.sort((a, b) => {
                const valueA = a[filterColumn];
                const valueB = b[filterColumn];
                if (typeof valueA === 'string' && typeof valueB === 'string') {
                    return valueA.localeCompare(valueB);
                } else if (typeof valueA === 'number' && typeof valueB === 'number') {
                    return valueA - valueB;
                }
                return 0;
            });
        }

        setSortedActivities(updatedActivities);
    }, [searchQuery, isSorted, filterColumn]);
    const handleRowClick = (id) => {
        setExpandedRows(prevExpandedRows => ({
            ...prevExpandedRows,
            [id]: !prevExpandedRows[id],
        }));
    };


    const itemsPerPage = searchQuery ? sortedActivities.length : 4;
    const totalPages = Math.ceil(activities.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState(
        defaultData.slice(0, itemsPerPage)
    );
    console.log(currentItems);

    useEffect(() => {
        setCurrentItems(sortedActivities.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
    }, [sortedActivities, currentPage, itemsPerPage]);

    const toggleSort = (columnName) => {
        let sortedData = [];
        if (filterColumn === columnName) {
            // Toggle between ascending and descending order
            sortedData = sortedActivities.slice().reverse();
        } else {
            sortedData = sampleData.slice().sort((a, b) => {
                const valueA = a[columnName];
                const valueB = b[columnName];

                // Handle different data types
                if (typeof valueA === 'string' && typeof valueB === 'string') {
                    return valueA.localeCompare(valueB);
                } else if (typeof valueA === 'number' && typeof valueB === 'number') {
                    return valueA - valueB;
                } else {
                    return 0; // No sorting for unsupported types
                }
            });
        }

        setFilterColumn(columnName);
        setSortedActivities(sortedData);
        setIsSorted(true);
        setCurrentPage(1); // Reset to the first page after sorting
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    const fetchDataForNewPage = (page) => {
        setCurrentPage(page);
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose}>
            <h2 className='header-text-edit-project'>Trainees' marks</h2>
            <img src={lineUnder} alt='' />
            <form onSubmit={handleSubmit} className="add-sub-activity">
                <div className="header-activity-table">
                    <div className="export-buttons">

                        <span>Data Export</span>
                        <button className='export-button' onClick={() => console.log('csv')}>CSV</button>
                        <button className='export-button' onClick={() => console.log('excel')}>Excel</button>
                        <button className='export-button' onClick={() => console.log('pdf')}>Pdf</button>
                    </div>
                    <div className="opration-buttons-activity-table">
                        {/* <div className="header-btn-instructors">
                                <Button
                                    label="Pending Enrollment Requests"
                                    className={'btn-add-table'}

                                    Icon={TimerIcon}
                                    iconPosition={'left'}
                                    width={'48%'}
                                    height={'3rem'}
                                    fontSize={'1.125rem'}
                                    onClick={() => setIsEnrollmentModalOpen(true)}
                                    countPending={4}
                                />
                                <Button
                                    onClick={() => setIsSendModalOpen(true)}
                                    label="Send emails"
                                    className={'button-import ml-1-instructors'}
                                    Icon={smsIcon}
                                    iconPosition={'left'}
                                    width={'25%'}
                                    height={'3rem'}
                                    fontSize={'1.125rem'}
                                />
                                <Button
                                    onClick={() => setIsAddModalOpen(true)}
                                    label="Add trainees"
                                    className={'btn-add-green ml-1-instructors'}
                                    Icon={addTableIcon}
                                    iconPosition={'left'}
                                    width={'25%'}
                                    height={'3rem'}
                                    fontSize={'1.125rem'}
                                />
                            </div> */}
                        <div class="search-container">
                            <label for="search-input">Search:</label>
                            <input type="text" id="search-input" placeholder="______________________" onChange={handleSearchInputChange} />
                        </div>

                    </div>
                </div>
                <div className="scrolled-table">
                    <table className="activity-table">
                        <thead>
                            <tr className='activity-table-header'>
                                <th onClick={() => toggleSort('TrainerName')}>Trainer Name</th>
                                <th onClick={() => toggleSort('PreTestMark')}>PreTest Mark</th>
                                <th onClick={() => toggleSort('PostTestMark')}>PostTest Mark</th>
                                <th onClick={() => toggleSort('ProgressPercent')}>Progress Percent</th>

                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(item => (
                                <React.Fragment key={item.id}>
                                    <tr
                                        className={`activity-table-row `}
                                    >
                                        <td>{item.TrainerName}</td>
                                        <td >
                                            <CircleProgressBar value={item.PreTestMark} />

                                            {item.PreTestMark}%
                                        </td>

                                        <td>
                                            <CircleProgressBar value={item.PostTestMark} />

                                            {item.PostTestMark}%
                                        </td>
                                        <td>
                                            <CircleProgressBar value={item.ProgressPercent} />

                                            {item.ProgressPercent}%
                                        </td>
                                        <td className='actions-table-btn' >

                                            <Button
                                                className={'action-table'}

                                                onClick={() => setIsDetailModalOpen(true)}
                                                Icon={detialeIcon}
                                                iconPosition={'left'}

                                            />

                                            <Button
                                                className={'action-table'}

                                                onClick={() => setShowAlertConfirm(true)}
                                                Icon={deleteIcon}
                                                iconPosition={'left'}

                                            />

                                        </td>

                                    </tr>

                                </React.Fragment>
                            ))}
                        </tbody>

                    </table>

                </div>
                <div className="pagination-table">
                    {searchQuery ? '' : <>
                        <Pagination
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={fetchDataForNewPage}
                            totalItems={sampleData.length}
                        />

                    </>}
                </div>

                {showAlertDelete &&
                    <AlertMessage
                        lableButtonOne={'Ok'}
                        buttomTowActive={false}
                        headerText={'Deleted !!'}
                        logo={verify}
                        buttonClassFirst={'button-delete-t'}
                        buttomText={'Hey, This trainee has been deleted!!'}
                        buttomTextMiddle={true}
                        onClose={handleModalClose} />}
                {showAlertConfirm &&
                    <AlertMessage
                        OnClickBtnTow={() => {
                            setShowAlertConfirm(false)
                            setShowAlertDelete(true)
                        }}
                        closeButton={true} lableButtonOne={'Cancel'}
                        lableButtonTow={'Yes, delete it !!'}
                        buttomTowActive={true}
                        headerText={'Are you sure to delete?'}
                        logo={infoCircle}
                        ButtonClassTow={'button-confirm-delete'}
                        buttonClassFirst={'button-cancel'}
                        buttomText={'You will not be able to recover this trainee !!'}
                        buttomTextMiddle={true} onClose={handleModalClose} />}

            </form>
        </Modal>
    );
};

export default TraineesMarks;
