// ** React Imports
import React, { useState, useEffect, useRef } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import arLocale from "@fullcalendar/core/locales/ar"; // Import Arabic locale
import timeGridPlugin from "@fullcalendar/timegrid"; // Import the timeGrid plugin
import "./ApprenticeCalendar.css";

const ApprenticeCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const fullCalendarRef = useRef(null); // Ref to hold the FullCalendar instance

  // Static data example
  const staticEvents = [
    {
      title: "تدريب أوفيس",
      start: "2024-06-06T10:00:00", // Event start date and time
      end: "2024-06-07T11:00:00", // Event end date and time
    },
    {
      title: " 2 تدريب أوفيس",
      start: "2024-06-05T11:00:00", // Event start date and time
      end: "2024-06-06T08:00:00", // Event end date and time
    },
    // Add more static events as needed
  ];

  const handleDateSelect = (date) => {
    // Extracting the date part only
    const selectedDateOnly = date.format("YYYY-MM-DD");
    console.log(selectedDateOnly);
    setSelectedDate(selectedDateOnly);
  };

  useEffect(() => {
    // Update FullCalendar's initialDate when selectedDate changes
    if (selectedDate && fullCalendarRef.current) {
      // FullCalendar accepts a string in ISO 8601 format for initialDate
      const isoDate = selectedDate + "T00:00:00"; // Set time to midnight
      // Update initialDate prop of FullCalendar using the ref
      fullCalendarRef.current.getApi().gotoDate(isoDate);
    }
  }, [selectedDate]);

  return (
    <div
      className="activity-page"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <div className="right-side-bar-calender" style={{ width: "30rem" }}>
        {/* Display the MUI DateCalendar with Arabic localization */}
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          locale="ar"
          localeText={arLocale}
        >
          <DateCalendar onChange={handleDateSelect} />
        </LocalizationProvider>
      </div>
      <div className="left-big- calender" style={{ width: "100%" }}>
        {/* Display FullCalendar with Arabic locale and static events */}
        <FullCalendar
          ref={fullCalendarRef} // Assign the ref to the FullCalendar component
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek" // Display the timeGridWeek view
          initialDate={selectedDate} // Set initial date to the selected date
          events={staticEvents}
          locale="ar" // Set locale to Arabic
          locales={[arLocale]} // Provide the Arabic locale
          slotMinTime="08:00:00" // Set the minimum time displayed (optional)
          slotMaxTime="16:00:00" // Set the maximum time displayed (optional)
          allDaySlot={false} // Hide the all-day slot (optional)
          slotDuration="01:00:00" // Set slot duration to 1 hour
          headerToolbar="" // Remove the header
          displayEventTime={true} // Display event times
          footerToolbar=""
          height={"32REM"}
        />
      </div>
    </div>
  );
};

export default ApprenticeCalendar;
