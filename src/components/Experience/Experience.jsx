import React, { useState } from 'react';
import { Heading } from "components/Heading/Heading";
import VerticalTabs from './VerticalTabs';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section

      className="Experience"
      name="Experience"
      id="experience"
    >
      <Heading text="Experience" style={{ padding: "3rem" }} />
      <div className="experience-quote" data-aos="fade-up">
        <p className='quote'>“Experience is not what happens to a man; it is what a man does with what happens to him.”</p>
<p className='author'> - Aldous Huxley, Texts & Pretexts: An Anthology With Commentaries</p>

      </div>
      <VerticalTabs />
   
    </section>
  );
};

export default Experience;
