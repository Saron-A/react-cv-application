import { useState } from "react";
import "../styles/style.css";

const Education = ({ education, setEducation }) => {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);

  return (
    <div className="sub-container">
      <h2>Education Background</h2>

      {isEditing ? (
        <form action="" onSubmit={handleSubmit}>
          <div className="input-label">
            <label htmlFor="school">Name of School: </label>
            <input
              type="text"
              id="school"
              value={education.school}
              onChange={(e) => {
                setEducation((prevEdu) => ({
                  ...prevEdu,
                  school: e.target.value,
                }));
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
                setEducation((prevEdu) => ({
                  ...prevEdu,
                  study: e.target.value,
                }))
              }
            />
          </div>

          <div className="input-label">
            <label htmlFor="date">Date of Study: </label>
            <input
              type="date"
              id="date"
              value={education.date}
              onChange={(e) =>
                setEducation((prevEdu) => ({
                  ...prevEdu,
                  date: e.target.value,
                }))
              }
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="submittedInfo">
          <p>School Name: {education.school}</p>
          <p>Subject of Study: {education.study}</p>
          <p>Date of Study: {education.date}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Education;
