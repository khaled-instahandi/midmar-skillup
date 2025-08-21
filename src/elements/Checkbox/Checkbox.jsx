import React, { useState } from 'react';
import './Checkbox.css';
import checkmarkIcon from '../../images/checkmark-icon.svg';
import TermsAndConditions from '../../pages/ar/TermsAndConditions/TermsAndConditions';

const Checkbox = ({ name, label, checked, onChange, styleCheckBox, ClassName, icon, fontSize, labelTow }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState(null);
  const handleModalClose = () => {
    setIsAddModalOpen(false);


  };
  const handleSaveAddedProject = (editedData) => {
    console.log('Edited project data:', editedData);
    handleModalClose();
  };
  return (
    <div className="checkbox-container-z" style={{ fontSize: fontSize, userSelect: 'unset' }} >
      <div className="lable-tow-check-box" onClick={() => setIsAddModalOpen(true)}>

        {labelTow}
      </div>
      <div className="lable-one-check-box"
      >
        {label}
      </div>
      <input className={ClassName} style={styleCheckBox} type="checkbox" name={name} checked={checked} onChange={() => { }} />
      <span className={`checkmark ${checked ? 'checked' : ''}`} onClick={() => onChange(!checked)} >
        {checked && <img src={checkmarkIcon} alt="Checked" style={{ userSelect: 'unset' }} />}
      </span>
      {icon && <><img src={icon} alt="" width={'30px'} height={'30px'} style={{ userSelect: 'unset' }} /></>}
      <TermsAndConditions
        handleBtn={
          () => {
            setIsAddModalOpen(false)
          }
        }
        height={'auto'}
        isOpen={isAddModalOpen}
        onClose={handleModalClose}
        projectData={selectedProjectData} />
    </div>
  );
};

export default Checkbox;
