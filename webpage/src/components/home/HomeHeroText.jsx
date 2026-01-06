import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] px-4 sm:px-6 md:px-12 lg:px-24
                    flex flex-col justify-center lg:justify-start
                    min-h-screen lg:min-h-[auto]">
      
      {/* First line */}
      <div className="uppercase text-center leading-none flex justify-center items-center
                      text-[9vw] sm:text-[6vw] md:text-[5vw] lg:text-[9vw]">
        L'étincelle
      </div>

      {/* Second line with video */}
      <div className="uppercase text-center leading-none flex justify-center items-center
                      text-[9vw] sm:text-[6vw] md:text-[5vw] lg:text-[9vw] mt-2">
        qui
        <span className="h-[8vw] w-[14vw] sm:h-[6vw] sm:w-[10vw] md:h-[5vw] md:w-[8vw] lg:h-[9vw] lg:w-[16vw] rounded-xl overflow-hidden mx-2">
          <Video className="h-full w-full object-cover rounded-full" />
        </span>
        génère
      </div>

      {/* Third line */}
      <div className="uppercase text-center leading-none flex justify-center items-center
                      text-[9vw] sm:text-[6vw] md:text-[5vw] lg:text-[9vw] mt-2">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
