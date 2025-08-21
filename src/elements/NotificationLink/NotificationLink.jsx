import React from "react";
import "./NotificationLink.css";
import rightArrowIcon from "../../images/right-arrow-icon.svg";
import leftArrowIcon from "../../images/left-arrow-icon-Date.svg";

const NotificationLink = ({ text, href, right }) => {
  return (
    <a className="notification-link" href={href}>
      <span>{text}</span>
      {right ? (
        <img src={leftArrowIcon} alt="Go" className="arrow-icon" />
      ) : (
        <img src={rightArrowIcon} alt="Go" className="arrow-icon" />
      )}
    </a>
  );
};

export default NotificationLink;
