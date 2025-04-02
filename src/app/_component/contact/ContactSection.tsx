"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EmailIcon, GitHubIcon, InstaIcon, LinkedinIcon } from "./IconeContact";
import ContactItem from "./ContactItem";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".contact-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".contact-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#contact",
          start: "top 50%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="contact"
      className="w-full h-fit py-10 space-y-6 flex flex-col items-center bg-[#16181D]"
    >
      <div className="contact-title text-center space-y-2 ">
        <h2 className="text-4xl font-inconsolata font-semibold text-[#BB72E9]">
          Contact
        </h2>
        <p className="text-white text-2xl font-bold">Did you like my work?</p>
        <p className="text-white/40 text-lg">
          Get in touch or follow me on my social media!
        </p>
      </div>

      <div className="contact-section space-y-4 px-10 sm:w-96 w-full">
        <ContactItem
          label="Linkedin"
          href="https://www.linkedin.com/in/mahery-daniel-96b711307/"
          icon={<LinkedinIcon />}
        />
        <ContactItem
          label="GitHub"
          href="https://github.com/Maherydn"
          icon={<GitHubIcon />}
        />
        <ContactItem
          label="Email"
          href="https://mail.google.com/mail/u/0/#inbox"
          icon={<EmailIcon />}
        />
        <ContactItem
          label="Instagram"
          href="https://www.instagram.com/maherydaniel/"
          icon={<InstaIcon />}
        />
      </div>
    </section>
  );
};

export default ContactSection;
