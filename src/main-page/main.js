import React, { useState } from "react";
import PersonalInfo from "../personal-info-form/personal-info";
import Planscard from "../plan-selection/plancards/planscard";
import PlanSelection from "../plan-selection/plan-selection";
import "./info.css";
import AddOn from "../pick-add-ons/add-on";
import Summary from "../summary/summary";

const Info = () => {
  const [step, setStep] = useState(1);
  const changeState = (page) => {
    setStep(page);
  };
  const changeForm = () => {
    if (step == 1) {
      return <PersonalInfo changePage={changeState} />;
    }
    if (step == 2) {
      return <PlanSelection changePage={changeState} />;
    }
    if (step == 3) {
      return <AddOn changePage={changeState} />;
    }
    if (step == 4) {
      return <Summary changePage={changeState} />;
    }
  };
  return (
    <div class="con">
      <div class="container mx-auto bg-white card ">
        <div class=" side-bar">
          <div className="btnCon">
            <button
              class={step == 1 ? "btn-selected" : "btn"}
              onClick={() => {
                setStep(1);
              }}
            >
              1
            </button>
            <button
              class={step == 2 ? "btn-selected" : "btn"}
              onClick={() => {
                setStep(2);
              }}
            >
              2
            </button>
            <button
              class={step == 3 ? "btn-selected" : "btn"}
              onClick={() => {
                setStep(3);
              }}
            >
              3
            </button>
            <button
              class={step == 4 ? "btn-selected" : "btn"}
              onClick={() => {
                setStep(4);
              }}
            >
              4
            </button>
          </div>
        </div>
        <div class="content">
          <div className="form-holder">{changeForm()}</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
