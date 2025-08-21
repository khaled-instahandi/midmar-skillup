import React, { useEffect, useRef, useState } from "react";
import "./NotificationsDropdown.css";
import bellIcon from "../../images/bell-icon.svg";
import listNotIcon from "../../images/notification-list.svg";
import NotificationLink from "../../elements/NotificationLink/NotificationLink";

import bellIconActive from "../../images/bell-icon-active.svg";

const NotificationsDropdown = () => {
  const role = localStorage.getItem("role");

  const translatedNotifications = [
    {
      id: 1,
      title:
        role === "apprentice" || role === "coach"
          ? "هذا عنوان"
          : "This is title",
      description:
        role === "apprentice" || role === "coach"
          ? "تمت إضافة نشاط جديد..."
          : "A new activity has been added...",
      time: "9:30 AM",
    },
    {
      id: 2,
      title:
        role === "apprentice" || role === "coach"
          ? "هذا عنوان"
          : "This is title",
      description:
        role === "apprentice" || role === "coach"
          ? "تمت إضافة نشاط جديد..."
          : "A new activity has been added...",
      time: "9:30 AM",
    },
    {
      id: 3,
      title:
        role === "apprentice" || role === "coach"
          ? "هذا عنوان"
          : "This is title",
      description:
        role === "apprentice" || role === "coach"
          ? "تمت إضافة نشاط جديد..."
          : "A new activity has been added...",
      time: "9:40 AM",
    },
  ];

  const [notifications, setNotifications] = useState(translatedNotifications);

  // const [notifications, setNotifications] = useState([
  //   {
  //     id: 1,
  //     title: "This is title",
  //     description: "A new activity has been added...",
  //     time: "9:30 AM",
  //   },
  //   {
  //     id: 2,
  //     title: "This is title",
  //     description: "A new activity has been added...",
  //     time: "9:30 AM",
  //   },
  //   {
  //     id: 2,
  //     title: "This is title",
  //     description: "A new activity has been added...",
  //     time: "9:40 AM",
  //   },
  // ]);
  const [isNewNotification, setIsNewNotification] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);

  const notificationRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const clearNotifications = () => {
    setNotifications([]);
    setIsNewNotification(false);
  };
  // const role = localStorage.getItem("role");
  console.log("from Dashboard :", role);
  const notification =
    role === "apprentice" || role === "coach" ? "الإشعارات" : "Notification";
  const clear =
    role === "apprentice" || role === "coach" ? "مسح الكل" : "Clear all";
  const nota =
    role === "apprentice" || role === "coach" ? (
      <NotificationLink text="اختيار الكل كـ مقروء" right href={"#"} />
    ) : (
      <NotificationLink text="Check all notifications" href={"#"} />
    );
  return (
    <div className="notification-wrapper" ref={notificationRef}>
      <div className="notification-icon" onClick={toggleNotifications}>
        {isNewNotification && (
          <img
            src={bellIconActive}
            alt="New notifications"
            className="notification-dot"
          />
        )}
        <img src={bellIcon} alt="Notifications" />
      </div>

      {showNotifications && (
        <div className="notification-dropdown">
          <div className="notification-header">
            <span>{notification}</span>
            <button onClick={clearNotifications}>{clear}</button>
          </div>
          <div className="notification-list">
            {notifications.map((notification) => (
              <div key={notification.id} className="notification-item">
                <img src={listNotIcon} alt="Profile" className="profile-icon" />
                <div className="notification-content">
                  <h4>{notification.title}</h4>
                  <p>{notification.description}</p>
                  <span>{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="notification-footer">
            {/* <a href="/notifications">Check all notifications</a> */}
            {/* <NotificationLink
              text="Check all notifications"
              href={"notifications"}
            /> */}
            {nota}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsDropdown;
