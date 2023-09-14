import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Dashboard from "./Dashboard";
import Home from "./Home";
import About from "./About";
import myContext from "./context";
import Redux from "./Redux";
export default function App() {
  return (
    <div className="App">
    <myContext.Provider value={'Using Context API'}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/dashboard/:name" exact Component={Dashboard} />
          <Route path="/about" exact Component={About} />
          <Route path="/redux" exact Component={Redux} />
        </Routes>
      </myContext.Provider>
    </div>
  );
}
