import React, { useState, useRef, useEffect } from 'react';
// import './DateTimePicker.css';
import calendarIcon from '../../images/calendar-icon.svg';
import clockIcon from '../../images/clock-icon.svg';
import arrowRight from '../../images/right-arrow-icon-Date.svg';
import arrowLeft from '../../images/left-arrow-icon-Date.svg';

const DateTimePicker = ({ label, required = false, onChange, name, disabled = false, value, customClass }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDateTime, setSelectedDateTime] = useState(parseDateTime(value) || null);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setSelectedDateTime(parseDateTime(value) || null);
    }, [value]);

    function parseDateTime(dateTime) {
        if (!dateTime) {
            return null;
        }

        return typeof dateTime === 'string' ? new Date(dateTime) : dateTime;
    }

    const formatDate = (date) => {
        if (!(date instanceof Date) || isNaN(date)) {
            return 'Year / Month / Day';
        }

        return `${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate()}`;
    };

    const formatTime = (time) => {
        if (!(time instanceof Date) || isNaN(time)) {
            return '00:00';
        }

        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const handleDateClick = (day) => {
        const newDate = new Date(selectedDateTime);
        newDate.setDate(day);
        setSelectedDateTime(newDate);

        // Call the onChange prop with the selected date
        onChange && onChange({ target: { name, value: newDate } });
    };

    const handleTimeChange = (newTime) => {
        setSelectedDateTime(newTime);

        // Call the onChange prop with the selected time
        onChange && onChange({ target: { name, value: newTime } });
    };

    const handlePrevMonth = () => {
        const newDate = new Date(selectedDateTime);
        newDate.setMonth(newDate.getMonth() - 1);
        setSelectedDateTime(newDate);
    };

    const handleNextMonth = () => {
        const newDate = new Date(selectedDateTime);
        newDate.setMonth(newDate.getMonth() + 1);
        setSelectedDateTime(newDate);
    };

    return (
        <div className={`date-time-picker-container ${customClass}`} ref={dropdownRef}>
            <label>{label} {required && <span className="required-mark">*</span>}</label>
            <div className={`date-time-display ${disabled ? 'disabled-data' : ''}`} onClick={() => !disabled && setIsOpen(!isOpen)}>
                <div className="date-display">{formatDate(selectedDateTime)}</div>
                <div className="time-display">{formatTime(selectedDateTime)}</div>
                <img src={calendarIcon} alt="Calendar" className="calendar-icon" />
                <img src={clockIcon} alt="Clock" className="clock-icon" />
            </div>
            {!disabled && isOpen && (
                <div className="calendar">
                    <div className="month-navigation">
                        <button onClick={handlePrevMonth}><img src={arrowLeft} alt="" /></button>
                        <span>{`${selectedDateTime.toLocaleString('default', { month: 'long' })} ${selectedDateTime.getFullYear()}`}</span>
                        <button onClick={handleNextMonth}><img src={arrowRight} alt="" /></button>
                    </div>
                    <div className="day-names">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => (
                            <div key={dayName} className="day-name">{dayName}</div>
                        ))}
                    </div>
                    <div className="date-grid">
                        {Array.from({ length: new Date(selectedDateTime.getFullYear(), selectedDateTime.getMonth() + 1, 0).getDate() }, (_, i) => i + 1).map((day) => (
                            <div
                                key={day}
                                className={`date-cell ${selectedDateTime && selectedDateTime.getDate() === day ? 'active' : ''}`}
                                onClick={() => handleDateClick(day)}>
                                {day}
                            </div>
                        ))}
                    </div>
                    <TimeDropdown selectedTime={selectedDateTime} onTimeChange={handleTimeChange} />
                </div>
            )}
        </div>
    );
};

const TimeDropdown = ({ selectedTime, onTimeChange }) => {
    const [hours, setHours] = useState(selectedTime.getHours());
    const [minutes, setMinutes] = useState(selectedTime.getMinutes());

    useEffect(() => {
        const newTime = new Date(selectedTime);
        newTime.setHours(hours);
        newTime.setMinutes(minutes);
        onTimeChange(newTime);
    }, [hours, minutes, selectedTime, onTimeChange]);

    const incrementHours = () => {
        setHours((prevHours) => (prevHours + 1) % 24);
    };

    const decrementHours = () => {
        setHours((prevHours) => (prevHours - 1 + 24) % 24);
    };

    const incrementMinutes = () => {
        setMinutes((prevMinutes) => (prevMinutes + 1) % 60);
    };

    const decrementMinutes = () => {
        setMinutes((prevMinutes) => (prevMinutes - 1 + 60) % 60);
    };

    return (
        <div className="time-dropdown-content">
            <div className="time-unit">
                <button onClick={incrementHours}>+</button>
                <span>{hours.toString().padStart(2, '0')}</span>
                <button onClick={decrementHours}>-</button>
            </div>
            <span>:</span>
            <div className="time-unit">
                <button onClick={incrementMinutes}>+</button>
                <span>{minutes.toString().padStart(2, '0')}</span>
                <button onClick={decrementMinutes}>-</button>
            </div>
        </div>
    );
};

export default DateTimePicker;
