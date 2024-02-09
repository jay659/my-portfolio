import React from "react";
import "./Experience.css";
// components
import { Heading } from "components/Heading/Heading";

const Experience = () => {
    return (
        <section
        data-aos="fade-up"
        className="experience"
        name="Experience"
        id="experience"
      >
        <Heading text="My Recent Works" style={{ padding: "3rem" }} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto impedit consequuntur similique pariatur atque nisi quam quos nobis, quo nostrum aspernatur praesentium dolore error assumenda inventore laudantium est ut rerum?</p>
        </section>
    )
}
export default Experience;