import React, { useState } from "react";
import "./add-on.css";

const AddOn = ({ changePage }) => {
  const [onlineService, setOnlineService] = useState(true);
  const [largerSorage, setLargerStorage] = useState(false);
  const [cumtom, setCustom] = useState(false);
  return (
    <div>
      <div>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <br />
        <div className="add-on-con">
          {/* online-Services */}
          <div className={onlineService == true ? "active-add-ons" : "add-ons"}>
            <div className="addon-content">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                checked={onlineService}
                onChange={(e) => {
                  if (onlineService) {
                    setOnlineService(false);
                  } else {
                    setOnlineService(true);
                  }
                }}
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <div className="addon-text">
                <h2>Online service</h2>
                <p>Access to multiplayer games</p>
              </div>
            </div>
            <p>+1$/mo</p>
          </div>
          {/* larger-storage */}
          <div className={largerSorage == true ? "active-add-ons" : "add-ons"}>
            <div className="addon-content">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                checked={largerSorage}
                onChange={(e) => {
                  if (largerSorage) {
                    setLargerStorage(false);
                  } else {
                    setLargerStorage(true);
                  }
                }}
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <div className="addon-text">
                <h2>Larger storage</h2>
                <p>Extra 1TB of cloud save</p>
              </div>
            </div>
            <p>+1$/mo</p>
          </div>
          {/* Customizable profile */}
          <div className={cumtom == true ? "active-add-ons" : "add-ons"}>
            <div className="addon-content">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                checked={cumtom}
                onChange={(e) => {
                  if (cumtom == false) {
                    setCustom(true);
                  } else {
                    setCustom(false);
                  }
                }}
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <div className="addon-text">
                <h2>Customizable profile</h2>
                <p>Custom theme on your profile</p>
              </div>
            </div>
            <p>+1$/mo</p>
          </div>
        </div>
      </div>
      <div className="button-con ">
        <button>
          <p>Go back</p>
        </button>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={(e) => {
            changePage(4);
          }}
        >
          Next step
        </button>
      </div>
    </div>
  );
};

export default AddOn;
