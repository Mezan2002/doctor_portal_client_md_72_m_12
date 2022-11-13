import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import BgImage from "../../../assets/images/bg.png";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <header
      className="mt-60 mb-20"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <img
              src={chair}
              className="rounded-lg shadow-2xl"
              alt="dentist chair"
            />
          </div>
          <div className="lg:w-1/2">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            <p>You Have Selected Date: {format(selectedDate, "PPPP")}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
