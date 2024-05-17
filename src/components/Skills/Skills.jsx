import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./skills.css";

import { Heading } from "components/Heading/Heading";
const Skills = ({ skilldata }) => {

    return (
   
    <>
        <section
        data-aos="fade-up"
        className="skills"
        name="Skills"
        id="skills"
      >
        <Heading text="Skills" style={{ padding: "3rem" }} />
        </section>
        <div className="skills_wrapper">       
            <div className='skills-details' >
                {skilldata.map((skill, index) => (
                <div className={`skill-box ${skill.shadowColor}`} data-aos="fade-up" > 
                <div className="skill-icon">
                    {skill.isimage ? (
                        <img src={skill.icon} alt={skill.name} className="skill_icons" />
                                            ) : (
                        <FontAwesomeIcon
                            icon={skill.icon}
                           
                            className={`iconStyle ${skill.iconColor}`}
                        />
                    )}
                </div>
                    <h2 className='title'>{skill.name}</h2>
                </div> ))
                }       
            </div>
        </div>
    </>
    );
  };
 
  
export default Skills;