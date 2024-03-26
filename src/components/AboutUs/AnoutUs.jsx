import React from 'react'
import './AnoutUs.css'
import { Heading } from "components/Heading/Heading";
import { Link } from "react-scroll";
import profile_image from 'images/profile-image.jpg'

const AnoutUs = () => {
  return (
    <section

      className="aboutus"
      name="About Us"
      id="about_us"
    >
      <Heading text="About Us" style={{ padding: "3rem" }} />
      <div className="row mobile_friendly">
        <div className="left_55">
         

          <h1 className='mb_70 ml-20'>A Passionate FullStack Developer based In Calgary, Canada.</h1>
          <div className="tf__about_text">
            <p className='mb_95'>
              With over 2.5 years of professional software industry experience, the individual demonstrates a deep passion for programming and possesses a robust foundation in the field. specialized in foundational languages such as JavaScript , complemented by expertise in Python, ReactJs, and NodeJS.
            </p>
            <a href="https://drive.google.com/file/d/173ggi4dZ1X2Te2DPYSeSEqrolNJvPY-m/view?usp=sharing" className="common_btn" download="My_CV.pdf">
              Download My CV
            </a>


          </div>
        </div>
        <div className="right_45 d-flex justify-content-end">
          <div className="tf__about_img" data-trigerid="about" >
            <img src={profile_image} alt="ZYAN" className="img-fluid w-100 h-85" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default AnoutUs
