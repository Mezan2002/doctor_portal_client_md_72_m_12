import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ selectedDate }) => {
  return (
    <div className="mb-20">
      <p className="text-center text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PPPP")}
      </p>
    </div>
  );
};

export default AvailableAppointments;
