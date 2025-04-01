'use client'

import React, { useEffect, useState } from "react";
import { BurgerIcon } from "./IconHeaders";
import NavItem from "./NavItem";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);


const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState<boolean>(true);
  useEffect(() => {
    const showAnim = gsap.from('.header', { 
      y: -100,     
      paused: true, 
      duration: 0.5, 
      scrub: 1,
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",  
      end: "bottom+=100%",  
      scrub: 1,      
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play(); 
        } else {
          showAnim.reverse(); 
        }
      }
    });

  }, []);
  return (
    <header
      className="header  ease-in-out h-16 w-full bg-[#222222]/90 fixed top-0 left-0 right-0 z-50 "
    >
      <div className="flex h-full">
        <div className="w-1/2 flex items-center justify-center text-white">
          <h6 className="lg:text-2xl font-bold text-xl bg-gradient-to-l from-purple-400 to-orange-400/80 bg-clip-text text-transparent">
                MahDev
          </h6>
        </div>
        {/* Menu Burger (Mobile)  */}
        <div
          className="lg:hidden text-white flex items-center justify-end w-1/2  pr-4"
          onClick={() => {setIsMobileNavVisible(!isMobileNavVisible)} }
        >
          <div className=" w-8 h-8">
            <BurgerIcon/>
          </div>
        </div>

        {/* Navigation (Desktop)  */}
        <nav className={`hidden lg:block w-1/2 pr-14`}>
          <ul className="flex flex-row items-center justify-between h-full w-4/5 text-lg font-semibold text-white">
           <NavItem href="#home" label="Home"/>
           <NavItem href="#projects" label="Projects"/>
           <NavItem href="#experiences" label="Experience"/>
           <NavItem href="#contact" label="Contact"/>
          </ul>
        </nav>
      </div>

      {/* Navigation (mobile)  */}
      <nav className={`${isMobileNavVisible && 'hidden'} bg-[#222222]/90`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <ul>
          <NavItem href="#home" label="Home" isMobile close={() => setIsMobileNavVisible(true) }/>
           <NavItem href="#projects" label="Projects" isMobile close={() => setIsMobileNavVisible(true) }/>
           <NavItem href="#experiences" label="Experience" isMobile close={() => setIsMobileNavVisible(true) }/>
           <NavItem href="#contact" label="Contact" isMobile close={() => setIsMobileNavVisible(true) }/>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
