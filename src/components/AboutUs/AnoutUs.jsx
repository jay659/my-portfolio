import React from 'react'
import './AnoutUs.css'
import { Heading } from "components/Heading/Heading";
import { Link } from "react-scroll";

const AnoutUs = () => {
  return (
    <section
      
    className="aboutus"
    name="About Us"
    id="about_us"
  >
    <Heading text="About Us"  style={{ padding: "3rem" }} />
        <div className="row">
            <div className="left_55">
            <h1 className='mb_70'>A Passionate FullStack Developer based In Calgary, Canada.</h1>
            <div className="tf__about_text ">
                
                <p className='mb_95'>
                    Nemo design enim ipsam voluptatem quim voluptas sit aspernatur
                    aut odit auting fugit sed thisnquia consequuntur magni dolores
                    eos designer heresm qui ratione
                </p>
                <Link
                    className="common_btn"
                    to={"contact"}
                    hashSpy={true}
                    spy={true}
                    smooth={true}
                    delay={100}
                    offset={-100}
                    duration={500}
                >
                    Download CV
                </Link>
            </div>
            </div>
            <div className="right_45">

            <div className="tf__about_img" data-trigerid="about" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGFjsxZCvbMuKnsJHFywAKXzJh6SsPWVsifY_z36wVT9p38WQ3IQPDPDjhFPDyxv6YQY&usqp=CAU" alt="ZYAN" class="img-fluid w-100" />
            </div>
            </div>
        </div>
      
  </section>
  )
}

export default AnoutUs
