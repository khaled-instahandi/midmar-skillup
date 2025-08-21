import React from 'react';
import './ProfileCard.css'; // Make sure to create a corresponding CSS file
import editIcon from '../../images/edit-image.svg'; // Replace with your edit icon image path

// ProfileCard component
const ProfileCard = ({ name, title, profileImage, onEdit }) => {
  return (
    <div className="profile-card">
      <img src={profileImage} alt={name} className="profile-image" />
      <button className="edit-button" onClick={onEdit}>
        <img src={editIcon} alt="Edit" />
      </button>
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-title">{title}</p>
      </div>

    </div>
  );
};

export default ProfileCard;
