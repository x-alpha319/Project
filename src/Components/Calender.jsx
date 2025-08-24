import React from "react";

const Calendar = () => {
  const month = 7; // August
  const year = 2025;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }
    for (let day = 1; day <= totalDays; day++) {
      const isToday =
        day === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();

      days.push(
        <div
          key={day}
          className={`h-10 flex items-center justify-center rounded ${
            isToday ? "bg-blue-500 text-white font-bold" : ""
          }`}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="w-full">
      <h3 className="text-center text-lg font-semibold mb-4">
        {monthNames[month]} {year}
      </h3>
      <div className="grid grid-cols-7 gap-1 text-center font-medium mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="py-1">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
