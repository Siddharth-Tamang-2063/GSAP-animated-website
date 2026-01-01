import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useContext, useRef } from "react";
import { NavContext } from "../context/Context";

const NavPage = () => {
 const [navOpen, setnavOpen]= useContext(NavContext)
 console.log(navOpen);
 
 const fullNavRef = useRef(null)
 const navScreen = useRef(null)


  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(navScreen.current,{
      display:"block"
    })

    tl.to(".stair", {
      delay:0.2,
      height: "100%",
      stagger: {
        amount:-0.3
      },
    });

     tl.to(".link",{
    opacity:1,
    rotateX:0,
     stagger: {
        amount:0.3
      },
   })

    tl.to(fullNavRef.current,{
      opacity:1
    })
  
 tl.to('.navlink', {
            opacity: 1
        })
  
  }

    function gsapreverseAnimation() {
    const tl = gsap.timeline();

     tl.to(".link",{
    opacity:0,
    rotateX:90,
     stagger: {
        amount:0.3
      },
   })

    tl.to(".stair", {
      height: 0,
      stagger: {
        amount:0.1
      },
    });
 tl.to('.navlink', {
            opacity: 0
        })
    tl.to(fullNavRef.current,{
      opacity:0
    })
  tl.to(navScreen.current,{
    display:"none"
  })

  
  }


  useGSAP(()=>{
    if(navOpen){
 gsapAnimation()
    } else{
 gsapreverseAnimation()
    }
  },[navOpen])


 
  return (
    <div ref={navScreen} className="absolute z-50  text-white h-screen w-screen overflow-hidden ">
 {/* animationCode */}
      <div  className="h-screen w-full fixed"> 
    <div className="h-full w-full flex  ">
          <div className="h-full stair w-1/5 bg-red-500"></div>
          <div className="h-full stair w-1/5 bg-red-500"></div>
          <div className="h-full stair w-1/5 bg-red-500"></div>
          <div className="h-full stair w-1/5 bg-red-500"></div>
          <div className="h-full stair w-1/5 bg-red-500"></div>
        </div>
      </div>

{/* navpagecode */}
      <div>
      <div className=" relative navlink top-0 w-full text-white  flex justify-between ">
        <div className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            height="50"
            viewBox="0 0 103 44"
          >
            <path
            fill="white"
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>
        <div onClick={()=>{setnavOpen(false)}} className="relative h-30 w-30 flex items-center justify-center ">
  <div className="absolute h-full w-0.5 bg-white  rotate-45 origin-center"></div>
  <div className="absolute h-full w-0.5 bg-white -rotate-45 origin-center"></div>
</div>

      </div>
      <div ref={fullNavRef} className="      ">
        <div className=" py-5">
        <div className="link origin-top relative leading-[7vw]  ">
          <h1 className="text-[8vw] uppercase font-[font2] border-t-1 pt-2 text-center">
            projects
          </h1>

          <div className="navAnimation absolute flex   top-0 bg-[#D3FD50] text-black items-center">
            <div className="xscroll  flex overflow-x-auto-auto   items-center">
              <h2 className="text-[8vw] whitespace-nowrap  uppercase font-[font2] border-t-0.5 pt-2 text-center">
                pour toit voir
              </h2>
              <img
                className="h-18 w-52 object-cover flex-shrink-0   rounded-full "
                src="/src/assets/Thumbnail1.png"
              ></img>
              <h2 className="text-[8vw] whitespace-nowrap uppercase font-[font2] border-t-1 pt-2 text-center">
                pour toit voir
              </h2>
              <img
                className="h-18 w-52 object-cover flex-shrink-0   rounded-full "
                src="/src/assets/Thumbnail2.png"
              ></img>
            </div>
            <div className="xscroll overflow-x-auto-auto flex  items-center">
              <h2 className="text-[8vw] whitespace-nowrap uppercase font-[font2] border-t-1 pt-2 text-center">
                pour toit voir
              </h2>
              <img
                className="h-18 w-52 object-cover shrink-0   rounded-full "
                src="/src/assets/Thumbnail1.png"
              ></img>
              <h2 className="text-[8vw] whitespace-nowrap uppercase font-[font2] border-t-1 pt-2 text-center">
                pour toit voir
              </h2>
              <img
                className="h-18 w-52 object-cover shrink-0   rounded-full "
                src="/src/assets/Thumbnail2.png"
              ></img>
            </div>
          </div>
        </div> 
        <div className="link origin-top  relative leading-[7vw]  ">
          <h1 className="text-[8vw] uppercase font-[font2] border-t-1 pt-2 text-center">
            agence
          </h1>

          <div className="navAnimation absolute flex   top-0 bg-[#D3FD50] text-black items-center">
            <div className="xscroll  flex overflow-x-auto-auto   items-center">
              <h2 className="text-[8vw] whitespace-nowrap  uppercase font-[font2] border-t-1 pt-2 text-center">
                pour toit voir
              </h2>
              <img
                className="h-18 w-52 object-cover flex-shrink-0   rounded-full "
                src="/src/assets/Thumbnail1.png"
              ></img>
              <h2 className="text-[8vw] whitespace-nowrap uppercase font-[font2] border-t-1 pt-2 text-center">
                pour toit voir
              </h2>
              <img
                className="h-18 w-52 object-cover flex-shrink-0   rounded-full "
                src="/src/assets/Thumbnail2.png"
              ></img>
            </div>
            <div className="xscroll overflow-x-auto-auto flex  items-center">
              <h2 className="text-[8vw] whitespace-nowrap uppercase font-[font2] border-t-1 pt-2 text-center">
                pour toit voir
              </h2>
              <img
                className="h-18 w-52 object-cover shrink-0   rounded-full "
                src="/src/assets/Thumbnail1.png"
              ></img>
              <h2 className="text-[8vw] whitespace-nowrap uppercase font-[font2] border-t-1 pt-2 text-center">
                pour toit voir
              </h2>
              <img
                className="h-18 w-52 object-cover shrink-0   rounded-full "
                src="/src/assets/Thumbnail2.png"
              ></img>
            </div>
          </div>
        </div> 
        <div className="link origin-top  relative leading-[7vw]  ">
          <h1 className="text-[8vw] uppercase font-[font2] border-t-1 pt-2 text-center">
            contact
          </h1>

          <div className="navAnimation absolute flex   top-0 bg-[#D3FD50] text-black items-center">
            <div className="xscroll  flex overflow-x-auto-auto   items-center">
              <h2 className="text-[8vw] whitespace-nowrap  uppercase font-[font2] border-t-1 pt-2 text-center">
                pour toit voir
              </h2>
              <img
                className="h-18 w-52 object-cover flex-shrink-0   rounded-full "
                src="/src/assets/Thumbnail1.png"
              ></img>
              <h2 className="text-[8vw] whitespace-nowrap uppercase font-[font2] border-t-1 pt-2 text-center">
                pour toit voir
              </h2>
              <img
                className="h-18 w-52 object-cover flex-shrink-0   rounded-full "
                src="/src/assets/Thumbnail2.png"
              ></img>
            </div>
            <div className="xscroll overflow-x-auto-auto flex  items-center">
              <h2 className="text-[8vw] whitespace-nowrap uppercase font-[font2] border-t-1 pt-2 text-center">
                pour toit voir
              </h2>
              <img
                className="h-18 w-52 object-cover shrink-0   rounded-full "
                src="/src/assets/Thumbnail1.png"
              ></img>
              <h2 className="text-[8vw] whitespace-nowrap uppercase font-[font2] border-t-1 pt-2 text-center">
                pour toit voir
              </h2>
              <img
                className="h-18 w-52 object-cover shrink-0   rounded-full "
                src="/src/assets/Thumbnail2.png"
              ></img>
            </div>
          </div>
        </div> 
        <div className="link origin-top  relative leading-[7vw]  ">
          <h1 className="text-[8vw] uppercase font-[font2] border-t-1 border-b-1 pt-2 text-center">
            blogue
          </h1>

          <div className="navAnimation absolute flex   top-0 bg-[#D3FD50] text-black items-center">
            <div className="xscroll  flex overflow-x-auto-auto   items-center">
              <h2 className="text-[8vw] whitespace-nowrap  uppercase font-[font2]  pt-2 text-center">
                pour toit voir
              </h2>
              <img
                className="h-18 w-52 object-cover flex-shrink-0   rounded-full "
                src="/src/assets/Thumbnail1.png"
              ></img>
              <h2 className="text-[8vw] whitespace-nowrap uppercase font-[font2]  pt-2 text-center">
                pour toit voir
              </h2>
              <img
                className="h-18 w-52 object-cover flex-shrink-0   rounded-full "
                src="/src/assets/Thumbnail2.png"
              ></img>
            </div>
            <div className="xscroll overflow-x-auto-auto flex  items-center">
              <h2 className="text-[8vw] whitespace-nowrap uppercase font-[font2] border-t-1 pt-2 text-center">
                pour toit voir
              </h2>
              <img
                className="h-18 w-52 object-cover shrink-0   rounded-full "
                src="/src/assets/Thumbnail1.png"
              ></img>
              <h2 className="text-[8vw] whitespace-nowrap uppercase font-[font2] border-t-1 pt-2 text-center">
                pour toit voir
              </h2>
              <img
                className="h-18 w-52 object-cover shrink-0   rounded-full "
                src="/src/assets/Thumbnail2.png"
              ></img>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NavPage;
