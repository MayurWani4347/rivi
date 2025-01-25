import React from "react";
import "../styles/boxList.css"; // Ensure to link your CSS file

const BoxListComponent = () => {
  return (
    <div className="box-container">
      <div className="box left-box">
        <h2>All the benefits of SaaS</h2>
        <ul>
          <li>
            <span className="checkmark">✔</span> Launch quickly
          </li>
          <li>
            <span className="checkmark">✔</span> Reduce costs
          </li>
          <li>
            <span className="checkmark">✔</span> Minimize risks
          </li>
          <li>
            <span className="checkmark">✔</span> Get regular updates
          </li>
        </ul>
      </div>

      <div className="box right-box">
        <h2>All the benefits of building in-house</h2>
        <ul>
          <li>
            <span className="checkmark">✔</span> Fully customizable
          </li>
          <li>
            <span className="checkmark">✔</span> Complete control of data
          </li>
          <li>
            <span className="checkmark">✔</span> Enhance team expertise
          </li>
          <li>
            <span className="checkmark">✔</span> Get ongoing support
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BoxListComponent;
