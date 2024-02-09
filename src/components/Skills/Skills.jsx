import React, { useEffect } from 'react';
import "./skills.css";

import { Heading } from "components/Heading/Heading";
const Skills = ({ skilldata }) => {
    useEffect(() => {
        let  numberPercent = document.querySelectorAll('.countbar')
        let getPercent = Array.from(numberPercent)
        
        getPercent.map((items) => {
            let startCount = 0
            let progressBar = () => {
                startCount ++
               
                items.style.width = `${startCount}%`
                if(startCount == items.dataset.percentnumber) {
                    clearInterval(stop)
                }
            }
            let stop = setInterval(() => {
                progressBar()
            },25)
        })
      }, []); 
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
            <div className="main left">
                {skilldata.map((item, index) => (
                     <div className="progress" key={index}>
                     <div className="title">
                     <h3>{item.skill}</h3>
                     <h3>{item.percentage}%</h3>
                     </div>
                     <div className="barline">
                     <div className="countbar" data-percentNumber={item.percentage}></div>
                     </div>
                 </div>
                ))}
               
            </div>
        
        </div>
       

            
    </>
    );
  };
 
  
export default Skills;