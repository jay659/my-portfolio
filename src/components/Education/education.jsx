import React from "react";

// Styles
import "./education.css";

// components
import { Heading } from "components/Heading/Heading";
import Timeline from 'components/timeline/Timeline';


const Education = ({ education_data }) => {
  return (
    <section
      
      className="education"
      name="Education"
      id="education"
    >
      <Heading text="Education"  style={{ padding: "3rem" }} />
      <div className="row">
        <Timeline education_data={education_data}  data-aos="fade-up" />
      </div>
    </section>
  );
};

export default Education;
