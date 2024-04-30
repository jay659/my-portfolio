import React, { useState, useEffect } from "react";

// SVG
import man from "images/dev.svg";

// Animation
import { Link } from "react-scroll";
import { motion } from "framer-motion";

// CSS
import "./home.css";

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },
  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const TypeWriter = ({ words, wait }) => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = idx % words.length;
    const fullText = words[current];

    const handleTyping = () => {
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), wait);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIdx(idx + 1);
      }
    };

    const speed = isDeleting ? 100 / 2 : 100;
    const typingSpeed = !isDeleting && text === fullText ? wait : speed;

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, idx, words, wait]);

  return <span className="txt-type text-uppercase text-21 fw-800">{text}</span>;
};

const Home = () => {
  const words = [" Full Stack Developer.", " DevOps Engineer."];
  const wait = 3000;

  return (
    <section className="home-container" id="home" name="home">
      <div className="content" variants={contentVariants} initial="initial" animate="animate">
        <h2>HI, I'M A<br/>
          <TypeWriter words={words} wait={wait} />
        </h2>
        <p>I'm Jay Patel. A dedicated Full Stack Developer and proficient DevOps Engineer residing in Calgary, Canada.</p>
        <Link className="home-btn" to={"contact"} hashSpy={true} spy={true} smooth={true} delay={100} offset={-100} duration={500}>
          Contact Me
        </Link>
      </div>
      <motion.div className="svg" animate={{ translateY: [-20, 0, -20, 0] }} transition={{ yoyo: Infinity, duration: 6 }}>
        <img src={man} alt="Developer" />
      </motion.div>
    </section>
  );
};

export default Home;
