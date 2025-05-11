import { useState } from "react";
import General from "./components/General.jsx";
import Education from "./components/Education.jsx";
import Practice from "./components/Practice.jsx";
import "./styles/style.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    school: "",
    study: "",
    date: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    duration: "",
  });

  return (
    <div className="container">
      <h1>CV Application</h1>
      <General generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Education education={education} setEducation={setEducation} />
      <Practice experience={experience} setExperience={setExperience} />
    </div>
  );
}

export default App;
