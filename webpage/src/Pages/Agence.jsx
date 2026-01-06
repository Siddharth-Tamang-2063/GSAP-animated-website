import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    import img1 from "/src/assets/img1.jpg"
    import img2 from "/src/assets/img2.jpg"
    import img3 from "/src/assets/img3.jpg"
    import img4 from "/src/assets/img4.jpg"
    import img5 from "/src/assets/img5.jpg"
    import img6 from "/src/assets/img6.jpg"
    import img7 from "/src/assets/img7.jpg"
    import img8 from "/src/assets/img8.jpg"
import { ScrollTrigger } from "gsap/all";
const Agence = () => {
    gsap.registerPlugin(ScrollTrigger);
  const imgDiv = useRef(null);
  const imgRef = useRef(null);
  const imgArray = [img1, img2, img3, img4, img5, img6,img7, img8];


  useGSAP(() => {
    gsap.to(imgDiv.current, {
      scrollTrigger: {
        trigger: imgDiv.current,
        start: "top 25%",
        end: "top -170%",
        pin: true,
         pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {

          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imgArray.length)
          } else {
            imageIndex = imgArray.length - 1
          }
          imgRef.current.src = imgArray[imageIndex]

        },
      },
    });
    ScrollTrigger.refresh();


  },[]);

  return (
    <div className="overflow-y-hidden ">
      <div className="relative py-1">

          <div
        ref={imgDiv}
        className=" absolute h-[25vw] w-[20vw]  lg:h-[20vw] lg:w-[15vw] lg:top-[13vw] lg:left-[30vw] rounded-2xl  overflow-hidden "
      >
        <img
          ref={imgRef}
          className=" h-full w-full object-cover "
          src={imgArray[0]}
          alt=""
        ></img>
      </div>
      </div>
    
      <div className="relative section1">
        <div className=" relative mt-[29vw] text-[19.8vw] font-[font2] uppercase leading-[17.5vw] text-center">
          Soixan7e<br></br>
          Douze
        </div>
        <div className="lg:text-[4vw] text-[6vw] font-[font2] pl-3  lg:pl-[50%] lg:leading-[4vw] leading-[6vw] ">
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Notre
            curiosité nourrit notre créativité. On reste humbles et on dit non
            aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques influentes.
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default Agence;
