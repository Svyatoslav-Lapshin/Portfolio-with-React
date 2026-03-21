import { Routes, Route, NavLink, HashRouter } from "react-router-dom";

import StartPage from "./pages/StartPage";
import CvPage from "./pages/CvPage";
import Contact from "./pages/Contact";
import ProjectsPage from "./pages/ProjectsPage";

import "./styles/shared.css";
import "./styles/style.css";
import Footer from "./components/Footer.jsx";
import { applySavedTheme, toggleTheme } from "../utils/theme.js";
import { useSecretWord } from "../hooks/useSecretWord.js";
import { useEffect } from "react";
import SecretPopUp from "./components/SecretPopUp.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  useEffect(() => {
    applySavedTheme();
  }, []);

  const { isOpen, setIsOpen } = useSecretWord();

  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <SecretPopUp isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <Footer toggleTheme={toggleTheme} />
      </HashRouter>
    </>
  );
}

export default App;
