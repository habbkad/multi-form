import React from "react";
import "./planscard.css";

const Planscard = ({ plans }) => {
  console.log(plans);
  return (
    <div>
      <div className="planCon">
        <img src={plans.icon} alt="ppk" className="image" />
        <br />
        <h2 class="ml-2">{plans.plan}</h2>
        <p id="price">{plans.price}</p>
      </div>
    </div>
  );
};

export default Planscard;
