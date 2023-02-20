import Home from "./Routes/Home";
import About from "./Routes/About";
import Projects from "./Routes/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
