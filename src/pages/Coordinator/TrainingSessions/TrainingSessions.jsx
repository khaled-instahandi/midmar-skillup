import React, { useState, useMemo, useEffect } from 'react';
import exportIcon from '../././../../images/export-table.svg'
import warningIcon from '../././../../images/warning-table.svg'
import verifyIcon from '../././../../images/verify-table.svg'
import updateIcon from '../././../../images/update-table-icon.svg'
import editIcon from '../././../../images/edit-table-icon.svg'
import addIcon from '../././../../images/add-table-icon.svg'
import deleteIcon from '../././../../images/delete-table-icon.svg'
import Button from '../../../elements/Buttons/Button';
import detialeIcon from '../././../../images/detials-tavle-icon.svg'
import addTableIcon from '../././../../images/add-square.svg'
import arrowRightIcon from '../././../../images/arrow-right.svg'
import Pagination from '../../../elements/Pagination/Pagination';
import PaginationTwo from '../../../elements/Pagination/PaginationTwo';
import AddTrainingSessions from './AddTrainingSessions/AddTrainingSessions';
import EditTrainingSessions from './EditTrainingSessions/EditTrainingSessions';
import AttendingTrainees from './AttendingTrainees/AttendingTrainees';
import AlertMessage from '../../../elements/AlertMessage/AlertMessage';

import verify from '../../../images/verify2.svg';
import infoCircle from '../../../images/info-circle2.svg';
import TrainingReport from './TrainingReport/TrainingReport';
import SRNReport from './SRNReport/SRNReport';
const sampleData = [
    { id: 1, SessionDate: "2024 -12-01", StartAt: "07:00 pm", EndAt: "09:00 pm", Duration: "2 hours", NumberofAttendance: "35" },
    { id: 2, SessionDate: "2024 -12-01", StartAt: "07:00 pm", EndAt: "09:00 pm", Duration: "2 hours", NumberofAttendance: "35" },
    { id: 3, SessionDate: "2024 -12-01", StartAt: "07:00 pm", EndAt: "09:00 pm", Duration: "2 hours", NumberofAttendance: "35" },
    { id: 4, SessionDate: "2024 -12-01", StartAt: "07:00 pm", EndAt: "09:00 pm", Duration: "2 hours", NumberofAttendance: "35" },
    { id: 5, SessionDate: "2024 -12-01", StartAt: "07:00 pm", EndAt: "09:00 pm", Duration: "2 hours", NumberofAttendance: "35" },
    { id: 6, SessionDate: "2024 -12-01", StartAt: "07:00 pm", EndAt: "09:00 pm", Duration: "2 hours", NumberofAttendance: "35" },
    { id: 7, SessionDate: "2024 -12-01", StartAt: "07:00 pm", EndAt: "09:00 pm", Duration: "2 hours", NumberofAttendance: "35" },
    { id: 8, SessionDate: "2024 -12-01", StartAt: "07:00 pm", EndAt: "09:00 pm", Duration: "2 hours", NumberofAttendance: "35" },
    { id: 9, SessionDate: "2024 -12-01", StartAt: "07:00 pm", EndAt: "09:00 pm", Duration: "2 hours", NumberofAttendance: "35" },


];
const defaultData = [...sampleData];

