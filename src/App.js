import logo from "./logo.svg";
import "./App.css";
import FormCheck from "./components/landing";
import Navbar from "./components/navbar";
import About from "./components/about";
import Ambulance from "./components/ambulance";

function App() {
  return (
    <div className="App">
      < Navbar />
      <FormCheck />
      < About />
      < Ambulance />
    </div>
  );
}

export default App;
