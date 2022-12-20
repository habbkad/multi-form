import React, { useState } from "react";
import "./planscard.css";

const Planscard = ({ plans }) => {
  const [selected, setSelected] = useState(false);
  console.log(plans);
  return (
    <div>
      <div
        className={selected ? "active-planCon" : "planCon"}
        onClick={(e) => {
          selected != true ? setSelected(true) : setSelected(false);
        }}
      >
        <img src={plans.icon} alt="ppk" className="image" />
        <br />
        <h2 class="ml-2">{plans.plan}</h2>
        <p id="price">{plans.price}</p>
      </div>
    </div>
  );
};

export default Planscard;
