import React, { useState } from "react";
import Button from "src/elements/Buttons/Button";
import Dropdown from "src/elements/Dropdown/Dropdown";
import InputField from "src/elements/DynamicInput/InputField";
import Modal from "src/pages/Modal";

import lineUnder from "../../../../images/under-title-opration.svg";

const EditCourses = ({ isOpen, onClose, projectData, onSave }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} width={"auto"}>
            <h2 className="header-text-edit-project">Update Course</h2>
            <img src={lineUnder} alt="" />
            <form onSubmit={handleSubmit} className="edit-project-form">
                <InputField
                    label="Name (arabic)"
                    placeholder={"Enter the Name (arabic)"}
                    required={true}

                    type="text"
                    customClass='name-edit-project '


                />
                <InputField
                    label="Name (english)"
                    placeholder={"Enter the Name (english)"}
                    required={true}

                    type="text"
                    customClass='name-edit-project '
                />



                <InputField
                    label="Abbreviation"
                    placeholder={"Enter the Abbreviation"}
                    required={true}

                    type="text"
                />

                <Dropdown
                    label="Type"
                    placeHolder={"Select a Type"}
                    options={["Type 1", "Type 2"]}
                    required={true}
                />
                {/* Duration (hours) */}
                <InputField
                    label="Duration (hours)"
                    placeholder={"Enter the Duration in hours"}
                    required={true}
                    type="number"
                // customClass='name-edit-project'
                />

                <Button
                    type="submit"
                    label="Update Course"
                    className={"button-edit-project"}
                    height={"3rem"}
                />
            </form>
        </Modal>
    );
};

export default EditCourses;
