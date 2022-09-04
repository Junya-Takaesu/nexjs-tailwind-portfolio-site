import React from "react";
import ProjectPage from "../components/ProjectPage";
import netflixImg from "../public/assets/projects/netflix.jpg";

const netflix = () => {
  const technologies = [
    { name: "React JS", isFeature: true },
    { name: "Tailwind", isFeature: true },
    { name: "Firebase", isFeature: true },
    { name: "Javascript", isFeature: false },
    { name: "Google API", isFeature: false },
    { name: "Zillow API", isFeature: false },
  ];
  const projecetSynopsis = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa praesentium dolore cupiditate voluptates. Magni aspernatur quod ducimus repellendus
    reiciendis sed quis suscipit facere dignissimos illum? Nemo reiciendis eveniet voluptates sapiente? Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Expedita fugiat temporibus tenetur aliquid voluptate fugit alias in, dolor deserunt distinctio esse molestias laborum magnam
    deleniti quod eligendi? Rerum, officia illum?
  `;
  return (
    <div>
      <ProjectPage projecetOverlayImage={netflixImg} projecetTitle={"Netflix UI"} technologies={technologies} projecetSynopsis={projecetSynopsis} />
    </div>
  );
};

export default netflix;
