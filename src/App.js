// Desc: Main App component
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProjectDispaly from "./Pages/ProjectDispaly";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDispaly />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
