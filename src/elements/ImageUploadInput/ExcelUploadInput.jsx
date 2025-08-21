import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ExcelIcon from '../../images/xlsx_icon.svg'; // Import Excel icon
import PdfIcon from '../../images/pdf-icon.svg'; // Import PDF icon
import exportIcon from '../../images/export-icon.svg';
import infoIcon from '../../images/info-circle.svg';
import './ExcelUploadInput.css';

const ExcelUploadInput = ({ width, height, text, label, required = false, className, margin, value, forEdit = false }) => {
  const [file, setFile] = useState(value || null);
  const [fileType, setFileType] = useState(null);

  useEffect(() => {
    if (value) {
      setFile(value);
      setFileType(getFileType(value));
    }
  }, [value]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileType(getFileType(selectedFile));
  };

  const getFileType = (file) => {
    if (file && file.name) {
      const extension = file.name.split('.').pop().toLowerCase();
      if (extension === 'xlsx') {
        return 'excel';
      } else if (extension === 'pdf') {
        return 'pdf';
      }
    }
    return null; // If fileType cannot be determined
  };

  const getFileIcon = () => {
    if (fileType === 'excel') {
      return ExcelIcon;
    } else if (fileType === 'pdf') {
      return PdfIcon;
    } else {
      return exportIcon; // Default icon if fileType cannot be determined
    }
  };

  return (
    <div className={`excel-upload-container ${className}`} style={{ width, height }}>
      <label className='top-lable-excel' >
        {label}
        {required && <span className="required-mark">*</span>}
      </label>
      {text && (
        <div className="text-notifaction-export">
          <img src={infoIcon} alt="" />
          <h6>{text}</h6>
        </div>
      )}

      <label className={`excel-upload-label`} style={{ marginTop: margin }}>
        <input
          type="file"
          accept=".xlsx, .pdf" // Allow both Excel and PDF files
          onChange={handleFileChange}
          className="excel-upload-input"
        />
        <div className="excel-upload-preview">
          {file ? (
            <div className="file-info-excel">
              <div className="icon-container-excel">
                <img src={getFileIcon()} alt="" />
              </div>
              <div className="text-excel">{file.name}</div>
              {forEdit && <>
                <div className="text-excel" ><p>Click to replace</p></div>

              </>}
            </div>
          ) : (
            <>
              <div className="icon-container-excel"><img src={exportIcon} alt="" /></div>
              <div className="text-excel">Drop files here to upload, or <p>click here to browse</p></div>
            </>
          )}
        </div>
      </label>
    </div>
  );
};

ExcelUploadInput.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string,
  margin: PropTypes.string,
  value: PropTypes.object,
};

export default ExcelUploadInput;