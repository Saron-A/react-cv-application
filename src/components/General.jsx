import "../styles/style.css";
import App from "../App.jsx";
import { useState } from "react";

const General = ({ generalInfo, setGeneralInfo }) => {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);

  return (
    <div className="sub-container">
      <h2>General Information</h2>
      {isEditing ? (
        <form action="" onSubmit={handleSubmit}>
          <div className="input-label">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
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
              name="email"
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
              name="num"
              value={generalInfo.phone}
              onChange={(e) => {
                setGeneralInfo({ ...generalInfo, phone: e.target.value });
              }}
            />
          </div>
          <button type="Submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone Number: {generalInfo.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default General;
