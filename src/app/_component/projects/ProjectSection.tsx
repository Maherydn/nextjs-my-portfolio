import React from "react";
import ProjectsAnimation from "./ProjectsAnimation";

const ProjectSection = () => {
  return (
    <section id="projects" className="section-projects h-screen flex flex-col items-center py-10 space-y-16 bg-[#16181D] w-screen">
      <div className="flex flex-col font-inconsolata space-y-4 text-center sm:h-1/4 h-fit ">
        <h2
          data-aos="fade"
          data-aos-duration="400"
          className="sm:text-4xl text-xl text-[#E3646E] font-bold"
        >
          My Projects
        </h2>
        <h3
          data-aos="fade"
          data-aos-duration="600"
          className="text-white sm:text-2xl text-lg font-bold"
        >
          See the featured projects
        </h3>
      </div>
      <ProjectsAnimation />
    </section>
  );
};

export default ProjectSection;
