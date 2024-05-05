import React, { useEffect, useState } from "react";

// Import your Preloader component
import Preloader from 'components/Preloader/Preloader'; // Adjust the path as necessary

//data
import EducationData from "educationData";
import Skillsdata from "SkillsData";

// Components
import Nav from "components/Nav/Nav";
import Home from "components/Home/Home";
import Contact from "components/Contact/Contact";
import Education from "components/Education/education";
import AboutUs from "components/AboutUs/AnoutUs";
import Experience from "components/Experience/Experience";
import Skills from "components/Skills/Skills";
import { Menu } from "components/Menu/Menu";
import Footer from "components/Footer/Footer";
import ScrollToTopButton from "components/Footer/ScrollToTopButton";

// Animation
import "aos/dist/aos.css";



function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true); // State to handle loading


  // Render the Preloader if loading is true, else render the app content


  return (
    
    <>
    <div className="app-container">
    <Preloader />
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <AboutUs />
      <Education education_data={EducationData} />
      <Experience  />
      <Skills skilldata={Skillsdata}/>
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
    </>
  );
}

export default App;
