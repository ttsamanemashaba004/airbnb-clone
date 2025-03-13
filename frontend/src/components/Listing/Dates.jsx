import { useState } from "react";
import { Calendar } from "react-date-range";
import { differenceInCalendarDays } from "date-fns";
import { addDays } from 'date-fns'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Dates.css";
import { assets } from "../../assets/assets";

const Dates = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 7));

  const nights = differenceInCalendarDays(endDate, startDate);

  return (
    <div className="dates-container">
      <div className="dates-title-subtitle">
        <p>{nights} nights in New York</p>
        <span className="dates-subtitle">
          {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
        </span>
      </div>
      <div className="dates-months">
        <div className="dates-months-month">
        <Calendar
            date={startDate}
            onChange={date => setStartDate(date)}
            minDate={new Date()}
          />
        </div>
        <div className="dates-months-month">
        <Calendar
            date={endDate}
            onChange={date => setEndDate(date)}
            minDate={startDate}
          />
        </div>
      </div>
      <div className="dates-actions">
        <img src={assets.keyboard} alt="" />
        <span className="actions-text">Clear dates</span>
      </div>
    </div>
  );
};

export default Dates;
