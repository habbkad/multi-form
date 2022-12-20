import React from "react";
import "./personal-info.css";
const PersonalInfo = ({ changePage }) => {
  return (
    <div>
      <div class="container mx-auto px-4">
        <h1 className="title">Personal info</h1>

        <p className="info-text">
          Please provide your name, email address, and phone number.
        </p>

        <div>
          <form>
            <label>Name</label>
            <br />
            <input placeholder="Name" type={"text"} />
            <br />
            <br />
            <label>Email Address</label>
            <br />
            <input placeholder="email@address.com" type={"email"} />
            <br />
            <br /> <label>Phone Number</label>
            <br />
            <input placeholder="e.g. +1 234 567 890" type={"number"} />
            <div className="submit-con">
              <button
                id="button"
                onClick={(e) => {
                  changePage(2);
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
