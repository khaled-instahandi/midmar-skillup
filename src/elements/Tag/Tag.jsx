import React, { useState } from "react";
import "./Tag.css";

const Tag = ({
  infoContent,
  infoAdditional,
  widthContent,
  heightContent,
  widthAdditional,
  heightAdditional,
  backgroundColorContent,
  backGroundColorAdditional,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const styleAdditional = {
    width: widthAdditional,
    height: heightAdditional,
    backgroundColor: backGroundColorAdditional,
  };

  const styleContent = {
    width: widthContent,
    height: heightContent,
    backgroundColor: backgroundColorContent,
  };

  return (
    <div
      className="info-card-tag"
      style={styleContent}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="info-content-tag">
        <span className="info-main-tag">{infoContent}</span>
      </div>
      {isHovered && (
        <span className="info-additional-tag" style={styleAdditional}>
          {infoAdditional}
        </span>
      )}
    </div>
  );
};

export default Tag;
