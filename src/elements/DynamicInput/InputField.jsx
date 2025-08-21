import React, { useState } from 'react';
import './InputField.css';
import eyeIcon from '../../images/eye.svg'; // Path to your eye icon
import dangerIcon from '../../images/danger-icon.svg'; // Path to your eye icon

const InputField = ({
  label,
  type = 'text',
  id,
  placeholder,
  required = false,
  customClass = '',
  onChange,
  iconName,
  name, Value,
  disable = false,
  isTextarea = false, // Add isTextarea prop with default value false
  numberRows, textError

}) => {
  const [value, setValue] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleFocus = (e) => {
    e.target.parentNode.classList.add('focused');
  };

  const handleBlur = (e) => {
    e.target.parentNode.classList.remove('focused');
    e.target.parentNode.classList[value ? 'add' : 'remove']('filled');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={`input-field ${type === 'password' ? 'password' : ''} ${customClass}`} style={{ position: 'relative' }}>
      {label && (
        <label htmlFor={id}>
          {label}
          {required && <span className="required-mark">*</span>}
        </label>
      )}
      {isTextarea ? ( // Check if it's a textarea
        <textarea
          rows={numberRows}
          id={id}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={Value ?? value}
          className={`${customClass} ${disable ? 'disabled-data' : ''}`}
          name={name}
          disabled={disable}
        />
      ) : (
        <input
          id={id}
          type={isPasswordVisible ? 'text' : type}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={Value ?? value}
          className={`${customClass} ${disable ? 'disabled-data' : ''}`}
          name={name}
          disabled={disable}
        />
      )}
      {type === 'password' && (
        <img
          src={isPasswordVisible ? eyeIcon : eyeIcon}
          alt="Toggle visibility"
          className="password-toggle"
          onClick={togglePasswordVisibility}
        />
      )
      }
      {textError && <>

        <div className="text-error">
          <img src={dangerIcon} alt="" />
          <span>{textError}</span>
        </div>
      </>}

    </div>
  );
};

export default InputField;
