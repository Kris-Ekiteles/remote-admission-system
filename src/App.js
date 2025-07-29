import logo from "./logo.svg";
import "./App.css";
import FormCheck from "./components/landing";
import Navbar from "./components/navbar";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      < Navbar />
      <FormCheck />
      < About />
    </div>
  );
}

export default App;
