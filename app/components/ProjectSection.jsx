"use client";
import React, {useState, useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1}
}

const projectsData = [
    {
        id: 1,
        title: "M&T Store",
        description: "M&T is a is a website prototype that has the idea of being an  Indonesian multinational clothing company that has been developing and exploring the latest fashion trends. It has branches spread all over the world. M&T provides the best men's fashionware that is up to the latest fashion trend. ",
        image: "/images/03.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/MrNewbies/M-and-T-Clothing-Store",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "CareFinder",
        description: "CareFinder is a hospital search website that aims to help users find the right and closest health facility to their location. The idea of this website was to provide solutions for people who are need medical services, but have difficulty finding a suitable hospital or clinic.",
        image: "/images/02.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Martin25-ts/CareFinder",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "HealthPoint",
        description: "This project created, with the hope that this website can become a source of useful information and help the public in getting fast and accurate access to health services.",
        image: "/images/01.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/MrNewbies/Health-Point",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Simple Calculator",
        description: "A simple calculator created with Python and kivy framework",
        image: "/images/python_calc.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/MrNewbies/simple-calculator",
        previewUrl: "/",
    },

    {
        id: 5,
        title: "SpaceWar",
        description: "Simple mobile game using python library called turtle, the concept is inspired by a spacewar! game in the 60's",
        image: "/images/spacewar.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/MrNewbies/simple-calculator",
        previewUrl: "/",
    },
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

  return (
    <section>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Web" 
                isSelected={tag === "Web"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Mobile" 
                isSelected={tag === "Mobile"} 
            />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
            <motion.li variants={cardVariants}
            key={index} 
            initial="initial" 
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            >
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl} 
                />
            </motion.li>
             ))}
        </ul>
    </section>
  )
}

export default ProjectSection
