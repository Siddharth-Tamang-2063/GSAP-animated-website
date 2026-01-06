import React, { useEffect, useLayoutEffect } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const imgName = [
    { img1: "/src/assets/projectImg1.png", img2: "/src/assets/projectImg2.png" },
    { img1: "/src/assets/projectImg3.png", img2: "/src/assets/projectImg4.png" },
    { img1: "/src/assets/projectImg5.png", img2: "/src/assets/projectImg6.png" },
    { img1: "/src/assets/projectImg7.png", img2: "/src/assets/projectImg8.png" },
    { img1: "/src/assets/projectImg9.png", img2: "/src/assets/projectImg10.png" },
    { img1: "/src/assets/projectImg11.png", img2: "/src/assets/projectImg12.png" },
    { img1: "/src/assets/projectImg13.png", img2: "/src/assets/projectImg14.png" },
    { img1: "/src/assets/projectImg15.png", img2: "/src/assets/projectImg16.png" },
  ];

  gsap.registerPlugin(ScrollTrigger);

 
useLayoutEffect(() => {
  const heroes = gsap.utils.toArray(".hero");

  heroes.forEach((hero) => {
    gsap.from(hero, {
    height:"100px",
    stagger:0.4,
      scrollTrigger: {
        trigger: hero,
        start: "top 80%",
        end: "top 10%",
        scrub: true,
        invalidateOnRefresh:true
      },
    });
  });

 window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });


 
}, [])

  return (
    <div className="px-4">
      <div className="mt-[22vw] flex">
        <h2 className="text-[13vw] font-[font2] uppercase">projects</h2>
        <p className="text-4xl font-[font2]">17</p>
      </div>

      <div className="lol">
        {imgName.map((elem, idx) => (
          <div
            key={idx}
            className="hero flex md:flex-row flex-col w-full gap-2 mb-4 h-[400px]"
            // target height
          >
            <ProjectCard imgNames={elem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
