import React from 'react';
import './Button.css';

const Button = ({label, onClick, className, Icon, iconPosition, width, height, fontSize,typeBtn ,countPending}) => {
  const iconClass = iconPosition === 'left' ? 'icon-left' : 'icon-right';
  const buttonStyle = {
    width: width,
    height: height,
    fontSize: fontSize
  };

  return (
    <button className={`button-t ${className}`} onClick={onClick} style={buttonStyle } type={typeBtn}>
      {iconPosition === 'left' && Icon && <img src={Icon} className={`icon icon-left `}  alt="icon" />}
      {label}
      {iconPosition === 'right' && Icon && <img src={Icon} className="icon icon-right" alt="icon" />}
      {countPending && <>
      <div className="icon-notfication">
        {countPending}
      </div>
      </>}
    </button>
  );
};

export default Button;
