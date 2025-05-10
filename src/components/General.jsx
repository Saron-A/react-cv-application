import React, { useState } from "react";
import "../styles/style.css";

const General = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <div className="sub-container">
      <h2>General Information</h2>
      <div className="input-label">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={generalInfo.name}
          onChange={(e) => {
            setGeneralInfo({ ...generalInfo, name: e.target.value });
          }}
        />
      </div>

      <div className="input-label">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={generalInfo.email}
          onChange={(e) => {
            setGeneralInfo({ ...generalInfo, email: e.target.value });
          }}
        />
      </div>

      <div className="input-label">
        <label htmlFor="num">Phone Number: </label>
        <input
          type="number"
          id="num"
          value={generalInfo.phone}
          onChange={(e) => {
            setGeneralInfo({ ...generalInfo, phone: e.target.value });
          }}
        />
      </div>

      <button type="Submit">Submit</button>
    </div>
  );
};

export default General;
