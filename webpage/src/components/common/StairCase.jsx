import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
const StairCase = ({children}) => {
   const mainPage = useRef(null)
  const screenAnimation = useRef(null);
  const locate = useLocation().pathname;

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(screenAnimation.current, {
      display: "block",
    });

    tl.from(".animationBox", {
      height: 0,
      stagger: {
        each: 0.05,
        from: "end",
      },
    });
    tl.to(".animationBox", {
      y: "100%",
      stagger: {
        each: 0.05,
        from: "end",
      },
    });
    tl.to(screenAnimation.current, {
      display: "none",
    });
    tl.to(".animationBox", {
      y: "0%",
    });

    gsap.from(mainPage.current,{
        opacity:0,
        delay:1.3,
        scale:2
    })
  }, [locate]);
  return (
    <div className="overflow-x-hidden">
      <div ref={screenAnimation} className="h-screen w-full   fixed z-10">
        <div className="h-full w-full flex  fixed z-10">
          <div className="h-full animationBox w-1/5 bg-black"></div>
          <div className="h-full animationBox w-1/5 bg-black"></div>
          <div className="h-full animationBox w-1/5 bg-black"></div>
          <div className="h-full animationBox w-1/5 bg-black"></div>
          <div className="h-full animationBox w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={mainPage}>
       {children}
      </div>
    </div>
  );
};

export default StairCase;
