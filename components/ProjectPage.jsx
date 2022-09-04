import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const ProjectPage = ({ projecetOverlayImage, projecetTitle, technologies, projecetSynopsis }) => {
  const [isShown, setIsShown] = useState(false);
  const [currentWindowWidth, setCurrentWindowWidth] = useState(0);
  const tailWindMediumMinWidth = 768;

  useEffect(() => {
    setCurrentWindowWidth(window.innerWidth);

    window.addEventListener("resize", (event) => {
      setCurrentWindowWidth(event.target.innerWidth);
      tailWindMediumMinWidth <= currentWindowWidth ? setIsShown(false) : setIsShown(true);
    });

    tailWindMediumMinWidth <= currentWindowWidth ? setIsShown(false) : setIsShown(true);
  }, [currentWindowWidth]);

  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] lg:h-[55vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[55vh] bg-black/80 z-10" />
        <Image className="absolute z-1" objectFit="cover" layout="fill" src={projecetOverlayImage} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{projecetTitle}</h2>
          <h3>
            {technologies
              .filter((technology) => technology.isFeature)
              .map((technology) => technology.name)
              .join(" / ")}
          </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <dir className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{projecetSynopsis}</p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </dir>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {technologies.map((technology) => {
                return (
                  <p key={technology.name} className="flex items-center text-gray-600">
                    <RiRadioButtonFill className="pr-1" />
                    {technology.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <Link href="/">
          <p
            className="
              col-span-4
              shadow-xl shadow-gray-400
              rounded-xl
              uppercase text-black text-center
              bg-gradient-to-r from-[#ffffff] to-[#c0bfcf]
              cursor-pointer
              py-2 mt-4
              md:col-span-1
              md:hover:translate-x-4 md:hover:w-[120%] md:transition-transform
              relative
            "
            onMouseEnter={() => tailWindMediumMinWidth <= currentWindowWidth && setIsShown(true)}
            onMouseLeave={() => tailWindMediumMinWidth <= currentWindowWidth && setIsShown(false)}
          >
            {isShown ? <IoIosArrowBack className="absolute top-[34%] left-[10%] inline-block pb-1" /> : ""}
            Back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
