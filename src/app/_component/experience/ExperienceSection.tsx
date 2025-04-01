'use client'

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  useEffect(() => {
    // Animation pour le titre
    gsap.fromTo(
      ".experience-title", 
      {
        opacity: 0,
        y: -50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#experiences", 
          start: "top 80%",
          end: "top 20%", 
          scrub: true, 
        },
      }
    );

    // Animation pour la description
    gsap.fromTo(
      ".experience-description", 
      {
        opacity: 0,
        y: 50   
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#experiences", 
          start: "top 75%", 
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="experiences"
      className="w-full h-fit py-10 space-y-6 flex flex-col items-center bg-[#16181D]"
    >
      <h2
        className="experience-title font-extrabold text-4xl bg-gradient-to-b from-blue-500 to-blue-900 bg-clip-text text-transparent"
      >
        Experience
      </h2>
      <div className="lg:w-1/2 w-full px-2 space-y-4">
        <div className="space-y-4 p-6 experience-description">
          <div className="flex lg:flex-row flex-col space-y-2 lg:justify-between">
            <h3 className="text-white font-bold text-xl">
              SPAT – Stage de trois mois
            </h3>
            <p className="text-md text-white/40">Juillet - Septembre 2024</p>
          </div>
          <p className="text-md text-white/40">
            During my internship at SPAT, I played a key role in developing an internal application to streamline the recruitment and management of intern information. Collaborating closely with a dynamic team, I contributed to implementing features that optimized the management of candidate profiles and automated essential processes for recruiters and supervisors. My work enhanced communication and efficiency within the team, reducing administrative errors and simplifying access to intern data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