const TrainingSessions = () => {
    const [showAlertDelete, setShowAlertDelete] = useState(false);
    const [showAlertConfirm, setShowAlertConfirm] = useState(false);
    const [activities, setActivities] = useState(sampleData);
    const [expandedRows, setExpandedRows] = useState({});
    const [isSorted, setIsSorted] = useState(false);
    const [filterColumn, setFilterColumn] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isTrainingReportModalOpen, setIsTrainingReportModalOpen] = useState(false);
    const [isSRNReportModalOpen, setIsSRNReportModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isdetailModalOpen, setIsDetailModalOpen] = useState(false);

    const [selectedProjectData, setSelectedProjectData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortedActivities, setSortedActivities] = useState(sampleData);

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
    const handleModalClose = () => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
        setIsDetailModalOpen(false);
        setShowAlertDelete(false)
        setShowAlertConfirm(false)
        setIsTrainingReportModalOpen(false)
        setIsSRNReportModalOpen(false)

    };
    const handleSaveAddedProject = (editedData) => {
        console.log('Edited project data:', editedData);
        // handleModalClose();
    };
    const handleSaveSRNReportProject = (editedData) => {
        console.log('Edited project data:', editedData);
        // handleModalClose();
    };
    const handleSaveTrainingReportProject = (editedData) => {
        console.log('Edited project data:', editedData);
        // handleModalClose();
    };
    const handleSaveEditedProject = (editedData) => {
        console.log('Edited project data:', editedData);
        // handleModalClose();
    };
    const handleSaveEDetailProject = (editedData) => {
        console.log('Edited project data:', editedData);
        // handleModalClose();
    };
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

    const fetchDataForNewPage = (page) => {
        setCurrentPage(page);
    };


    return (
        <div className='activity-page'>

            <div className="activity-table-container">
                <h1>Training Sessions</h1>

                <div className="header-activity-table">
                    <div className="export-buttons">

                        <span>Data Export</span>
                        <button className='export-button' onClick={() => console.log('csv')}>CSV</button>
                        <button className='export-button' onClick={() => console.log('excel')}>Excel</button>
                        <button className='export-button' onClick={() => console.log('pdf')}>Pdf</button>
                    </div>
                    <div className="opration-buttons-activity-table">

                        <Button
                            label="Add Training Sessions"
                            className={'btn-add-table'}
                            Icon={addTableIcon}
                            iconPosition={'left'}
                            width={'38%'}
                            height={'3rem'}
                            fontSize={'1.125rem'}
                            onClick={() => setIsAddModalOpen(true)}
                        />

                        <div class="search-container">
                            <label for="search-input">Search:</label>
                            <input type="text" id="search-input" placeholder="______________________" onChange={handleSearchInputChange} />
                        </div>

                    </div>
                </div>
                <div className="scrolled-table">
                    <table className="activity-table" style={{ width: '100%' }}>
                        <thead>
                            <tr className='activity-table-header'>
                                <th onClick={() => toggleSort('Session Date')}>Session Date</th>
                                <th onClick={() => toggleSort('StartAt')}>Start At</th>
                                <th onClick={() => toggleSort('EndAt')}>End At</th>
                                <th onClick={() => toggleSort('Duration')}>Duration</th>
                                <th onClick={() => toggleSort('NumberofAttendance')}>Number of Attendance</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(activity => (
                                <React.Fragment key={activity.id}>
                                    <tr
                                        className={`activity-table-row `}
                                    >
                                        <td className='' onClick={() => handleRowClick(activity.id)}>


                                            {activity.SessionDate}
                                        </td>
                                        <td >
                                            {activity.StartAt}

                                        </td>
                                        <td>{activity.EndAt}</td>
                                        <td>{activity.Duration}</td>
                                        <td>{activity.NumberofAttendance}</td>

                                        <td className='actions-table-btn'>
                                            <Button
                                                className={'action-table'}

                                                onClick={() => setIsDetailModalOpen(true)}
                                                Icon={detialeIcon}
                                                iconPosition={'left'}

                                            />
                                            <Button
                                                className={'action-table'}

                                                onClick={() => setIsEditModalOpen(true)}
                                                Icon={editIcon}
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
                <AddTrainingSessions
                    isOpen={isAddModalOpen}
                    onClose={handleModalClose}
                    projectData={selectedProjectData}
                    onSave={handleSaveAddedProject}
                />
                <TrainingReport
                    isOpen={isTrainingReportModalOpen}
                    onClose={handleModalClose}
                    projectData={selectedProjectData}
                    onSave={handleSaveTrainingReportProject}
                />
                <SRNReport
                    isOpen={isSRNReportModalOpen}
                    onClose={handleModalClose}
                    projectData={selectedProjectData}
                    onSave={handleSaveSRNReportProject}
                />
                <EditTrainingSessions
                    isOpen={isEditModalOpen}
                    onClose={handleModalClose}
                    projectData={selectedProjectData}
                    onSave={handleSaveEditedProject}
                />
                <AttendingTrainees
                    isOpen={isdetailModalOpen}
                    onClose={handleModalClose}
                    projectData={selectedProjectData}
                    onSave={handleSaveEDetailProject}
                    label={'Trainees Name'}
                    required
                />
                {showAlertConfirm &&
                    <AlertMessage
                        OnClickBtnTow={() => {
                            setShowAlertConfirm(false);
                            setShowAlertDelete(true);
                        }}
                        closeButton={true} lableButtonOne={'Cancel'}
                        lableButtonTow={'Yes, delete it !!'}
                        buttomTowActive={true}
                        headerText={'Are you sure to delete?'}
                        logo={infoCircle} ButtonClassTow={'button-confirm-delete'}
                        buttonClassFirst={'button-cancel'}
                        buttomText={'You will not be able to recover this Sessions !!'}
                        buttomTextMiddle={true}
                        onClose={handleModalClose} />}
                {showAlertDelete &&
                    <AlertMessage
                        lableButtonOne={'Ok'}
                        buttomTowActive={false}
                        headerText={'Deleted !!'}
                        logo={verify}
                        buttonClassFirst={'button-delete-t'}
                        buttomText={'Hey, This Sessions has been deleted!!'}
                        buttomTextMiddle={true}
                        closeButton
                        onClose={handleModalClose} />}
            </div>
        </div>
    );
};

export default TrainingSessions;
