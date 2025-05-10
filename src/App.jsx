import General from "./components/General.jsx";
import Education from "./components/Education.jsx";
import Practice from "./components/Practice.jsx";
import "./styles/style.css";

function App() {
  return (
    <div className="container">
      <h1>CV Application</h1>
      <General />
      <Education />
      <Practice />
    </div>
  );
}

export default App;
