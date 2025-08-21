import React, { useState, useMemo, useEffect } from "react";
import "./UserProfilesTable.css";

import addIcon from "../././../../images/add-table-icon.svg";
import eyeIcon from "../././../../images/edit-table-icon.svg";
import deleteIcon from "../././../../images/delete-table-icon.svg";
import Button from "../../../elements/Buttons/Button";
import arrowDown from "../././../../images/arrow-down-icon.svg";
import arrowUp from "../././../../images/arrow-up-icon.svg";
import arrowMiddle from "../././../../images/arrow-middle-icon.svg";
import detialeIcon from "../././../../images/detials-tavle-icon.svg";
import addTableIcon from "../././../../images/add-square.svg";
import Pagination from "../../../elements/Pagination/Pagination";
import sortIcon from "../././../../images/sort-icon.svg";
import AlertMessage from "../../../elements/AlertMessage/AlertMessage";
import verify from "../../../images/verify2.svg";
import infoCircle from "../../../images/info-circle2.svg";
import AddUserProfile from "./AddUserProfile/AddUserProfile";
import EditUserProfile from "./EditUserProfile/EditUserProfile";

const sampleData = [
    {
        id: 1,
        name: "Trainee",
        privileges: ["Trainee Pages", "Upload Files", "Instructor Pages", "View Activities"]
    },
    {
        id: 2,
        name: "Instructor & Trainee",
        privileges: ["Trainee Pages", "Upload Files", "Statistics Budget", "View Activities"]
    },
    {
        id: 3,
        name: "Project Officer",
        privileges: ["Trainee Pages", "Upload Files", "Statistics Budget", "View Activities", "Edit Projects", "Delete Delegations", "Purchase Requests Signatures", "Hold Up to 250 Budget"]
    },
    {
        id: 4,
        name: "Projects Coordinator",
        privileges: ["Delete Delegations", "Upload Files", "Hold Up to 250 Budget", "Upload Files"]
    },
    {
        id: 5,
        name: "Activity Coordinator",
        privileges: ["Trainee Pages", "Upload Files", "Statistics Budget", "View Activities"]
    }
];

const defaultData = [...sampleData];

