import React, { useState, useRef, useEffect } from 'react';
import './TimePicker.css';
import clockIcon from '../../images/clock-icon.svg';

const TimePicker = ({ label, required = false, onChange, name, disabled = false, value }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState(parseTime(value) || new Date()); // Initialize with the current time
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
        setSelectedTime(parseTime(value) || new Date()); // Update the selectedTime when the value prop changes
    }, [value]);

    function parseTime(time) {
        if (!time) {
            return null;
        }

        // If the time is a string, parse it to a Date object
        return typeof time === 'string' ? new Date(`1970-01-01T${time}`) : time;
    }

    const formatTime = (time) => {
        if (!(time instanceof Date) || isNaN(time)) {
            return '00:00';
        }

        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const handleTimeChange = (newTime) => {
        setSelectedTime(newTime);

        // Call the onChange prop with the selected time
        onChange && onChange({ target: { name, value: newTime } });
    };

    return (
        <div className={`time-picker-container`} ref={dropdownRef}>
            <label>{label} {required && <span className="required-mark">*</span>}</label>
            <div className={`time-display ${disabled ? 'disabled-data' : ''}`} onClick={() => !disabled && setIsOpen(!isOpen)}>
                {formatTime(selectedTime)}
                <img src={clockIcon} alt="Clock" className="clock-icon" />
            </div>
            {!disabled && isOpen && (
                <div className="time-dropdown">
                    <TimeDropdown selectedTime={selectedTime} onTimeChange={handleTimeChange} />
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

export default TimePicker;
