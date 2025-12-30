import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className=" font-[font1]">
      <div className="text-[9vw] uppercase text-center leading-none flex items-center justify-center">
        L'étincelle
      </div>
      <div className="text-[9vw] uppercase text-center leading-none flex items-center justify-center">
        qui
        <span className='h-[9vw] w-[16vw] rounded-xl overflow-hidden  '>
          <Video className={"rounded-full"} />
        </span>
        génère
      </div>
      <div className="text-[9vw] uppercase text-center leading-none flex items-center justify-center">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