const UserProfilesTable = () => {
    const [activities, setActivities] = useState(sampleData);
    const [isSorted, setIsSorted] = useState(false);
    const [filterColumn, setFilterColumn] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [showAlertDelete, setShowAlertDelete] = useState(false);
    const [showAlertConfirm, setShowAlertConfirm] = useState(false);
    const [selectedUserProfile, setSelectedUserProfile] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Update to handle input change for search
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
        setCurrentPage(1); // Reset to first page on search
    };

    // Function to determine if an activity matches the search query
    const doesActivityMatchSearchTerm = (activity) => {
        return Object.values(activity).some((value) => {
            if (Array.isArray(value)) {
                return value.some(item => item.toString().toLowerCase().includes(searchQuery));
            }
            return value.toString().toLowerCase().includes(searchQuery);
        });
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
        setSelectedUserProfile(null);
    };

    const handleSaveAddedProfile = (profileData) => {
        console.log("Added profile data:", profileData);
        // Add logic to save the new profile
        const newProfile = {
            id: sampleData.length + 1,
            ...profileData
        };
        sampleData.push(newProfile);
        setActivities([...sampleData]);
        handleModalClose();
    };

    const handleSaveUpdatedProfile = (profileData) => {
        console.log("Updated profile data:", profileData);
        // Add logic to update the profile
        handleModalClose();
    };

    const handleDeleteProfile = (profile) => {
        setSelectedUserProfile(profile);
        setShowAlertConfirm(true);
    };

    const handleEditProfile = (profile) => {
        setSelectedUserProfile(profile);
        setIsEditModalOpen(true);
    };

    const [sortedActivities, setSortedActivities] = useState(sampleData);
    const itemsPerPage = searchQuery ? sortedActivities.length : 4;
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
            // Toggle between ascending and descending order
            sortedData = sortedActivities.slice().reverse();
        } else {
            sortedData = sampleData.slice().sort((a, b) => {
                const valueA = a[columnName];
                const valueB = b[columnName];

                // Handle different data types
                if (typeof valueA === "string" && typeof valueB === "string") {
                    return valueA.localeCompare(valueB);
                } else if (typeof valueA === "number" && typeof valueB === "number") {
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

    const renderPrivileges = (privileges) => {
        return (
            <div className="privileges-container">
                {privileges.map((privilege, index) => (
                    <span key={index} className="privilege-tag">
                        {privilege}
                    </span>
                ))}
                {/* {privileges.length > 3 && (
                    <span className="privilege-more">+{privileges.length - 3} more</span>
                )} */}
            </div>
        );
    };

    return (
        <div className="activity-page">
            <div className="activity-table-container">
                <h1>User Profiles</h1>

                <div className="header-activity-table">
                    <div className="export-buttons">
                        <span>Data Export</span>
                        <button
                            className="export-button"
                            onClick={() => console.log("csv")}
                        >
                            CSV
                        </button>
                        <button
                            className="export-button"
                            onClick={() => console.log("excel")}
                        >
                            Excel
                        </button>
                        <button
                            className="export-button"
                            onClick={() => console.log("pdf")}
                        >
                            Pdf
                        </button>
                    </div>
                    <div className="opration-buttons-activity-table">
                        <Button
                            label="Create New"
                            className={"btn-add-table"}
                            Icon={addTableIcon}
                            iconPosition={"left"}
                            width={"33%"}
                            height={"3rem"}
                            fontSize={"1.125rem"}
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
                    <table className="activity-table" style={{ width: "100%" }}>
                        <thead>
                            <tr className="activity-table-header">
                                <th onClick={() => toggleSort("id")}>
                                    ID
                                </th>
                                <th onClick={() => toggleSort("name")}>
                                    Name
                                </th>
                                <th>Privileges</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((profile) => (
                                <React.Fragment key={profile.id}>
                                    <tr className={`activity-table-row `}>
                                        <td>{profile.id}</td>
                                        <td>{profile.name}</td>
                                        <td className="privileges-cell">
                                            {renderPrivileges(profile.privileges)}
                                        </td>
                                        <td className="actions-table-btn">
                                            <Button
                                                className={"action-table"}
                                                onClick={() => handleEditProfile(profile)}
                                                Icon={eyeIcon}
                                                iconPosition={"left"}
                                            />
                                            <Button
                                                className={"action-table"}
                                                onClick={() => handleDeleteProfile(profile)}
                                                Icon={deleteIcon}
                                                iconPosition={"left"}
                                            />
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="pagination-table">
                    {searchQuery ? (
                        ""
                    ) : (
                        <>
                            <Pagination
                                itemsPerPage={itemsPerPage}
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={fetchDataForNewPage}
                                totalItems={sampleData.length}
                            />
                        </>
                    )}
                </div>

                <AddUserProfile
                    isOpen={isAddModalOpen}
                    onClose={handleModalClose}
                    onSave={handleSaveAddedProfile}
                />
                <EditUserProfile
                    isOpen={isEditModalOpen}
                    onClose={handleModalClose}
                    profileData={selectedUserProfile}
                    onSave={handleSaveUpdatedProfile}
                />
                {showAlertConfirm && (
                    <AlertMessage
                        OnClickBtnTow={() => {
                            setShowAlertConfirm(false);
                            setShowAlertDelete(true);
                        }}
                        closeButton={true}
                        lableButtonOne={"Cancel"}
                        lableButtonTow={"Yes, delete it !!"}
                        buttomTowActive={true}
                        headerText={"Are you sure to delete?"}
                        logo={infoCircle}
                        ButtonClassTow={"button-confirm-delete"}
                        buttonClassFirst={"button-cancel"}
                        buttomText={"You will not be able to recover this profile !!"}
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
                        buttomText={"Hey, This profile has been deleted!!"}
                        buttomTextMiddle={true}
                        closeButton
                        onClose={handleModalClose}
                    />
                )}
            </div>
        </div>
    );
};

export default UserProfilesTable;
