import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

function App() {
  return (
    <div className="App">
      {/* <div>This is a Sample Application.</div>
      <div>This is end of Sample Application.</div> */}

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/component-a">Component A</Link>
          </li>
          <li>
            <Link to="/component-b">Component B</Link>
          </li>
          <li>
            <Link to="/component-c">Component C</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/component-a" element={<ComponentA />} />
        <Route path="/component-b" element={<ComponentB />} />
        <Route path="/component-c" element={<ComponentC />} />
      </Routes>
    </div>
  );
}

export default App;
