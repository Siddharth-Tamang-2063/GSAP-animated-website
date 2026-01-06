import React from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";
import Navbar from "../components/home/Navbar";

const Home = () => {

  return (
    <div className="z-20">
      
      <div className="h-full w-full object-cover fixed">
        <Video />{" "}
      </div>
     
      <div className="h-screen w-screen relative text-4xl text-white flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
