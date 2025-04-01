"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroSecrionRef = useRef(null);
  const myPictureRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSecrionRef.current,
        start: "top 70%",
        toggleActions: "play none none none", 
      },
    });

    tl.fromTo(
      myPictureRef.current,
      { opacity: 0, rotateY: 160 },
      { opacity: 1, rotateY: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5" // Commence avant la fin de l'animation précédente
      )
      .fromTo(
        subHeadingRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      );
  }, []);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/images/CV.pdf";
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={heroSecrionRef}
      className="w-full h-screen flex justify-center py-12 mt-16 font-poppins flex-col space-y-6 items-center text-center bg-[url('../../public/images/fond4.jpg')] bg-no-repeat bg-cover bg-fixed  bg-center"
    >
      {/* Image avec animation flip-left */}
      <div ref={myPictureRef}>
        <Image
          className="lg:size-50 size-36 bg-gradient-to-l from-purple-400 to-orange-400/80 rounded-full flex items-center justify-center"
          src="./images/Avatar.png"
          alt="Avatar"
        />
      </div>

      {/* Titres */}
      <div className="lg:text-5xl text-2xl text-white font-bold space-y-2">
        <h2 ref={headingRef}>I'm Mahery,</h2>
        <h2
          ref={subHeadingRef}
          className="bg-gradient-to-l from-purple-400 to-orange-400/80 bg-clip-text text-transparent"
        >
          Junior Web Developer.
        </h2>
      </div>

      {/* Paragraphe */}
      <p
        ref={paragraphRef}
        className="text-slate-200/50 text-xl font-semibold lg:w-1/2 px-6 w-full"
      >
        As a junior developer, I focus on creating modern and effective
        solutions while continuously learning and adapting to new technologies.
        My goal is to grow professionally by applying the latest industry
        practices and expanding my skill set.
      </p>

      {/* Boutons */}
      <div ref={buttonsRef} className="flex gap-4">
        <a
          href="#contact"
          className="text-white py-2 px-4 border border-white rounded-3xl duration-200 hover:bg-white hover:text-slate-900 font-semibold"
        >
          Get In Touch
        </a>
        <button className="text-white py-2 px-4 border border-white rounded-3xl duration-200 hover:bg-white hover:text-slate-900 font-semibold" onClick={downloadCV}>
          Download CV
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
