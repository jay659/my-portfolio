import React, { useState } from 'react';
import finbyztech_logo from 'images/finbyz-tech.png';
import inteliedge_logo from 'images/InteliEdge.jpg';
import downarrow from 'images/downarrow.svg';
import './VerticalTabs.css';

const VerticalTabs = () => {
  // States to control visibility of content for each tab
  const [isOpenTab1, setIsOpenTab1] = useState(false);
  const [isOpenTab2, setIsOpenTab2] = useState(false);

  return (
    <div className="row ">
      <div className="tab-container shadow">
        <div className="tab-section">
          <div className="tab-button-container">
            <button className="tab-item text-primary" onClick={() => setIsOpenTab1(!isOpenTab1)}>
              Work
            </button>
            <img src={downarrow} alt='down arrow' className='down_arrow' />
          </div>
          {isOpenTab1 && (
            <div className="tab-content">
              <div class="row view-exp">
                <div className="experience_head_container">
                  <div className="experience_logo">
                    <img src={finbyztech_logo} alt='finbyztech_logo' />
                  </div>
                  <div className="experience_details">
                    <div className="company_name">
                      <h2>Finbyz Tech</h2>       <span>  (Ahmedabad, India)</span>
                    </div>
                    <div className="company_duration">
                      <p>June 2021 - November 2022</p>
                    </div>
                    <div className="company_position">
                      <p>Software Developer</p>
                    </div>
                  </div>
                </div>
                <div className="brief_exprience">
                <p>As a dedicated software developer, I've spearheaded the development of engaging websites and customized reports, meticulously crafted to meet the unique needs of each client.</p>
<p>Through close collaboration with clients, I've delved deep into understanding their core business operations, particularly in the manufacturing, chemicals, and logistics sectors. This hands-on approach has allowed me to tailor solutions that precisely align with their specific requirements and challenges.</p>
<p> Leveraging my in-depth industry knowledge, I've implemented cutting-edge systems that not only address current needs but also anticipate future demands. By combining technical expertise with a profound understanding of client workflows, I've consistently delivered solutions that streamline processes and drive measurable results.</p>
<p>My unwavering commitment to creating intuitive and user-friendly solutions has been pivotal in enhancing clients' efficiency and effectiveness in their respective roles, ultimately contributing to their overall success.</p>

                </div>

              </div>
            </div>
          )}
        </div>
        <div className="tab-section">
          <div className="tab-button-container">
          <button className="tab-item text-primary" onClick={() => setIsOpenTab2(!isOpenTab2)}>
              Internship
            </button>
            <img src={downarrow} alt='down arrow' className='down_arrow' />
          </div>
          {isOpenTab2 && (
            <div>
            <div className="tab-content">
              <div class="row view-exp">
                <div className="experience_head_container">
                  <div className="experience_logo">
                    <img src={inteliedge_logo} alt='inteliedge logo' />
                  </div>
                  <div className="experience_details">
                    <div className="company_name">
                      <h2>InteliEdge</h2>       <span>  (Toronto, Canada)</span>
                    </div>
                    <div className="company_duration">
                      <p> Janauary 2024 - April 2024</p>
                    </div>
                    <div className="company_position">
                      <p>ReactJs Developer</p>
                    </div>
                  </div>
                </div>
                <div className="brief_exprience">
                <p>As a FrontEnd developer, I specialize in using React.js to create websites featuring chatbots that enhance user interactions.</p>
<p>Collaborating closely with clients, I tailor websites to their specific needs, ensuring a perfect fit.</p>
<p>By incorporating React.js and chatbots, I prioritize user-friendliness and engagement.</p>
<p>Additionally, I implement automated deployment processes through CI/CD to enhance reliability.</p>

                </div>

              </div>
            </div>
            <div className="tab-content">
              <div class="row view-exp">
                <div className="experience_head_container">
                  <div className="experience_logo">
                  <img src={finbyztech_logo} alt='finbyztech_logo' />
                  </div>
                  <div className="experience_details">
                    <div className="company_name">
                      <h2>Finbyz Tech</h2>       <span>  (Ahmedabad, India)</span>
                    </div>
                    <div className="company_duration">
                      <p>Octomber 2020 - may 2021</p>
                    </div>
                    <div className="company_position">
                      <p>Traine</p>
                    </div>
                  </div>
                </div>
                <div className="brief_exprience">
                  <p>
                  Developed fluency in Python and JavaScript, investigating ERPNext and the Frappe framework. Participated in production application activities, acquiring useful industry knowledge and useful skills. Prepared to put software development knowledge to use in order to overcome obstacles and contribute significantly to projects, all the while gaining new knowledge and developing professionally.
                  </p>
                </div>

              </div>
            </div>
            </div>
            
          )}
        </div>


      </div>
    </div>

  );
};

export default VerticalTabs;
