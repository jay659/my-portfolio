import React, { useEffect, useState } from "react";

//data
import EducationData from "educationData";
import Skillsdata from "SkillsData";

// Components
import Nav from "components/Nav/Nav";
import Home from "components/Home/Home";
import Contact from "components/Contact/Contact";
import Education from "components/Education/education";
import AnoutUs from "components/AboutUs/AnoutUs";
import Experience from "components/Experience/Experience";
import Skills from "components/Skills/Skills";
// Animation
import Aos from "aos";
import "aos/dist/aos.css";

// Components
import { Menu } from "components/Menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 });
  }, []);

  return (
    <div className="app-container">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <AnoutUs />
      <Education education_data={EducationData} />
      {/* <Experience  /> */}
      <Skills skilldata={Skillsdata}/>
      <Contact />
    </div>
  );
}

export default App;
