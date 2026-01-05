import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const imgName=[
    {
      img1:"/src/assets/projectImg1.png",
      img2:"/src/assets/projectImg2.png"
    },
    {
      img1:"/src/assets/projectImg3.png",
      img2:"/src/assets/projectImg4.png"
    },
    {
      img1:"/src/assets/projectImg5.png",
      img2:"/src/assets/projectImg6.png"
    },
    {
      img1:"/src/assets/projectImg7.png",
      img2:"/src/assets/projectImg8.png"
    },
    {
      img1:"/src/assets/projectImg9.png",
      img2:"/src/assets/projectImg10.png"
    },
    {
      img1:"/src/assets/projectImg11.png",
      img2:"/src/assets/projectImg12.png"
    },
    {
      img1:"/src/assets/projectImg13.png",
      img2:"/src/assets/projectImg14.png"
    },
    {
      img1:"/src/assets/projectImg15.png",
      img2:"/src/assets/projectImg16.png"
    },
    

  ]
gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.from(".items",{
      height:"100px",
      stagger:{
        amount:0.1
      },
      scrollTrigger:{
        trigger:".section2",
        start:"top 100%",
        end:"top -150%",
        scrub:true
      }
    })
    
  })
  return (
    <div className="px-4 ">
      <div className="mt-[22vw] flex">
        <h2 className="text-[13vw] font-[font2] uppercase ">projects</h2>
        <p className="text-4xl font-[font2]">17</p>
      </div>

      <div className="section2">
      {
        imgName.map((elem,idx)=>{
        return  <div key={idx} className="items flex w-full gap-2 h-[35vw] mb-4">
           <ProjectCard imgNames={elem} />
           </div>
      })
      }
      </div>
    </div>
  );
};

export default Projects;
