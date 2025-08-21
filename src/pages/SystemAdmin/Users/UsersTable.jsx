import React, { useState, useEffect } from "react";
import "./UsersTable.css";

import addIcon from "../././../../images/add-table-icon.svg";
import emailIcon from "../././../../images/email-icon.svg";
import eyeIcon from "../././../../images/edit-table-icon.svg";
import deleteIcon from "../././../../images/delete-table-icon.svg";
import Button from "../../../elements/Buttons/Button";
import addTableIcon from "../././../../images/add-square.svg";
import Pagination from "../../../elements/Pagination/Pagination";
import AlertMessage from "../../../elements/AlertMessage/AlertMessage";
import verify from "../../../images/verify2.svg";
import infoCircle from "../../../images/info-circle2.svg";
import CreateUser from "./CreateUser/CreateUser";
import EditUser from "./EditUser/EditUser";
import SendEmail from "./SendEmail/SendEmail";

const sampleData = [
  {
    id: 1,
    firstNameArabic: "مسؤول",
    lastNameArabic: "مسؤول",
    firstNameEnglish: "Admin",
    lastNameEnglish: "Admin",
    fullNameEnglish: "Admin",
    email: "m.nour.eng@gmail.com",
    type: "Management",
    privileges: "Staff",
    educationLevel: "graduated",
    birthDate: "01/01/2024",
    emailVerified: true,
    selected: false,
  },
  {
    id: 2,
    firstNameArabic: "نور الدين",
    lastNameArabic: "الأحمد",
    firstNameEnglish: "Nour Aldin",
    lastNameEnglish: "Ahmad",
    fullNameEnglish: "Nour Aldin",
    email: "mohammed.nour.eng@gmail.com",
    type: "type1",
    privileges: "SysAdmin",
    educationLevel: "graduated",
    birthDate: "01/01/2024",
    emailVerified: true,
    selected: false,
  },
  {
    id: 3,
    firstNameArabic: "محمود",
    lastNameArabic: "شما",
    firstNameEnglish: "Mahmoud",
    lastNameEnglish: "Shama",
    fullNameEnglish: "Mahmoud",
    email: "m.nour.eng@gmail.com",
    type: "Management",
    privileges: "User",
    educationLevel: "graduated",
    birthDate: "01/01/2024",
    emailVerified: true,
    selected: false,
  },
  {
    id: 4,
    firstNameArabic: "وليد",
    lastNameArabic: "المحمد",
    firstNameEnglish: "Walid",
    lastNameEnglish: "Almohammad",
    fullNameEnglish: "Walid",
    email: "m.nour.eng@gmail.com",
    type: "type1",
    privileges: "Staff",
    educationLevel: "graduated",
    birthDate: "01/01/2024",
    emailVerified: true,
    selected: false,
  },
  {
    id: 5,
    firstNameArabic: "محمد نور",
    lastNameArabic: "المحمود",
    firstNameEnglish: "Mohammed Nour",
    lastNameEnglish: "Almahmod",
    fullNameEnglish: "Mohammed Nour",
    email: "mohammed.nour.eng@gmail.com",
    type: "Management",
    privileges: "User",
    educationLevel: "graduated",
    birthDate: "01/01/2024",
    emailVerified: false,
    selected: false,
  },
  {
    id: 6,
    firstNameArabic: "نور",
    lastNameArabic: "نور",
    firstNameEnglish: "Nour",
    lastNameEnglish: "Nour",
    fullNameEnglish: "Nour",
    email: "m.nour.eng@gmail.com",
    type: "type1",
    privileges: "Staff",
    educationLevel: "graduated",
    birthDate: "01/01/2024",
    emailVerified: false,
    selected: false,
  },
  {
    id: 7,
    firstNameArabic: "حسن",
    lastNameArabic: "حسن",
    firstNameEnglish: "Hasan",
    lastNameEnglish: "Hasan",
    fullNameEnglish: "Hasan",
    email: "mohammed.nour.eng@gmail.com",
    type: "Management",
    privileges: "SysAdmin",
    educationLevel: "graduated",
    birthDate: "01/01/2024",
    emailVerified: true,
    selected: false,
  },
];

