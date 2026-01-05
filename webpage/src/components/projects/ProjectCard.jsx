import React from 'react'

const ProjectCard = ({imgNames}) => {
    console.log({imgNames})
  return (
      <>
          <div className=" group w-1/2 relative  h-full hover:rounded-4xl transition-all overflow-hidden">
            <img
              className="w-full h-full object-cover duration-500  group-hover:scale-105 transition-all"
              src={imgNames.img1}
            ></img>
            <div className="opacity-0 duration-500 group-hover:opacity-100 transition-all absolute top-0 left-0 font-[font2] text-white h-full w-full flex items-center justify-center uppercase  text-[4vw]">
              <h2 className="border-2 rounded-full px-4 pt-4 leading-10">
                voir le project
              </h2>
            </div>
          </div>
          <div className=" group w-1/2 relative  h-full hover:rounded-4xl transition-all overflow-hidden">
            <img
              className="w-full h-full object-cover duration-500  group-hover:scale-105 transition-all"
              src={imgNames.img2}
            ></img>
            <div className="opacity-0 duration-500 group-hover:opacity-100 transition-all absolute top-0 left-0 font-[font2] text-white h-full w-full flex items-center justify-center uppercase  text-[4vw]">
              <h2 className="border-2 rounded-full px-4 pt-4 leading-10">
                voir le project
              </h2>
            </div>
            </div>
      </>
          
        
  )
}

export default ProjectCard
