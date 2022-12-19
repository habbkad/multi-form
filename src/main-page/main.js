import React from "react";
import PersonalInfo from "../personal-info-form/personal-info";
import Planscard from "../plan-selection/plancards/planscard";
import PlanSelection from "../plan-selection/plan-selection";
import "./info.css";
import AddOn from "../pick-add-ons/add-on";

const Info = () => {
  return (
    <div class="con">
      <div class="container mx-auto bg-white card ">
        <div class=" side-bar">
          <div className="btnCon">
            <button class="btn">1</button>
            <button class="btn">1</button>
            <button class="btn">1</button>
            <button class="btn">1</button>
          </div>
        </div>
        <div class="content">
          <div className="form-holder">
            <AddOn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
