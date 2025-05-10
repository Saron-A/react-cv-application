import React, { useState } from "react";
import "../styles/style.css";

const Education = () => {
  const [education, setEducation] = useState({
    school: "",
    study: "",
    date: "",
  });

  return (
    <div className="sub-container">
      <h2>Education Background</h2>
      <div className="input-label">
        <label htmlFor="school">Name of School: </label>
        <input
          type="text"
          id="school"
          value={education.school}
          onChange={(e) => {
            setEducation({ ...education, school: e.target.value });
          }}
        />
      </div>

      <div className="input-label">
        <label htmlFor="study">Title of Study: </label>
        <input
          type="text"
          id="study"
          value={education.study}
          onChange={(e) =>
            setEducation({ ...education, study: e.target.value })
          }
        />
      </div>

      <div className="input-label">
        <label htmlFor="date">Date of Study: </label>
        <input
          type="date"
          id="date"
          value={education.date}
          onChange={(e) => setEducation({ ...education, date: e.target.value })}
        />
      </div>

      <button type="submit">Submit</button>
    </div>
  );
};

export default Education;
