import React, { useState, useMemo, useEffect } from 'react';
import closeIcon from '../../../images/close-circle-red.svg'
import tickIcon from '../../../images/tick-circle.svg'

import Button from '../../../elements/Buttons/Button';

import addTableIcon from '../././../../images/add-square.svg'
import Pagination from '../../../elements/Pagination/Pagination';
import AlertMessage from '../../../elements/AlertMessage/AlertMessage';

import verify from '../../../images/verify2.svg';
import infoCircle from '../../../images/info-circle2.svg';
import AddLeaveRequest from '../AddLeaveRequest/AddLeaveRequest';

const sampleData = [
    {
        id: 1, TypeOfAbsence: "Maternity", FromDate: "12/12/2023", ToDate: "14/12/2023", note: "He needs a big smile. Mauris flatters the elit, needs the tincidunt nibh pulvina", State: "acceptable"
    },
    {
        id: 2, TypeOfAbsence: "Marriage", FromDate: "12/12/2023", ToDate: "14/12/2023", note: "He needs a big smile. Mauris flatters the elit, needs the tincidunt nibh pulvina", State: "rejected"
    },
    {
        id: 3, TypeOfAbsence: "Maternity", FromDate: "12/12/2023", ToDate: "14/12/2023", note: "He needs a big smile. Mauris flatters the elit, needs the tincidunt nibh pulvina", State: "acceptable"
    },
    {
        id: 4, TypeOfAbsence: "Marriage", FromDate: "12/12/2023", ToDate: "14/12/2023", note: "He needs a big smile. Mauris flatters the elit, needs the tincidunt nibh pulvina", State: "rejected"
    },
    {
        id: 5, TypeOfAbsence: "Maternity", FromDate: "12/12/2023", ToDate: "14/12/2023", note: "He needs a big smile. Mauris flatters the elit, needs the tincidunt nibh pulvina", State: "acceptable"
    },
    {
        id: 6, TypeOfAbsence: "Marriage", FromDate: "12/12/2023", ToDate: "14/12/2023", note: "He needs a big smile. Mauris flatters the elit, needs the tincidunt nibh pulvina", State: "rejected"
    },
    {
        id: 7, TypeOfAbsence: "Maternity", FromDate: "12/12/2023", ToDate: "14/12/2023", note: "He needs a big smile. Mauris flatters the elit, needs the tincidunt nibh pulvina", State: "acceptable"
    },
    {
        id: 8, TypeOfAbsence: "Marriage", FromDate: "12/12/2023", ToDate: "14/12/2023", note: "He needs a big smile. Mauris flatters the elit, needs the tincidunt nibh pulvina", State: "rejected"
    },

];
const defaultData = [...sampleData];

const VacationsTable = () => {
    const [activities, setActivities] = useState(sampleData);
    const [sortedActivities, setSortedActivities] = useState(sampleData);
    const [isSorted, setIsSorted] = useState(false);
    const [filterColumn, setFilterColumn] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProjectData, setSelectedProjectData] = useState(null);
    const handleModalClose = () => {
        setIsAddModalOpen(false);


    };
    const handleSaveDetailedProject = (editedData) => {
        console.log('Edited project data:', editedData);
        handleModalClose();
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
    const itemsPerPage = searchQuery ? sortedActivities.length : 4;
    const totalPages = Math.ceil(sortedActivities.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState(
        sortedActivities.slice(0, itemsPerPage)
    );

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
                <h1>All Vacations</h1>

                <div className="header-activity-table">
                    <div className="export-buttons">

                        <span>Data Export</span>
                        <button className='export-button' onClick={() => console.log('csv')}>CSV</button>
                        <button className='export-button' onClick={() => console.log('excel')}>Excel</button>
                        <button className='export-button' onClick={() => console.log('pdf')}>Pdf</button>
                    </div>
                    <div className="opration-buttons-activity-table">
                        <Button
                            label="Add Leave Request"
                            className={'btn-add-table'}
                            Icon={addTableIcon}
                            iconPosition={'left'}
                            width={'35%'}
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
                                <th style={{ width: '6rem' }} onClick={() => toggleSort('id')}>id </th>
                                <th onClick={() => toggleSort('TypeOfAbsence')}>Type Of Absence</th>
                                <th onClick={() => toggleSort('FromDate')}>FromDate</th>
                                <th onClick={() => toggleSort('ToDate')}>ToDate</th>

                                <th onClick={() => toggleSort('note')}>note</th>
                                <th onClick={() => toggleSort('State')}>State</th>

                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(activity => (
                                <React.Fragment key={activity.id}>
                                    <tr
                                        className={`activity-table-row `}
                                    >
                                        <td>
                                            {activity.id}
                                        </td>
                                        <td >


                                            {activity.TypeOfAbsence}
                                        </td>
                                        <td >
                                            {activity.FromDate}

                                        </td>
                                        <td className="activity-status">
                                            {activity.ToDate}

                                        </td>
                                        <td style={{ minWidth: '350px' }}>
                                            {activity.note}

                                        </td>
                                        <td className="activity-status">

                                            {activity.State === 'rejected' ? <>
                                                <span>{activity.State}<img src={closeIcon} alt="" /> </span>
                                            </> : <>
                                                {activity.State === 'acceptable' ? <>
                                                    <span >{activity.State} <img src={tickIcon} alt="" /></span>
                                                </> : <>
                                                    {activity.State}

                                                </>}

                                            </>}


                                        </td>
                                        {/* <td >
                                            {activity.Signatures === 'Rejected' ? <>
                                                <span className="rejected">{activity.Signatures}<img src={closeIcon} alt="" /> </span>
                                            </> : <>
                                                {activity.Signatures === '5/5' ? <>
                                                    <span className="complite-p">{activity.Signatures} <img src={tickIcon} alt="" /></span>
                                                </> : <>
                                                    {activity.Signatures}

                                                </>}

                                            </>}
                                        </td> */}

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
                <AddLeaveRequest hederText={'Leave Request'}
                    scale={'.9'}
                    isOpen={isAddModalOpen}
                    onClose={handleModalClose}
                    projectData={selectedProjectData}
                    onSave={handleSaveDetailedProject} />

            </div>
        </div>
    );
};

export default VacationsTable;
