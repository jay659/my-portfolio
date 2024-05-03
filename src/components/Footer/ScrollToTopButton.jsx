import React, { useEffect, useState } from 'react';
import './ScrollToTopButton.css'; // Import your CSS file
import upsvg from 'images/up-arrow-icon.svg'

function ScrollToTopButton() {
  const [activeProgress, setActiveProgress] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActiveProgress(true);
      } else {
        setActiveProgress(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="paginacontainer">
      <div className="scroll">
        {/* Your scrollable content goes here */}
      </div>
      <div className={activeProgress ? 'progress-wrap active-progress' : 'progress-wrap'} onClick={scrollToTop}>
        <img src={upsvg} alt="up arrow" className='up_svg_code' />
      </div>
    </div>
  );
}

export default ScrollToTopButton;