const UsersTable = () => {
  const [users, setUsers] = useState(sampleData);
  const [isSorted, setIsSorted] = useState(false);
  const [filterColumn, setFilterColumn] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isSendEmailModalOpen, setIsSendEmailModalOpen] = useState(false);
  const [showAlertDelete, setShowAlertDelete] = useState(false);
  const [showAlertConfirm, setShowAlertConfirm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectAll, setSelectAll] = useState(false);

  // Update to handle input change for search
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  // Function to determine if a user matches the search query
  const doesUserMatchSearchTerm = (user) => {
    return Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(searchQuery)
    );
  };

  // Integrated sorting and filtering - use users state instead of sampleData
  useEffect(() => {
    let updatedUsers = [...users];

    if (searchQuery) {
      updatedUsers = updatedUsers.filter(doesUserMatchSearchTerm);
    }

    if (isSorted && filterColumn) {
      updatedUsers.sort((a, b) => {
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

    setSortedUsers(updatedUsers);
  }, [searchQuery, isSorted, filterColumn, users]);

  const handleModalClose = () => {
    setIsCreateModalOpen(false);
    setShowAlertDelete(false);
    setShowAlertConfirm(false);
    setIsEditModalOpen(false);
    setIsSendEmailModalOpen(false);
    setSelectedUser(null);
  };

  const handleSaveCreatedUser = (userData) => {
    console.log("Created user data:", userData);
    const newUser = {
      id: users.length + 1,
      ...userData,
      selected: false,
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    handleModalClose();
  };

  const handleSaveUpdatedUser = (userData) => {
    console.log("Updated user data:", userData);
    handleModalClose();
  };

  const handleDeleteUser = (user) => {
    setSelectedUser(user);
    setShowAlertConfirm(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleSelectUser = (userId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user) =>
        user.id === userId ? { ...user, selected: !user.selected } : user
      );

      // Update selectAll state based on whether all users are selected
      const allSelected = updatedUsers.every((user) => user.selected);
      const noneSelected = updatedUsers.every((user) => !user.selected);
      setSelectAll(allSelected);

      return updatedUsers;
    });
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setUsers((prevUsers) =>
      prevUsers.map((user) => ({ ...user, selected: newSelectAll }))
    );
  };

  const getSelectedUsers = () => {
    return users.filter((user) => user.selected);
  };

  const handleSendEmail = () => {
    const selectedUsers = getSelectedUsers();
    if (selectedUsers.length > 0) {
      setIsSendEmailModalOpen(true);
    } else {
      alert("Please select at least one user to send an email.");
    }
  };

  const handleRemoveUserFromEmail = (userToRemove) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userToRemove.id ? { ...user, selected: false } : user
      )
    );

    // Update selectAll state
    const updatedUsers = users.map((user) =>
      user.id === userToRemove.id ? { ...user, selected: false } : user
    );
    const allSelected = updatedUsers.every((user) => user.selected);
    setSelectAll(allSelected);
  };

  const [sortedUsers, setSortedUsers] = useState(sampleData);
  const itemsPerPage = searchQuery ? sortedUsers.length : 8;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState(
    sampleData.slice(0, itemsPerPage)
  );

  useEffect(() => {
    setCurrentItems(
      sortedUsers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    );
  }, [sortedUsers, currentPage, itemsPerPage]);

  const toggleSort = (columnName) => {
    let sortedData = [];
    if (filterColumn === columnName) {
      sortedData = users.slice().reverse();
    } else {
      sortedData = users.slice().sort((a, b) => {
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
    setSortedUsers(sortedData);
    setIsSorted(true);
    setCurrentPage(1);
  };

  const fetchDataForNewPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="activity-page">
      <div className="activity-table-container">
        <h1>Users</h1>

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
            <div
              className="header-b"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "1rem",
                width: "100%",
              }}
            >
              <Button
                label="Send emails"
                className={"button-t button-t button-import "}
                Icon={emailIcon}
                iconPosition={"left"}
                width={"33%"}
                height={"3rem"}
                fontSize={"1.125rem"}
                onClick={handleSendEmail}
              />
              <Button
                label="Create New"
                className={"btn-add-table"}
                Icon={addTableIcon}
                iconPosition={"left"}
                width={"33%"}
                height={"3rem"}
                fontSize={"1.125rem"}
                onClick={() => setIsCreateModalOpen(true)}
              />
            </div>
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

        <div className="users-count-info">
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
          <span>selected {getSelectedUsers().length} accounts</span>
        </div>

        <div className="scrolled-table">
          <table className="activity-table" style={{ width: "100%" }}>
            <thead>
              <tr className="activity-table-header">
                <th>#</th>
                <th onClick={() => toggleSort("firstNameArabic")}>
                  First Name (arabic)
                </th>
                <th onClick={() => toggleSort("lastNameArabic")}>
                  Last Name (arabic)
                </th>
                <th onClick={() => toggleSort("fullNameEnglish")}>
                  Full Name (english)
                </th>
                <th onClick={() => toggleSort("email")}>Email</th>
                <th onClick={() => toggleSort("type")}>Type</th>
                <th>Privileges</th>
                <th>Education Level</th>
                <th>Birth Date</th>
                <th>Email Verified</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((user) => (
                <tr key={user.id} className="activity-table-row">
                  <td>
                    <input
                      type="checkbox"
                      checked={user.selected}
                      onChange={() => handleSelectUser(user.id)}
                    />
                  </td>
                  <td>{user.firstNameArabic}</td>
                  <td>{user.lastNameArabic}</td>
                  <td>{user.fullNameEnglish}</td>
                  <td>{user.email}</td>
                  <td>{user.type}</td>
                  <td>
                    <span
                      className={`privilege-badge ${user.privileges.toLowerCase()}`}
                    >
                      {user.privileges}
                    </span>
                  </td>
                  <td>{user.educationLevel}</td>
                  <td>{user.birthDate}</td>
                  <td>
                    <span
                      className={`verification-status ${
                        user.emailVerified ? "verified" : "unverified"
                      }`}
                    >
                      {user.emailVerified ? "✓" : "X"}
                    </span>
                  </td>
                  <td className="actions-table-btn">
                    <Button
                      className={"action-table"}
                      onClick={() => handleEditUser(user)}
                      Icon={eyeIcon}
                      iconPosition={"left"}
                    />
                    <Button
                      className={"action-table"}
                      onClick={() => handleDeleteUser(user)}
                      Icon={deleteIcon}
                      iconPosition={"left"}
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
              totalItems={users.length}
            />
          )}
        </div>

        <CreateUser
          isOpen={isCreateModalOpen}
          onClose={handleModalClose}
          onSave={handleSaveCreatedUser}
        />
        <EditUser
          isOpen={isEditModalOpen}
          onClose={handleModalClose}
          userData={selectedUser}
          onSave={handleSaveUpdatedUser}
        />
        <SendEmail
          isOpen={isSendEmailModalOpen}
          onClose={handleModalClose}
          selectedUsers={getSelectedUsers()}
          onRemoveUser={handleRemoveUserFromEmail}
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
            buttomText={"Hey, This user has been deleted!!"}
            buttomTextMiddle={true}
            closeButton
            onClose={handleModalClose}
          />
        )}
      </div>
    </div>
  );
};

export default UsersTable;
