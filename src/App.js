import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Dashboard from "./Dashboard";
import Home from "./Home";
import About from "./About";
export default function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/dashboard/:name" exact Component={Dashboard} />
        <Route path="/about" exact Component={About} />
      </Routes>
    </div>
  );
}
