import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FormCheck from "./components/landing";
import Navbar from "./components/navbar";
// import About from "./components/about";
// import Ambulance from "./components/ambulance";

function App() {
  return (
    <div className="App">
      < Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={ <landing />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
