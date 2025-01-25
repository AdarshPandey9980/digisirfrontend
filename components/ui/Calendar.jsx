import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default styles

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="card p-4">
      <h3 className="text-lg font-bold mb-4">Calendar</h3>
      <Calendar
        onChange={handleDateChange}
        value={date}
        className="react-calendar"
      />
      <div className="mt-4">
        <p className="text-sm text-gray-600">Selected Date: {date.toDateString()}</p>
      </div>
    </div>
  );
};

export default CalendarComponent;
