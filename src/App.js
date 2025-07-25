import "./App.css";
import Weather from "./weather";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Nairobi" />
        <footer>
          This project was coded by{" "}
          <a href="https://ug.linkedin.com/in/nakyanzi-catheriine-901b031a3">
            Cathy
          </a>{" "}
          and is open-source on{" "}
          <a href="https://github.com/catherine256/week5">
            <span>open-sourced on GitHub</span>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
