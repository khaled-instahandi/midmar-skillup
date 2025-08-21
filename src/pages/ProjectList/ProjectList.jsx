import React, { useState } from "react";
import "./ProjectList.css";
import Button from "../../elements/Buttons/Button";
import verify from "../../images/verify2.svg";
import infoCircle from "../../images/info-circle2.svg";
import editIcon from "../../images/pen-edit-icon.svg";
import deleteIcon from "../../images/delete-icon.svg";
import addIcon from "../../images/add-square.svg";
import TagRight from "../../images/tag-right.svg";
import EditProjectModal from "./EditProjectModal";
import AlertMessage from "src/elements/AlertMessage/AlertMessage";
import AddProjectModal from "./AddProjectModal";

const ProjectList = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [selectedProjectData, setSelectedProjectData] = useState(null);
  const [showAlertDelete, setShowAlertDelete] = useState(false);
  const [showAlertConfirm, setShowAlertConfirm] = useState(false);

  const handleEditClick = (projectId) => {
    console.log(`Edit project with ID: ${projectId}`);

    setIsEditModalOpen(true);
  };

  const handleModalClose = () => {
    setIsEditModalOpen(false);
    setShowAlertDelete(false);
    setShowAlertConfirm(false);
    setIsAddModalOpen(false);
  };

  const handleSaveEditedProject = (editedData) => {
    console.log("Edited project data:", editedData);
    // handleModalClose();
  };
  const handleSaveAddedProject = (editedData) => {
    console.log("Edited project data:", editedData);
    // handleModalClose();
  };
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Community Cohesion as a Driver for Sustainable Development",
      activities: 12,
      budget: "$52,365",
    },
    {
      id: 2,
      name: "Psychological Counselling Training Program",
      activities: 12,
      budget: "$52,365",
    },
  ]);

  const handleEdit = (projectId) => {
    console.log(`Edit project with ID: ${projectId}`);
  };

  const handleDelete = (projectId) => {
    console.log(`Delete project with ID: ${projectId}`);
  };

  const Project = ({ name, activities, budget, onEdit, onDelete }) => (
    <div className="projects">
      <div className="projects-details">
        <span className="projects-name-span">project name:</span>
        <h2>
          <img src={TagRight} alt="" /> {name}
        </h2>
        <div className="activiteAndBuget">
          <div className="bg-color-active">
            <p>
              Activities: <span>{activities}</span>
            </p>
          </div>
          <div className="bg-color-active">
            <p>
              Budget: <span>{budget}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="projects-actions">
        <button onClick={onEdit}>
          <img src={editIcon} alt="Edit" />
        </button>
        <button onClick={onDelete}>
          <img src={deleteIcon} alt="Delete" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="projects-list">
      <div className="header-projects">
        <h1>All Projects</h1>
        <Button
          label="Add projects"
          onClick={() => setIsAddModalOpen(true)}
          className="button-import"
          Icon={addIcon}
          iconPosition={"left"}
        />
      </div>

      {projects.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          activities={project.activities}
          budget={project.budget}
          onEdit={() => handleEditClick(project.id)}
          onDelete={() => setShowAlertConfirm(true)}
        />
      ))}
      <EditProjectModal
        isOpen={isEditModalOpen}
        onClose={handleModalClose}
        projectData={selectedProjectData}
        onSave={handleSaveEditedProject}
      />
      <AddProjectModal
        isOpen={isAddModalOpen}
        onClose={handleModalClose}
        projectData={selectedProjectData}
        onSave={handleSaveAddedProject}
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
          closeButton
          lableButtonOne={"Ok"}
          buttomTowActive={false}
          headerText={"Deleted !!"}
          logo={verify}
          buttonClassFirst={"button-delete-t"}
          buttomText={"Hey, This project has been deleted!!"}
          buttomTextMiddle={true}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default ProjectList;
