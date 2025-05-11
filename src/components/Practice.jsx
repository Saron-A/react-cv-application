import "../styles/style.css";
import { useState } from "react";

const Practice = ({ experience, setExperience }) => {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);

  return (
    <div className="sub-container">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <form action="" onSubmit={handleSubmit}>
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
                setExperience({
                  ...experience,
                  responsibilities: e.target.value,
                })
              }
            ></textarea>
          </div>

          <div className="input-label">
            <label htmlFor="date">
              The duration of your employment in the company:
            </label>
            <input
              type="date"
              id="school"
              value={experience.duration}
              onChange={(e) =>
                setExperience({ ...experience, duration: e.target.value })
              }
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company Name: {experience.company}</p>
          <p>Position Title: {experience.position}</p>
          <p>Job Responsibilities: {experience.responsibilities}</p>
          <p>Duration of Employment: {experience.duration}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Practice;
