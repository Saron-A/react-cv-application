import "../styles/style.css";

const Practice = ({ experience, setExperience }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setExperience((prevObj) => ({ ...prevObj, [name]: value }));
  };

  return (
    <div className="sub-container">
      <h2>Practical Experience</h2>
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
              setExperience({ ...experience, responsibilities: e.target.value })
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
    </div>
  );
};

export default Practice;
