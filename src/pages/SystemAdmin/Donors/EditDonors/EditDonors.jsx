import React, { useState } from "react";
import Button from "src/elements/Buttons/Button";
import Dropdown from "src/elements/Dropdown/Dropdown";
import InputField from "src/elements/DynamicInput/InputField";
import Modal from "src/pages/Modal";

import lineUnder from "../../../../images/under-title-opration.svg";

const EditDonors = ({ isOpen, onClose, projectData, onSave }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} width={"auto"}>
            <h2 className="header-text-edit-project">Update Donor</h2>
            <img src={lineUnder} alt="" />
            <form onSubmit={handleSubmit} className="edit-project-form">
                <InputField
                    label="Full Name"
                    placeholder={"Enter the Full Name"}
                    required={true}

                    type="text"
                    customClass='name-edit-project '

                />
                <InputField
                    label="Abbreviation"
                    placeholder={"Enter the Abbreviation"}
                    required={true}
                    customClass='name-edit-project'

                    type="text"
                />

                <Dropdown
                    label="Country"
                    customClass='name-edit-project'
                    placeHolder={"Select a Country"}
                    options={["Country 1", "Country 2"]}
                    required={true}
                />

                <Button
                    type="submit"
                    label="Update Donor"
                    className={"button-edit-project"}
                    height={"3rem"}
                />
            </form>
        </Modal>
    );
};

export default EditDonors;
