import React from "react";
import "./plan-selection.css";
import Planscard from "./plancards/planscard";
import arcade from "./assets/icon-arcade.svg";
import advanced from "./assets/icon-advanced.svg";
import pro from "./assets/icon-pro.svg";
const PlanSelection = () => {
  const plans = [
    {
      icon: arcade,
      plan: "Arcade",
      price: "$9/mo",
    },
    {
      icon: advanced,
      plan: "Advanced",
      price: "$12/mo",
    },
    {
      icon: pro,
      plan: "Pro",
      price: "$15/mo",
    },
  ];
  return (
    <div>
      <div className="container">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>

        <div className="plans-con">
          {plans.map((item, index) => {
            return (
              <div key={index}>
                <Planscard plans={item} />
              </div>
            );
          })}
        </div>
        <br />
        <div className="time-con">
          <p>Monthly</p>
          <label class="inline-flex relative items-center mb-11 cursor-pointer ml-6 mr-6">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 mt-5"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
          <p>Yearly</p>
        </div>
      </div>
    </div>
  );
};

export default PlanSelection;
