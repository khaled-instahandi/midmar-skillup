import React, { useState, useMemo, useEffect } from 'react';
import './SubActivitiesTable.css';
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
import AddSubActivities from './AddSubActivities/AddSubActivities';

const sampleData = [
    { id: 1, name: "Study of building resistant to seismic forces according", type: "aa", description: "aBuilding Technical capacities", Attendance: "aonline", startDate: "2021-02-02", endDate: "2023-04-02" },
    { id: 2, name: "aa of building resistant to seismic forces according", type: "bb", description: "Building Technical capacities", Attendance: "online", startDate: "2021-02-01", endDate: "2023-04-01" },
    { id: 3, name: "bb of building resistant to seismic forces according", type: "cc", description: "Building Technical capacities", Attendance: "online", startDate: "2021-02-01", endDate: "2023-04-01" },
    { id: 4, name: "cc of building resistant to seismic forces according", type: "training", description: "Building Technical capacities", Attendance: "online", startDate: "2021-02-01", endDate: "2023-04-01" },
    { id: 5, name: "dd of building resistant to seismic forces according", type: "training", description: "Building Technical capacities", Attendance: "online", startDate: "2021-02-01", endDate: "2023-04-01" },
    { id: 6, name: "ff of building resistant to seismic forces according", type: "training", description: "Building Technical capacities", Attendance: "online", startDate: "2021-02-01", endDate: "2023-04-01" },
    { id: 7, name: "Study of building resistant to seismic forces according", type: "training", description: "Building Technical capacities", Attendance: "online", startDate: "2021-02-01", endDate: "2023-04-01" },
    { id: 8, name: "jj of building resistant to seismic forces according", type: "training", description: "Building Technical capacities", Attendance: "online", startDate: "2021-02-01", endDate: "2023-04-01" },
    { id: 9, name: "zz of building resistant to seismic forces according", type: "training", description: "Building Technical capacities", Attendance: "online", startDate: "2021-02-01", endDate: "2023-04-01" },

];
const defaultData = [...sampleData];

const SubActivitiesTable = () => {
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


    return (
        <div className="activity-table-container">
            <h1>Sub Activities</h1>

            <div className="header-activity-table">
                <div className="export-buttons">

                    <span>Data Export</span>
                    <button className='export-button' onClick={() => console.log('csv')}>CSV</button>
                    <button className='export-button' onClick={() => console.log('excel')}>Excel</button>
                    <button className='export-button' onClick={() => console.log('pdf')}>Pdf</button>
                </div>
                <div className="opration-buttons-activity-table">
                    <Button
                        label="Add Sub Activities"
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
                            <th onClick={() => toggleSort('name')}>Name</th>
                            <th onClick={() => toggleSort('type')}>type</th>
                            <th onClick={() => toggleSort('description')}>description</th>
                            <th onClick={() => toggleSort('Attendance')}>Attendance</th>

                            <th onClick={() => toggleSort('startDate')}>Start Date</th>
                            <th onClick={() => toggleSort('endDate')}>End Date</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map(activity => (
                            <React.Fragment key={activity.id}>
                                <tr
                                    className={`activity-table-row `}
                                >
                                    <td className='name-activity-table' onClick={() => handleRowClick(activity.id)}>


                                        {activity.name}
                                    </td>
                                    <td >
                                        {activity.type}

                                    </td>
                                    <td className='name-activity-table'>{activity.description}</td>
                                    <td>{activity.Attendance}</td>
                                    <td>{activity.startDate}</td>
                                    <td >
                                        {activity.endDate}

                                    </td>
                                    <td className='actions-table-btn'>
                                        <Button
                                            className={'action-table'}

                                            onClick={() => console.log('detils sup activity :', activity.id)}
                                            Icon={detialeIcon}
                                            iconPosition={'left'}

                                        />
                                        <Button
                                            className={'action-table'}

                                            onClick={() => console.log('Clicked button')}
                                            Icon={editIcon}
                                            iconPosition={'left'}

                                        />
                                        <Button
                                            className={'action-table'}

                                            onClick={() => console.log('Clicked button')}
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
            <AddSubActivities
                isOpen={isAddModalOpen}
                onClose={handleModalClose}
                projectData={selectedProjectData}
                onSave={handleSaveAddedProject}
            />
        </div>
    );
};

export default SubActivitiesTable;
