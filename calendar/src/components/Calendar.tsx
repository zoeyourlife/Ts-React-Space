import React, { useState } from "react";
import { Weekday, Date } from "../../types";
import { monthDates } from "../configs/MonthDays";
import { Weekdays } from "../configs/Weekdays";

export const Calendar: React.FC<{}> = ({}) => {
  const [selectedDate, setSelectedDate] = useState<string | null>();

  const handleChange = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectedDate(e.currentTarget.getAttribute("value"));
  };

  const generateDates = (date: number) => {
    let seelectedDateNumber: number = selectedDate ? parseInt(selectedDate) : 0;
    for (let i = 0; i < 7; i++) {
      return (
        <button
          className={`date ${date == 5 ? "today" : ""} ${
            date == seelectedDateNumber ? "selected" : ""
          }`}
          onClick={handleChange}
          value={date}
        >
          <p>{date}</p>
        </button>
      );
    }
  };

  const generateWeeks = (dates: Array<Date>) => {
    let daysInWeek = 7;
    let tempArray = [];

    for (let i = 0; i < dates.length; i += daysInWeek) {
      tempArray.push(dates.slice(i, i + daysInWeek));
    }

    return tempArray;
  };
  return (
    <div className="calendar-container">
      <div className="datepicker-container">
        <span> January 2023</span>
      </div>
      <div className="weekdays-container">
        {Weekdays.map((day) => (
          <div key={day} className="week-day">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar">
        {generateWeeks(monthDates).map((week) => (
          // ** 모르겠음
          <div key={""} className="week">
            {week.map((day) => generateDates(day.day))}
          </div>
        ))}
      </div>
    </div>
  );
};
