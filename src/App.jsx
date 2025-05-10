import General from "./components/General.jsx";
import Education from "./components/Education.jsx";
import "./styles/style.css";

function App() {
  return (
    <div className="container">
      <h1>CV Application</h1>
      <General />
      <Education />
    </div>
  );
}

export default App;
