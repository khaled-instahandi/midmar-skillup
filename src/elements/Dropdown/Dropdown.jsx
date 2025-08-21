import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';
import dangerIcon from '../../images/danger-icon.svg';

const Dropdown = ({ name, width, label, options, placeHolder, required = false, onChange, disable = false, value, customClass, textError }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || null);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (option) => {
    if (!disable) {
      setSelectedOption(option);
      setIsOpen(false);
      // Make sure to pass the 'name' prop to the onChange handler
      onChange && onChange({ target: { name, value: option } });
    }
  };

  useEffect(() => {
    setSelectedOption(value || null);
  }, [value]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleOpen = () => {
    if (!disable) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`dropdown-container ${customClass}`} ref={dropdownRef} style={{ width: width }} aria-disabled={disable}>
      {label && <label>{label}{required && <span className="required-mark">*</span>}</label>}
      <div style={{ userSelect: 'none' }} className={`dropdown ${isOpen ? 'active' : ''} ${disable ? 'disabled-data' : ''}`} onClick={toggleOpen}>
        <div className="dropdown-selected">
          {selectedOption || placeHolder}
        </div>
        <div className={`dropdown-arrow ${isOpen ? 'up' : 'down'}`}>▼</div>
      </div>
      {isOpen && !disable && options && options.length > 0 && (
        <div className="dropdown-options" aria-disabled={disable}>
          {options.map((option, index) => (
            <div
              key={index}
              className={`dropdown-option ${option === selectedOption ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      {textError && (
        <div className="text-error">
          <img src={dangerIcon} alt="" />
          <span>{textError}</span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
