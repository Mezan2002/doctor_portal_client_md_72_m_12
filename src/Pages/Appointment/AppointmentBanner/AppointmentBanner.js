import React from "react";
import chair from "../../../assets/images/chair.png";

const AppointmentBanner = () => {
  return (
    <header>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <img
              src={chair}
              className="max-w-sm rounded-lg shadow-2xl"
              alt="dentist chair"
            />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
