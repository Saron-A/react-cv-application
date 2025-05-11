import "../styles/style.css";
import App from "../App.jsx";

const General = ({ generalInfo, setGeneralInfo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setGeneralInfo((prevObj) => ({ ...prevObj, [name]: value }));
  };

  return (
    <div className="sub-container">
      <h2>General Information</h2>
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
    </div>
  );
};

export default General;
