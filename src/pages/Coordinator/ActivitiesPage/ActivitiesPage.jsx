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
import CircleProgressBar from '../../../components/CircleProgressBar/CircleProgressBar';
import './ActivitiesPage.css'
import { ReactComponent as VerticalLine } from '../../../images/vertical-line.svg'
const sampleData = [
    { id: 1, name: "Study of building resistant to seismic forces according", startDate: "2021-02-02", endDate: "2023-04-02", activityStatus: "Didn't start" },
    { id: 2, name: "aa of building resistant to seismic forces according", startDate: "2021-02-01", endDate: "2023-04-01", activityStatus: "Underway" },
    { id: 3, name: "bb of building resistant to seismic forces according", startDate: "2021-02-01", endDate: "2023-04-01", activityStatus: "Complete" },
    { id: 4, name: "cc of building resistant to seismic forces according", startDate: "2021-02-01", endDate: "2023-04-01", activityStatus: "Complete" },
    { id: 5, name: "dd of building resistant to seismic forces according", startDate: "2021-02-01", endDate: "2023-04-01", activityStatus: "Complete" },
    { id: 6, name: "ff of building resistant to seismic forces according", startDate: "2021-02-01", endDate: "2023-04-01", activityStatus: "Complete" },
    { id: 7, name: "Study of building resistant to seismic forces according", startDate: "2021-02-01", endDate: "2023-04-01", activityStatus: "Complete" },
    { id: 8, name: "jj of building resistant to seismic forces according", startDate: "2021-02-01", endDate: "2023-04-01", activityStatus: "Complete" },
    { id: 9, name: "zz of building resistant to seismic forces according", startDate: "2021-02-01", endDate: "2023-04-01", activityStatus: "Complete" },

];
const defaultData = [...sampleData];

const ActivitiesPage = () => {
    const [activities, setActivities] = useState(sampleData);
    const [expandedRows, setExpandedRows] = useState({});
    const [isSorted, setIsSorted] = useState(false);
    const [filterColumn, setFilterColumn] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
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
    };
    const handleSaveAddedProject = (editedData) => {
        console.log('Edited project data:', editedData);
        handleModalClose();
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

    const getStatusColor = (status) => {
        switch (status) {
            case 'Complete': return 'rgba(21, 139, 127, 1)';
            case 'Didn\'t start': return 'rgba(234, 81, 72, 1)';
            case 'Underway': return '#007AFF';
        }
    };
    const getactivityStatusIcon = (status, darage) => {
        switch (status) {
            case 'Complete': return <img src={verifyIcon} alt='' />;
            case 'Didn\'t start': return <> <img src={warningIcon} alt='' /> </>;
            case 'Underway': return <>  <VerticalLine /><CircleProgressBar value={darage} /> </>;
        }
    };
    return (
        <div className='activity-page'>

            <div className="activity-table-container">
                <h1>Activities for which he is responsible</h1>

                <div className="header-activity-table">
                    <div className="export-buttons">

                        <span>Data Export</span>
                        <button className='export-button' onClick={() => console.log('csv')}>CSV</button>
                        <button className='export-button' onClick={() => console.log('excel')}>Excel</button>
                        <button className='export-button' onClick={() => console.log('pdf')}>Pdf</button>
                    </div>
                    <div className="opration-buttons-activity-table">
                        {/* <Button
                        label="Add Sub Activities"
                        className={'btn-add-table'}
                        Icon={addTableIcon}
                        iconPosition={'left'}
                        width={'38%'}
                        height={'3rem'}
                        fontSize={'1.125rem'}
                        onClick={() => setIsAddModalOpen(true)}
                    /> */}
                        <div class="search-container">
                            <label for="search-input">Search:</label>
                            <input type="text" id="search-input" placeholder="______________________" onChange={handleSearchInputChange} />
                        </div>

                    </div>
                </div>
                <div className="scrolled-table">
                    <table className="activity-table" >
                        <thead>
                            <tr className='activity-table-header'>
                                <th onClick={() => toggleSort('name')}>Name</th>
                                <th onClick={() => toggleSort('startDate')}>Start Date</th>
                                <th onClick={() => toggleSort('endDate')}>End Date</th>
                                <th style={{ whiteSpace: 'nowrap', width: '13rem' }}>Activity status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(activity => (
                                <React.Fragment key={activity.id}>
                                    <tr
                                        className={`activity-table-row `}
                                    >
                                        <td style={{ whiteSpace: 'nowrap'}} className='name-activity-table' onClick={() => handleRowClick(activity.id)}>


                                            {activity.name}
                                        </td>

                                        <td>{activity.startDate}</td>
                                        <td >
                                            {activity.endDate}

                                        </td>
                                        <td className='activity-status' style={{ color: getStatusColor(activity.activityStatus), whiteSpace: 'nowrap' }}>

                                            {activity.activityStatus}
                                            
                                            <span>{getactivityStatusIcon(activity.activityStatus, 80)}</span>

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

            </div>
        </div>
    );
};

export default ActivitiesPage;
