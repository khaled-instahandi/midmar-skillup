import React, { useState, useEffect } from "react";

import Button from "../../../elements/Buttons/Button";
import editIcon from "../././../../images/edit-table-icon.svg";
import deleteIcon from "../././../../images/delete-table-icon.svg";
import addTableIcon from "../././../../images/add-square.svg";
import Pagination from "../../../elements/Pagination/Pagination";
import AlertMessage from "../../../elements/AlertMessage/AlertMessage";
import verify from "../../../images/verify2.svg";
import infoCircle from "../../../images/info-circle2.svg";
import AddTrainer from "./AddTrainer/AddTrainer";
import EditTrainer from "./EditTrainer/EditTrainer";

const sampleData = [
    {
        id: 1,
        fullName: "Admin",
        email: "m.nour.eng@gmail.com",
        phone: "+963125498",
        specialities: "Programming",
        payRate: "4.250 $",
        quantity: "Per Month"
    },
    {
        id: 2,
        fullName: "Nour Aldin",
        email: "mohammed.nour.eng@gmail.com",
        phone: "+963125498",
        specialities: "Graphic Design",
        payRate: "4.250 $",
        quantity: "Per Day"
    },
    {
        id: 3,
        fullName: "Mahmoud",
        email: "m.nour.eng@gmail.com",
        phone: "+963125498",
        specialities: "Programming",
        payRate: "4.250 $",
        quantity: "Per Hour"
    },
    {
        id: 4,
        fullName: "Walid",
        email: "m.nour.eng@gmail.com",
        phone: "+963125498",
        specialities: "Graphic Design",
        payRate: "4.250 $",
        quantity: "Per Year"
    },
    {
        id: 5,
        fullName: "Mohammed Nour",
        email: "mohammed.nour.eng@gmail.com",
        phone: "+963125498",
        specialities: "Programming",
        payRate: "4.250 $",
        quantity: "Per Service"
    },
    {
        id: 6,
        fullName: "Nour",
        email: "m.nour.eng@gmail.com",
        phone: "+963125498",
        specialities: "Graphic Design",
        payRate: "4.250 $",
        quantity: "Per Session"
    },
    {
        id: 7,
        fullName: "Hasan",
        email: "mohammed.nour.eng@gmail.com",
        phone: "+963125498",
        specialities: "Programming",
        payRate: "4.250 $",
        quantity: "Per Year"
    }
];

const defaultData = [...sampleData];

