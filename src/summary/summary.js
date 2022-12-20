import React from "react";
import "./summary.css";

const Summary = () => {
  return (
    <div>
      <div className="summaryCon">
        <div>
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
          <br />
          {/* billing container */}
          <div className="bill-con">
            <div className="bill-text">
              <div>
                <h3>Arcade (Monthly)</h3>

                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Change
                </a>
              </div>
              <h3
                style={{
                  fontWeight: "Bold",
                }}
              >
                $90/yr
              </h3>
            </div>
            <div className="line"></div>
            <div className="bill-text">
              <div>
                <p>Online service</p>
              </div>
              <h3
                style={{
                  fontWeight: "Bold",
                }}
              >
                +$10/mo
              </h3>
            </div>
            <div className="bill-text">
              <div>
                <p>Larger storage</p>
              </div>
              <h3
                style={{
                  fontWeight: "Bold",
                }}
              >
                +$20/yr
              </h3>
            </div>
          </div>
          <div
            className="final-bill-text"
            style={{
              width: 390,
              alignSelf: "center",
              paddingLeft: 10,
              marginTop: 10,
            }}
          >
            <div>
              <p>Online service</p>
            </div>
            <h3
              style={{
                fontWeight: "Bold",
                color: "hsl(243, 100%, 62%)",
                fontSize: 18,
              }}
            >
              $9/mo
            </h3>
          </div>
        </div>
      </div>
      <div className="summary-navButtons">
        <button class="dark:hover:blue-700">
          <p>Go Back</p>
        </button>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Confim
        </button>
      </div>
    </div>
  );
};

export default Summary;
