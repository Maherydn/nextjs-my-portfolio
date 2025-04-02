"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsAnimation = () => {
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textsRef = useRef<(HTMLDivElement | null)[]>([]);


  // Tableau des titres et descriptions associés aux panneaux
  const panelTexts = [
    {
      title: "Back-office Gestion Inter",
      description:
        "The back office allows you to manage interns, offering simple and efficient management of their follow-ups, built with Symfony for the backend and React for the frontend. This setup provides a seamless and dynamic user experience, ensuring efficient data management and interaction  .",
    },
    {
      title: "Back-office Bijoux & Deco",
      description:
      "This back-office web application is built with React and Express to manage orders and inventories efficiently for jewelry. It uses MongoDB for data storage and provides a simple, intuitive interface.",
    },
    {
      title: "Bijoux & Deco",
      description:
        "The landing page highlights a delicious selection of chocolates, cakes and ice creams, with a neat presentation of the products.",
    },
    {
      title: "Chat",
      description:
        "An instant messaging app allows users to exchange messages in real time quickly and seamlessly, built using React for the frontend, Symfony for the backend, and WebSocket for real-time communication. This setup ensures a responsive and efficient user experience, allowing for instant message delivery and smooth interaction.",
    },
  ];

  useEffect(() => {
    gsap.set(panelsRef.current, {
      zIndex: (i, _, targets) => targets.length - i,
    });

    //picture
    panelsRef.current.forEach((panel, i) => {
      if (i === panelsRef.current.length - 1) return;
      gsap.to(panel, {
        height: 0,
        scrollTrigger: {
          trigger: ".section-projects",
          start: `top -${window.innerHeight * (i + 0.5)}`,
          end: `+=${window.innerHeight}`,
          scrub: true,
          snap: panelsRef.current.length / 4,
        },
      });
    });

    // titre et description
    gsap.set(textsRef.current, {
      zIndex: (i, _, targets) => targets.length - i,
    });

    gsap.to(textsRef.current[0], { opacity: 1, y: "15%", duration: 0.33 });

    textsRef.current.forEach((text, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-projects",
          start: `top -${window.innerHeight * i}`,
          end: `+=${window.innerHeight}`,
          scrub: true,
        },
      });

      tl.to(text, { opacity: 1, y: "15%", duration: 0.33 });
      if (i !== textsRef.current.length - 1) {
        tl.to(text, { opacity: 0, y: "0%", duration: 0.33 }, 0.66);
      }
    });

    ScrollTrigger.create({
      trigger: ".section-projects",
      scrub: true,
      pin: true,
      start: "top top",
      end: `+=${textsRef.current.length * window.innerHeight}`,
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="sm:h-3/4 h-full flex sm:flex-row sm:justify-around sm:items-center flex-col-reverse justify-around w-full p-4 space-y-10 ">
      <div className="space-y-2 sm:w-md w-full sm:h-1/2 relative sm:mb-24 my-40 sm:my-0">
        {panelTexts.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) {
                textsRef.current[i] = el; 
              }
            }}          
            className={`panel-text absolute inset-0 text-4xl font-extrabold text-center opacity-0 `}
          >
            <div className="space-y-2  h-full flex flex-col justify-center items-center w-full">
              <h3 className="text-lg text-white/80 font-poppins font-bold uppercase">
                {item.title}
              </h3>
              <p className="text-sm text-white/40 font-poppins font-semibold">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-wrap relative overflow-hidden  sm:w-md w-full h-40 sm:h-60  ">
        {[
          "./images/app.png",
          "./images/backoffice.jpg",
          "./images/landing.jpg",
          "./images/chat.png",
        ].map((picture, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) {
                panelsRef.current[i] = el; // Assignez l'élément au tableau de refs
              }
            }}
            className={`panel absolute inset-0 overflow-hidden`}
          >
            <img src={picture} alt="alt" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsAnimation;
