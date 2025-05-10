import React, { useState } from "react";
import "../styles/style.css";

const Practice = () => {
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    date: "",
  });

  return (
    <div className="sub-container">
      <h2>Practical Experience</h2>
      <div className="input-label">
        <label htmlFor="company">Company Name: </label>
        <input
          type="text"
          id="company"
          value={experience.company}
          onChange={(e) =>
            setExperience({ ...experience, company: e.target.value })
          }
        />
      </div>

      <div className="input-label">
        <label htmlFor="position">Position Title: </label>
        <input
          type="text"
          id="position"
          value={experience.position}
          onChange={(e) =>
            setExperience({ ...experience, position: e.target.value })
          }
        />
      </div>

      <div className="input-label">
        <label htmlFor="responsibilities">
          Main Responsibilities of the Job:
        </label>
        <textarea
          name=""
          id="responsibilities"
          cols="50"
          rows="10"
          value={experience.responsibilities}
          onChange={(e) =>
            setExperience({ ...experience, responsibilities: e.target.value })
          }
        ></textarea>
      </div>

      <div className="input-label">
        <label htmlFor="date">
          Date when you started working to when you stopped:{" "}
        </label>
        <input
          type="date"
          id="school"
          value={experience.title}
          onChange={(e) =>
            setExperience({ ...experience, date: e.target.value })
          }
        />
      </div>

      <button type="submit">Submit</button>
    </div>
  );
};

export default Practice;
