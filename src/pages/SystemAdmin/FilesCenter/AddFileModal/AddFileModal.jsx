import React, { useState } from "react";
import Button from "src/elements/Buttons/Button";
import InputField from "src/elements/DynamicInput/InputField";
import Modal from "src/pages/Modal";
import lineUnder from "../../../../images/under-title-opration.svg";
import "./AddFileModal.css";

const AddFileModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    file: null,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFormData((prev) => ({ ...prev, file: droppedFile }));
    }
  };

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFormData((prev) => ({ ...prev, file: selectedFile }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.file) {
      return;
    }

    onSave({
      name: formData.name,
      description: formData.description,
      originalName: formData.file.name,
      size: `${Math.round(formData.file.size / 1024)} KB`,
      url: URL.createObjectURL(formData.file),
    });
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose} width={"auto"}>
      <h2 className="header-text-edit-project">Add File</h2>
      <img src={lineUnder} alt="" />

      <form onSubmit={handleSubmit} className="edit-project-form">
        <InputField
          label="Name"
          placeholder="Enter The Name"
          required={true}
          type="text"
          customClass="name-edit-project"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />

        <InputField
          label="Description"
          placeholder="Enter The Description"
          required={true}
          type="text"
          multiline={true}
          rows={4}
          customClass="name-edit-project"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />

        <div className="name-edit-project">
          <label className="file-upload-label">
            Attach a document <span className="required">*</span>
          </label>
          <div
            className="drop-zone"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="drop-zone-content">
              <div className="upload-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="92"
                  height="92"
                  viewBox="0 0 92 92"
                  fill="none"
                >
                  <path
                    d="M58.4978 85.2915H33.5045C14.6828 85.2915 6.63281 77.2415 6.63281 58.4199V57.9215C6.63281 40.9015 13.3411 32.6982 28.3678 31.2722C29.1263 31.2197 29.8759 31.4612 30.4611 31.9465C31.0464 32.4318 31.4224 33.1238 31.5111 33.8789C31.5476 34.2566 31.5089 34.6379 31.3974 35.0006C31.286 35.3634 31.1039 35.7006 30.8616 35.9927C30.6193 36.2848 30.3217 36.5262 29.9858 36.7029C29.65 36.8795 29.2825 36.9881 28.9045 37.0222C16.8678 38.1339 12.3828 43.8072 12.3828 57.9522V58.4505C12.3828 74.0522 17.9028 79.5722 33.5045 79.5722H58.4978C74.0995 79.5722 79.6195 74.0522 79.6195 58.4505V57.9522C79.6195 43.7305 75.0578 38.0572 62.7911 37.0222C62.4103 36.9971 62.0383 36.8963 61.6969 36.7256C61.3555 36.5548 61.0517 36.3177 60.8032 36.028C60.5546 35.7383 60.3665 35.4019 60.2497 35.0385C60.1329 34.6751 60.0898 34.2921 60.123 33.9118C60.1561 33.5316 60.2649 33.1618 60.4429 32.8241C60.6208 32.4865 60.8644 32.1878 61.1593 31.9455C61.4543 31.7032 61.7946 31.5222 62.1604 31.4132C62.5262 31.3042 62.91 31.2693 63.2895 31.3105C78.5462 32.6139 85.3695 40.8555 85.3695 57.9905V58.4889C85.3695 77.2415 77.3195 85.2915 58.4978 85.2915Z"
                    fill="#838383"
                  />
                  <path
                    d="M46 60.375C45.2391 60.37 44.5107 60.0654 43.9726 59.5274C43.4345 58.9893 43.13 58.2609 43.125 57.5V13.8766C43.13 13.1157 43.4345 12.3873 43.9726 11.8493C44.5107 11.3112 45.2391 11.0067 46 11.0016C46.7609 11.0067 47.4893 11.3112 48.0274 11.8493C48.5655 12.3873 48.87 13.1157 48.875 13.8766V57.5C48.87 58.2609 48.5655 58.9893 48.0274 59.5274C47.4893 60.0654 46.7609 60.37 46 60.375Z"
                    fill="#838383"
                  />
                  <path
                    d="M58.8461 25.3C58.4685 25.3013 58.0943 25.2275 57.7455 25.0827C57.3967 24.9379 57.0802 24.7251 56.8145 24.4566L46.0121 13.6466L35.2021 24.4566C34.6571 24.9645 33.9363 25.2409 33.1915 25.2278C32.4466 25.2147 31.736 24.9129 31.2093 24.3862C30.6825 23.8594 30.3808 23.1488 30.3676 22.404C30.3545 21.6592 30.631 20.9383 31.1388 20.3933L43.9728 7.55547C44.5138 7.0208 45.2438 6.72095 46.0045 6.72095C46.7651 6.72095 47.4951 7.0208 48.0361 7.55547L60.8778 20.3971C61.4125 20.9382 61.7123 21.6682 61.7123 22.4288C61.7123 23.1895 61.4125 23.9194 60.8778 24.4605C60.614 24.7312 60.2978 24.9453 59.9485 25.0896C59.5992 25.234 59.2241 25.3056 58.8461 25.3Z"
                    fill="#838383"
                  />
                </svg>
              </div>
              <p>Drop files here to upload, or</p>
              <button
                type="button"
                className="browse-button"
                onClick={() => document.getElementById("fileInput").click()}
              >
                click here to browse
              </button>
              <small>Max 50mb</small>
            </div>
            <input
              id="fileInput"
              type="file"
              onChange={handleFileInput}
              style={{ display: "none" }}
            />
          </div>
          {formData.file && (
            <div className="file-info">Selected file: {formData.file.name}</div>
          )}
        </div>

        {/* <Button
            type="button"
            label="Cancel"
            onClick={onClose}
            className="cancel-button"
          /> */}
        <Button type="submit" label="Add File" className="submit-button" />
      </form>
    </Modal>
  );
};

export default AddFileModal;
