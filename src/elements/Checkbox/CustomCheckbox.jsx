import React, { useState } from 'react';
import './CustomCheckbox.css';

const CustomCheckbox = ({isChecked,hund,name,id}) => {



  return (
    <div className="checkbox-container-c">
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={hund}
        name={name}
        className="checkbox-input-c"
      />
      <label htmlFor={id} className={`checkbox-label-c ${isChecked ? 'checked' : ''}`}>
        <span className="outer-circle">
          <span className="inner-circle"></span>
        </span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
