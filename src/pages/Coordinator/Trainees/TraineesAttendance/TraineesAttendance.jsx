import React, { useState, useMemo, useEffect } from 'react';
import exportIcon from '../././../../../images/export-table.svg'
import warningIcon from '../././../../../images/warning-table.svg'
import verifyIcon from '../././../../../images/verify-table.svg'
import updateIcon from '../././../../../images/update-table-icon.svg'
import editIcon from '../././../../../images/edit-table-icon.svg'
import addIcon from '../././../../../images/add-table-icon.svg'
import deleteIcon from '../././../../../images/delete-table-icon.svg'
import Button from '../../../../elements/Buttons/Button';
import detialeIcon from '../././../../../images/detials-tavle-icon.svg'
import addTableIcon from '../././../../../images/add-square.svg'
import TimerIcon from '../././../../../images/timer-btn.svg'
import closeIcon from '../../../../images/close-circle-red.svg'
import tickIcon from '../../../../images/tick-circle.svg'

import smsIcon from '../././../../../images/sms-icon.svg'

import arrowRightIcon from '../././../../../images/arrow-right.svg'
import Pagination from '../../../../elements/Pagination/Pagination';
import AddInstructors from '../../../../pages/Coordinator/Instructors/AddInstructors/AddInstructors';

import ChartIcon from '../../../../images/chart-icon.svg'
import CircleProgressBar from '../../../../components/CircleProgressBar/CircleProgressBar';
import SendEmailsTrainees from '../SendEmailsTrainees/SendEmailsTrainees';
import AddTrainees from '../AddTrainees/AddTrainees';
import PendingEnrollmentRequests from '../PendingEnrollmentRequests/PendingEnrollmentRequests';
import AlertMessage from '../../../../elements/AlertMessage/AlertMessage';
import verify from '../../../../images/verify2.svg';
import infoCircle from '../../../../images/info-circle2.svg';
import './TraineesAttendance.css'
const sampleData = [

    { id: 1, FullNameEn: "khaled alahmad", FullNameAr: "خالد الاحمد", Gender: "Male", Date: { "2024-01-12": "Yes", "2024-01-13": "no", "2024-01-14": "yes", "2024-01-15": "yes", "2024-01-16": "no", } },
    { id: 2, FullNameEn: "khaled alahmad", FullNameAr: "خالد الاحمد", Gender: "Male", Date: { "2024-01-12": "yes", "2024-01-13": "no", "2024-01-14": "yes", "2024-01-15": "yes", "2024-01-16": "no", } },
    { id: 3, FullNameEn: "khaled alahmad", FullNameAr: "خالد الاحمد", Gender: "Male", Date: { "2024-01-12": "yes", "2024-01-13": "no", "2024-01-14": "yes", "2024-01-15": "yes", "2024-01-16": "no", } },
    { id: 4, FullNameEn: "khaled alahmad", FullNameAr: "خالد الاحمد", Gender: "Male", Date: { "2024-01-12": "yes", "2024-01-13": "no", "2024-01-14": "yes", "2024-01-15": "yes", "2024-01-16": "no", } },
    { id: 5, FullNameEn: "khaled alahmad", FullNameAr: "خالد الاحمد", Gender: "Male", Date: { "2024-01-12": "yes", "2024-01-13": "no", "2024-01-14": "yes", "2024-01-15": "yes", "2024-01-16": "no", } },
    { id: 6, FullNameEn: "khaled alahmad", FullNameAr: "خالد الاحمد", Gender: "Male", Date: { "2024-01-12": "yes", "2024-01-13": "no", "2024-01-14": "yes", "2024-01-15": "yes", "2024-01-16": "no", } },
    { id: 7, FullNameEn: "khaled alahmad", FullNameAr: "خالد الاحمد", Gender: "Male", Date: { "2024-01-12": "yes", "2024-01-13": "no", "2024-01-14": "yes", "2024-01-15": "yes", "2024-01-16": "yes", } },


];
const defaultData = [...sampleData];

const TraineesAttendance = () => {
    const [activities, setActivities] = useState(sampleData);
    const [isSorted, setIsSorted] = useState(false);
    const [filterColumn, setFilterColumn] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortedActivities, setSortedActivities] = useState(sampleData);




    const doesActivityMatchSearchTerm = (activity) => {
        return Object.values(activity).some(value =>
            value.toString().toLowerCase().includes(searchQuery)
        );
    };

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
            sortedData = sortedActivities.slice().reverse();
        } else {
            sortedData = sampleData.slice().sort((a, b) => {
                const valueA = a[columnName];
                const valueB = b[columnName];

                if (typeof valueA === 'string' && typeof valueB === 'string') {
                    return valueA.localeCompare(valueB);
                } else if (typeof valueA === 'number' && typeof valueB === 'number') {
                    return valueA - valueB;
                } else {
                    return 0;
                }
            });
        }

        setFilterColumn(columnName);
        setSortedActivities(sortedData);
        setIsSorted(true);
        setCurrentPage(1);
    };

    const fetchDataForNewPage = (page) => {
        setCurrentPage(page);
    };


    return (
        <div className='activity-page'>

            <div className="activity-table-container">
                <h1>Trainees Attendance</h1>

                <div className="header-activity-table">
                    <div className="export-buttons">

                        <span>Data Export</span>
                        <button className='export-button' onClick={() => console.log('csv')}>CSV</button>
                        <button className='export-button' onClick={()    => console.log('excel')}>Excel</button>
                        <button className='export-button' onClick={() => console.log('pdf')}>Pdf</button>
                    </div>
                    {/* <div className="opration-buttons-activity-table">
                        <div className="header-btn-instructors">

                        </div>
                        <div class="search-container">
                            <label for="search-input">Search:</label>
                            <input type="text" id="search-input" placeholder="______________________" onChange={handleSearchInputChange} />
                        </div>

                    </div> */}
                </div>
                <div className="scrolled-table">
                    <table className="activity-table">
                        <thead>
                            <tr className='activity-table-header'>
                                <th onClick={() => toggleSort('FullNameEn')}>Full Name (English)</th>
                                <th onClick={() => toggleSort('FullNameAr')}>Full Name (Arabic)</th>
                                <th onClick={() => toggleSort('Gender')}>Gender</th>

                                {Object.keys(sampleData[0].Date).map((date, index) => (
                                    <th style={{whiteSpace:'nowrap'}} key={index} onClick={() => toggleSort(date)}>{date}</th>
                                ))}

                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map(item => (
                                <React.Fragment key={item.id}>
                                    <tr
                                        className={`activity-table-row `}
                                    >
                                        <td>{item.FullNameEn}</td>
                                        <td >
                                            {item.FullNameAr}
                                        </td>
                                        <td>
                                            {item.Gender}
                                        </td>
                                        {Object.keys(item.Date).map((date, index) => {
                                            const lowerCaseValue = item.Date[date].toLowerCase();
                                            const upperCaseValue = item.Date[date].toUpperCase();
                                            return (
                                                <td key={index}>
                                                    {lowerCaseValue === "yes" || upperCaseValue === "YES" ? (
                                                        <span className="yes-date">{item.Date[date].toUpperCase()}<img src={tickIcon} alt="" /></span>
                                                    ) : (
                                                        lowerCaseValue === "no" || upperCaseValue === "NO" ? (
                                                            <span className="no-date">{item.Date[date].toUpperCase()}<img src={closeIcon} alt="" /></span>
                                                        ) : (
                                                            item.Date[date].toUpperCase()
                                                        )
                                                    )}
                                                </td>
                                            );
                                        })}

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

export default TraineesAttendance;