const TrainersTable = () => {
    const [activities, setActivities] = useState(sampleData);
    const [isSorted, setIsSorted] = useState(false);
    const [filterColumn, setFilterColumn] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [showAlertDelete, setShowAlertDelete] = useState(false);
    const [showAlertConfirm, setShowAlertConfirm] = useState(false);
    const [selectedProjectData, setSelectedProjectData] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Update to handle input change for search
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
        setCurrentPage(1);
    };

    // Function to determine if a trainer matches the search query
    const doesActivityMatchSearchTerm = (activity) => {
        return Object.values(activity).some((value) =>
            value.toString().toLowerCase().includes(searchQuery)
        );
    };

    // Integrated sorting and filtering
    useEffect(() => {
        let updatedActivities = [...defaultData];

        if (searchQuery) {
            updatedActivities = updatedActivities.filter(doesActivityMatchSearchTerm);
        }

        if (isSorted && filterColumn) {
            updatedActivities.sort((a, b) => {
                const valueA = a[filterColumn];
                const valueB = b[filterColumn];
                if (typeof valueA === "string" && typeof valueB === "string") {
                    return valueA.localeCompare(valueB);
                } else if (typeof valueA === "number" && typeof valueB === "number") {
                    return valueA - valueB;
                }
                return 0;
            });
        }

        setSortedActivities(updatedActivities);
    }, [searchQuery, isSorted, filterColumn]);

    const handleModalClose = () => {
        setIsAddModalOpen(false);
        setShowAlertDelete(false);
        setShowAlertConfirm(false);
        setIsEditModalOpen(false);
        setSelectedProjectData(null);
    };

    const handleSaveCreatedTrainer = (trainerData) => {
        console.log("Created trainer data:", trainerData);
        const newTrainer = {
            id: activities.length + 1,
            ...trainerData
        };
        const updatedActivities = [...activities, newTrainer];
        setActivities(updatedActivities);
        handleModalClose();
    };

    const handleSaveUpdatedTrainer = (trainerData) => {
        console.log("Updated trainer data:", trainerData);
        const updatedActivities = activities.map(activity =>
            activity.id === selectedProjectData.id ? { ...activity, ...trainerData } : activity
        );
        setActivities(updatedActivities);
        handleModalClose();
    };

    const handleDeleteProject = (activity) => {
        setSelectedProjectData(activity);
        setShowAlertConfirm(true);
    };

    const confirmDeleteTrainer = () => {
        const updatedActivities = activities.filter(activity => activity.id !== selectedProjectData.id);
        setActivities(updatedActivities);
        setShowAlertConfirm(false);
        setShowAlertDelete(true);
    };

    const handleEditProject = (activity) => {
        setSelectedProjectData(activity);
        setIsEditModalOpen(true);
    };

    const [sortedActivities, setSortedActivities] = useState(defaultData);
    const itemsPerPage = searchQuery ? sortedActivities.length : 8;
    const totalPages = Math.ceil(activities.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState(
        defaultData.slice(0, itemsPerPage)
    );

    useEffect(() => {
        setCurrentItems(
            sortedActivities.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
            )
        );
    }, [sortedActivities, currentPage, itemsPerPage]);

    const toggleSort = (columnName) => {
        let sortedData = [];
        if (filterColumn === columnName) {
            sortedData = sortedActivities.slice().reverse();
        } else {
            sortedData = defaultData.slice().sort((a, b) => {
                const valueA = a[columnName];
                const valueB = b[columnName];

                if (typeof valueA === "string" && typeof valueB === "string") {
                    return valueA.localeCompare(valueB);
                } else if (typeof valueA === "number" && typeof valueB === "number") {
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
                <h1>Dashboard Trainers</h1>

                <div className="header-activity-table">
                    <div className="export-buttons">
                        <span>Data Export</span>
                        <button className='export-button' onClick={() => console.log('csv')}>CSV</button>
                        <button className='export-button' onClick={() => console.log('excel')}>Excel</button>
                        <button className='export-button' onClick={() => console.log('pdf')}>Pdf</button>
                    </div>
                    <div className="opration-buttons-activity-table">
                        <Button
                            label="Add trainers"
                            className={'btn-add-table'}
                            Icon={addTableIcon}
                            iconPosition={'left'}
                            width={'33%'}
                            height={'3rem'}
                            fontSize={'1.125rem'}
                            onClick={() => setIsAddModalOpen(true)}
                        />
                        <div className="search-container">
                            <label htmlFor="search-input">Search:</label>
                            <input
                                type="text"
                                id="search-input"
                                placeholder="______________________"
                                onChange={handleSearchInputChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="scrolled-table">
                    <table className="activity-table" style={{ width: '100%' }}>
                        <thead>
                            <tr className='activity-table-header'>
                                <th onClick={() => toggleSort('id')}>Id</th>
                                <th onClick={() => toggleSort('fullName')}>Full Name</th>
                                <th onClick={() => toggleSort('email')}>Email</th>
                                <th onClick={() => toggleSort('phone')}>Phone</th>
                                <th onClick={() => toggleSort('specialities')}>Specialities</th>
                                <th onClick={() => toggleSort('payRate')}>pay rate</th>
                                <th onClick={() => toggleSort('quantity')}>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((activity) => (
                                <tr key={activity.id} className={`activity-table-row `}>
                                    <td>{activity.id}</td>
                                    <td>{activity.fullName}</td>
                                    <td>{activity.email}</td>
                                    <td>{activity.phone}</td>
                                    <td>{activity.specialities}</td>
                                    <td>{activity.payRate}</td>
                                    <td>{activity.quantity}</td>
                                    <td className='actions-table'>
                                        <Button
                                            className={'action-table'}
                                            onClick={() => handleEditProject(activity)}
                                            Icon={editIcon}
                                            iconPosition={'left'}
                                        />
                                        <Button
                                            className={'action-table'}
                                            onClick={() => handleDeleteProject(activity)}
                                            Icon={deleteIcon}
                                            iconPosition={'left'}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="pagination-table">
                    {searchQuery ? (
                        ""
                    ) : (
                        <Pagination
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={fetchDataForNewPage}
                            totalItems={defaultData.length}
                        />
                    )}
                </div>

                <AddTrainer
                    isOpen={isAddModalOpen}
                    onClose={handleModalClose}
                    onSave={handleSaveCreatedTrainer}
                />
                <EditTrainer
                    isOpen={isEditModalOpen}
                    onClose={handleModalClose}
                    projectData={selectedProjectData}
                    onSave={handleSaveUpdatedTrainer}
                />
                {showAlertConfirm && (
                    <AlertMessage
                        OnClickBtnTow={confirmDeleteTrainer}
                        closeButton={true}
                        lableButtonOne={"Cancel"}
                        lableButtonTow={"Yes, delete it !!"}
                        buttomTowActive={true}
                        headerText={"Are you sure to delete?"}
                        logo={infoCircle}
                        ButtonClassTow={"button-confirm-delete"}
                        buttonClassFirst={"button-cancel"}
                        buttomText={"You will not be able to recover this project !!"}
                        buttomTextMiddle={true}
                        onClose={handleModalClose}
                    />
                )}
                {showAlertDelete && (
                    <AlertMessage
                        lableButtonOne={"Ok"}
                        buttomTowActive={false}
                        headerText={"Deleted !!"}
                        logo={verify}
                        buttonClassFirst={"button-delete-t"}
                        buttomText={"Hey, This trainer has been deleted!!"}
                        buttomTextMiddle={true}
                        closeButton
                        onClose={handleModalClose}
                    />
                )}
            </div>
        </div>
    );
};

export default TrainersTable;
