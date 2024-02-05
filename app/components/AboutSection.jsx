"use client";
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>Next.js</li>
                <li>React.js</li>
                <li>Laravel</li>
                <li>JavaScript</li>
                <li>MySQL</li>
                <li>PHP</li>
                <li>C</li>
                <li>Python</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Computer Science | Bina Nusantara University</li>
                <li>MIPA | MAN 19 Jakarta</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Publication & Marketing Activist | HIMTI</li>
                <li>Event Division of LDKP 2023 | HIMTI</li>
                <li>Evaluation Coordinator of HILET 2023 | HIMTI</li>
                <li>Mentor of SESKAM 2022 | HIMTI </li>
                <li>Volunteer of Indonesian Dream Festival | Beneran Indonesia</li>
            </ul>
        )
    }
]


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    });
  }

  return (
    <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-me.jpg" width={500} height={500} alt="Alt text"/>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base md:text-lg">
                    I am an IT undergraduate student at Bina Nusantara University who is interested in database and web development. 
                I have experience in programming using MySQL, HTML, CSS, Python, and C. 
                I also have experience in projects, namely web development in the fields of e-commerce and health.
                </p>
                <div className="flex flex-row mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}>
                        {" "}
                        Skills
                        {" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} 
                    active={tab === "education"}>
                        {" "}
                        Education
                        {" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")} 
                    active={tab === "experience"}>
                        {" "}
                        Experience
                        {" "}
                    </TabButton>
                </div>
                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  );
}

export default AboutSection
