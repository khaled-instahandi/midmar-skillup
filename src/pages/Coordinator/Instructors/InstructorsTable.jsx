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
import smsIcon from '../././../../images/sms-icon.svg'

import arrowRightIcon from '../././../../images/arrow-right.svg'
import Pagination from '../../../elements/Pagination/Pagination';
import AddInstructors from './AddInstructors/AddInstructors';

import PaginationTwo from '../../../elements/Pagination/PaginationTwo';
import ChartIcon from '../../../images/chart-icon.svg'
import './Instructors.css'
import CircleProgressBar from '../../../components/CircleProgressBar/CircleProgressBar';
import SendEmails from './SendEmails/SendEmails';
const sampleData = [
    { id: 1, InstructorName: "khaled alahmad", Qualification: "Master", Evaluationscore: "90", },
    { id: 2, InstructorName: "khaled alahmad", Qualification: "Master", Evaluationscore: "90", },
    { id: 3, InstructorName: "khaled alahmad", Qualification: "Master", Evaluationscore: "90", },
    { id: 4, InstructorName: "khaled alahmad", Qualification: "Master", Evaluationscore: "90", },
    { id: 5, InstructorName: "khaled alahmad", Qualification: "Master", Evaluationscore: "90", },
    { id: 6, InstructorName: "khaled alahmad", Qualification: "Master", Evaluationscore: "90", },
    { id: 7, InstructorName: "khaled alahmad", Qualification: "Master", Evaluationscore: "90", },
    { id: 8, InstructorName: "khaled alahmad", Qualification: "Master", Evaluationscore: "90", },
    { id: 9, InstructorName: "khaled alahmad", Qualification: "Master", Evaluationscore: "90", },
    { id: 10, InstructorName: "khaled alahmad", Qualification: "Master", Evaluationscore: "90", },
    { id: 11, InstructorName: "khaled alahmad", Qualification: "Master", Evaluationscore: "90", },
];
const defaultData = [...sampleData];

const Instructors = () => {
    const [activities, setActivities] = useState(sampleData);
    const [expandedRows, setExpandedRows] = useState({});
    const [isSorted, setIsSorted] = useState(false);
    const [filterColumn, setFilterColumn] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortedActivities, setSortedActivities] = useState(sampleData);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isSendModalOpen, setIsSendModalOpen] = useState(false);

    const [selectedProjectData, setSelectedProjectData] = useState(null);

    const handleSaveAddedProject = (editedData) => {
        console.log('Edited project data:', editedData);
        // handleModalClose();
    };
    const handleSendAddedProject = (editedData) => {
        console.log('Edited project data:', editedData);
        // handleModalClose();
    };
    const handleModalClose = () => {
        setIsAddModalOpen(false);
        setIsSendModalOpen(false);

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

    const fetchDataForNewPage = (page) => {
        setCurrentPage(page);
    };


    return (
        <div className='activity-page'>

            <div className="activity-table-container">
                <h1>Appoint a Instructors</h1>

                <div className="header-activity-table">
                    <div className="export-buttons">

                        <span>Data Export</span>
                        <button className='export-button' onClick={() => console.log('csv')}>CSV</button>
                        <button className='export-button' onClick={() => console.log('excel')}>Excel</button>
                        <button className='export-button' onClick={() => console.log('pdf')}>Pdf</button>
                    </div>
                    <div className="opration-buttons-activity-table">
                        <div className="header-btn-instructors">
                            <Button
                                onClick={() => setIsSendModalOpen(true)}
                                label="Send emails"
                                className={'button-import'}
                                Icon={smsIcon}
                                iconPosition={'left'}
                                width={'38%'}
                                height={'3rem'}
                                fontSize={'1.125rem'}
                            />
                            <Button
                                onClick={() => setIsAddModalOpen(true)}
                                label="Add Instructor"
                                className={'btn-add-green ml-1-instructors'}
                                Icon={addTableIcon}
                                iconPosition={'left'}
                                width={'38%'}
                                height={'3rem'}
                                fontSize={'1.125rem'}
                            />
                        </div>
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
                                <th onClick={() => toggleSort('InstructorName')}>Instructor Name</th>
                                <th onClick={() => toggleSort('Qualification')}>Qualification</th>
                                <th onClick={() => toggleSort('Evaluationscore')}>Evaluationscore</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(item => (
                                <React.Fragment key={item.id}>
                                    <tr
                                        className={`activity-table-row `}
                                    >
                                        <td>{item.InstructorName}</td>
                                        <td >
                                            {item.Qualification}
                                        </td>

                                        <td>
                                            <CircleProgressBar value={item.Evaluationscore} />

                                            {item.Evaluationscore}%</td>

                                        <td className='actions-table-btn' >
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
                <AddInstructors
                    isOpen={isAddModalOpen}
                    onClose={handleModalClose}
                    projectData={selectedProjectData}
                    onSave={handleSaveAddedProject}
                />
                <SendEmails
                    isOpen={isSendModalOpen}
                    onClose={handleModalClose}
                    projectData={selectedProjectData}
                    onSave={handleSendAddedProject}
                />
            </div>
        </div>
    );
};

export default Instructors;
