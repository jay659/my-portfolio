import React from "react";
import "./timeline.css";
const Timeline = ({education_data}) => {
    // ... component implementation
    return (
    <div className="container-fluid" data-aos="fade-right">
    <div className="row example-basic">
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <ul className="timeline">
            {education_data.map((item, index) => (
                 <li className="timeline-item">
                 <div className="timeline-marker"></div>
                 <div className="card">
                    <div className="left_80">
                            
                        <div className="timeline-info">
                            <span>{item.year}</span>
                        </div>
                        
                        <div className="timeline-content">
                            <h3 className="timeline-title">{item.school}</h3>
                            <h5>{item.course}</h5>
                            <p>{item.description}</p>
                        </div>
                        <div className="tags">
                        {item.tags.map((tag, skillIndex) => (
                            <span key={skillIndex}>{tag}</span>
                        ))}
                        </div>
                    </div>
                    <div className="right_20 align_vertically">
                        <div className="featured-box style-4">
                            <div className="featured-box-icon text-25 fw-700 bg-primary rounded-circle">
                            <span>{item.gpa}</span>
                            </div>
                            <h3 className="text-7 fw-700">
                                GPA
                            </h3>
                        </div>
                    </div>
                 </div>
                 </li>
            ))}
             
            </ul>
        </div>
    </div>
</div>)
};

export default Timeline;