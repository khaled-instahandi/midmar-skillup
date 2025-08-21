import React, { useEffect, useRef, useState } from "react";
import "./UserProfile.css";
import userIcon from "../../images/user-image.svg";
import profileIcon from "../../images/profile-icon2.svg";
import panelIcon from "../../images/panel-icon.svg";
import logoutIcon from "../../images/logout-icon.svg";
import arrow from "../../images/arrow-down.svg";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const UserProfileRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (
      UserProfileRef.current &&
      !UserProfileRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const role = 'apprentice';
  const role = localStorage.getItem("role");
  console.log("from Dashboard :", role);
  const name =
    role === "apprentice" || role === "coach" ? "عقيل بكور" : "Akeel Bakkour";
  const roleName =
    role === "apprentice" || role === "coach" ? "متدرب" : "Project officer";
  const signas =
    role === "apprentice" || role === "coach"
      ? "مسجل الدخول كـ"
      : "Signed in as";
  const profile =
    role === "apprentice" || role === "coach" ? "الملف الشخصي" : "Profile";
  const panel =
    role === "apprentice" || role === "coach" ? "لوحتي" : "My panel";
  const logout =
    role === "apprentice" || role === "coach" ? "تسجبل الخروج" : "Logout";
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="user-profile-container" ref={UserProfileRef}>
      <div className="user-profile-header" onClick={toggleDropdown}>
        <img src={userIcon} alt="User" className="user-profile-picture" />
        <div className="user-profile-info">
          <span className="user-profile-name">{name}</span>
          <span className="user-profile-role">{roleName}</span>
        </div>
        <img
          className="arrow-icon"
          src={arrow}
          alt="Arrow icon"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>

      {isOpen && (
        <div className="user-profile-dropdown">
          <div className="user-profile-account-info">
            <span>{signas}</span>
            <strong>{name}</strong>
            <p>{`end.khaledalahmad@gmail.com`}</p>
          </div>
          <div className="user-profile-menu">
            <a className="menu-item" href="#">
              <img src={profileIcon} alt="Profile" />
              <span>{profile}</span>
            </a>
            <a className="menu-item" href="#">
              <img src={panelIcon} alt="My panel" />
              <span>{panel}</span>
            </a>
            <a className="menu-item logout" href="#">
              <img src={logoutIcon} alt="Logout" />
              <span
                onClick={() => {
                  navigate("/login");
                }}
              >
                {logout}
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
