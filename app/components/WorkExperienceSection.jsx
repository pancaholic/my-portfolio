import React from "react";

const WorkExperienceSection = () => {
  return (
    <section id="work-experience">
      <div className="container mx-auto px-12 py-4">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          Work Experience
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-yellow-400">
              Frontend Developer Intern
            </h3>
            <p className="text-gray-400">
              PT.IDstar Cipta Teknologi | Jakarta | Dec 2025 - Present
            </p>
            <ul className="list-disc pl-2">
              <li>
                Developed and maintained user interfaces for web applications
                using React, Next.js, and TypeScript.
              </li>
              <li>
                Collaborated with cross-functional teams to design and implement
                new features, resulting in a 20% increase in user engagement.
              </li>
              <li>
                Optimized application performance, reducing load times by 30%
                through code refactoring and efficient state management.
              </li>
              <li>
                Implemented responsive design principles to ensure seamless user
                experience across devices.
              </li>
              <li>
                Conducted code reviews and provided mentorship to junior
                developers, fostering a culture of continuous learning and
                improvement.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-yellow-400">
              Frontend Web Developer Intern
            </h3>
            <p className="text-gray-400">
              PT. Telekomunikasi Indonesia, Tbk (Direktorat Digital Business) |
              Jakarta | Mar 2024 - Feb 2025
            </p>

            <ul className="list-disc pl-2">
              <li>
                Developed and maintained user interfaces for web applications
                using React, Next.js, and TypeScript.
              </li>
              <li>
                Collaborated with cross-functional teams to design and implement
                new features, resulting in a 20% increase in user engagement.
              </li>
              <li>
                Optimized application performance, reducing load times by 30%
                through code refactoring and efficient state management.
              </li>
              <li>
                Implemented responsive design principles to ensure seamless user
                experience across devices.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
