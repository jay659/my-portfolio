import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import './Preloader.css';
import animationSound from 'Sound/clicksound.mp3';

function Preloader() {
    const [userInteracted, setUserInteracted] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline();

        const audio = new Audio(animationSound);

        tl.to("body", { overflow: "hidden" })
          .to(".preloader .text-container", {
            duration: 0,
            opacity: 1,
            ease: "Power3.easeOut"
          })
          .from(".preloader .text-container h1", {
            duration: 1.5,
            delay: 1,
            y: 100,
            skewY: 0,
            stagger: 0.4,
            ease: "Power3.easeOut"
          })
          .to(".preloader .text-container h1", {
            duration: 1.5,
            y: -100,
            skewY: 0,
            stagger: 0.4,
            ease: "Power3.easeOut",
            onComplete: () => {
                if (userInteracted) {
                    audio.play();
                }
            }
          })
          .to(".preloader", {
            duration: 1.5,
            height: "0vh",
            ease: "Power3.easeOut"
          })
          .to("body", {
            overflow: "auto"
          }, "-=1.5")
          .to(".preloader", {
            display: "none"
          });

        return () => {
          gsap.set("body", { overflow: "auto" });
        };
    }, [userInteracted]);

    const handleClick = () => {
        setUserInteracted(true);
    };

    return (
        <div className="preloader" onClick={handleClick}>
            <div className="text-container">
                <h1>Developer</h1>
                <h1>Designer</h1>
                <h1>DEVOPS</h1>
            </div>
        </div>
    );
}

export default Preloader;
