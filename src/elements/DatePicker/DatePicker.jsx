import React, { useEffect, useRef, useState } from "react";
import "./DatePicker.css";
import calendarIcon from "../../images/calendar-icon.svg";
import arrowRight from "../../images/right-arrow-icon-Date.svg";
import arrowLeft from "../../images/left-arrow-icon-Date.svg";

const DatePicker = ({
  lable,
  required = false,
  onChange,
  name,
  disabled = false,
  value,
  customClass,
  role,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(parseDate(value) || null); // Initialize with the provided value
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedDate(parseDate(value) || null); // Update the selectedDate when the value prop changes
  }, [value]);

  function parseDate(date) {
    if (!date) {
      return null;
    }

    // If the date is a string, parse it to a Date object
    return typeof date === "string" ? new Date(date) : date;
  }

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const parentElement = document.querySelector(".date-display");
  const parentDirection = parentElement
    ? parentElement.getAttribute("dir")
    : null;

  const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
      return parentDirection === "rtl"
        ? "سنة / شهر / يوم"
        : "Year / Month / Day";
    }

    if (parentDirection === "rtl") {
      // Display date format for right-to-left direction
      return `${date.getDate()} / ${
        date.getMonth() + 1
      } / ${date.getFullYear()}`;
    }

    // Default display for left-to-right direction
    return `${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate()}`;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getMonthName = (monthIndex, year) => {
    const date = new Date(year, monthIndex);
    if (role === "ar") {
      // Return month name in Arabic if the role is 'apprentice'
      return date.toLocaleString("ar", { month: "long" });
    } else {
      // Return month name in English for other roles
      return date.toLocaleString("en", { month: "long" });
    }
  };
  const handleDateClick = (day) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
    setIsOpen(false);

    // Call the onChange prop with the selected date
    onChange && onChange({ target: { name, value: newDate } });
  };

  const arabicDayNames = [
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  return (
    <div className={`date-picker-container ${customClass}`} ref={dropdownRef}>
      <label dir={role === "ar" ? "rtl" : "ltr"}>
        {lable} {required && <span className="required-mark">*</span>}
      </label>
      <div
        className={`date-display ${disabled ? "disabled-data" : ""}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        dir={role === "ar" ? "rtl" : "ltr"}
      >
        {formatDate(selectedDate)}
        <img src={calendarIcon} alt="Calendar" className="calendar-icon" />
      </div>
      {!disabled && isOpen && (
        <div className="calendar">
          <div className="month-navigation">
            <button onClick={handlePrevMonth}>
              <img src={arrowLeft} alt="" />
            </button>
            <span>{`${getMonthName(
              currentMonth,
              currentYear
            )} ${currentYear}`}</span>
            <button onClick={handleNextMonth}>
              <img src={arrowRight} alt="" />
            </button>
          </div>
          <div className="day-names">
            {role === "ar"
              ? arabicDayNames.map((dayName, index) => (
                  <div key={index} className="day-name">
                    {dayName}
                  </div>
                ))
              : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (dayName, index) => (
                    <div key={index} className="day-name">
                      {dayName}
                    </div>
                  )
                )}
          </div>
          <div className="date-grid">
            {days.map((day) => (
              <div
                key={day}
                className={`date-cell ${
                  selectedDate &&
                  selectedDate.getDate() === day &&
                  selectedDate.getMonth() === currentMonth
                    ? "active"
                    : ""
                }`}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
