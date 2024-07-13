import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const WorkSection = () => {
  return (
    <section
      className=" flex flex-col justify-center align-middle sm:gap-6 gap-16"
      id="work"
    >
      <div className="pb-4 sm:pb-2 sm:pl-4 text-3xl mt-10">Experience</div>
      <PlaceWorked
        link="https://thinkingmachin.es/"
        date="Jan 2024 - PRESENT"
        position="Software Engineer I"
        company="Thinking Machines Data Science"
        description="Working on client related projects"
        technologies={["React", "Java", "Bash", "GCP"]}
      />

      <PlaceWorked
        link="https://theguidon.com/1112/main/"
        date="2022 ─ 2024"
        position="Digital Development Staffer"
        company="The Guidon"
        description="Create interactive elements for the publication's articles, enhancing the online reading experience."
        technologies={["React", "Vite", "TailwindCSS"]}
      />
      <PlaceWorked
        link="https://thinkingmachin.es/"
        date="Jun 2023 ─ Aug 2023"
        position="Software Engineering Intern"
        company="Thinking Machines Data Science"
        description="Developed an internal tool for the company. The tool allows users to create and manage projects, and to track the progress of each project."
        technologies={[
          "React",
          "Typescript",
          "NextJS",
          "TailwindCSS",
          "shadcn/ui",
          "Prisma",
          "Docker",
        ]}
      />
      <PlaceWorked
        link="https://embiggengroup.com/"
        date="Apr 2022 ─ May 2023"
        position="Web Development Intern"
        company="Embiggen"
        description="Developed an expert consultation platform for the company. The platform allows users to book consultations with experts in various fields."
        technologies={[
          "Javascript",
          "Embedded Javascript (EJS)",
          "MongoDB",
          "Node.js",
          "ExpressJS",
        ]}
      />
      <PlaceWorked
        link="https://www.facebook.com/codingschoolph"
        date="Dec 2021 ─ Jun 2022"
        position="Coach"
        company="The Coding School"
        description="I taught kids aged 8-18 computer science concepts through Scratch. Additionally, I provided instruction in the field of game development."
        technologies={["Unity", "C#"]}
      />
    </section>
  );
};

const PlaceWorked = ({
  link,
  date,
  position,
  company,
  description,
  technologies,
}: {
  link: string;
  date: string;
  position: string;
  company: string;
  description: string;
  technologies: string[];
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="text-lg tracking-tight mb-4 flex sm:flex-row flex-col sm:p-6 sm:hover:shadow-xl rounded-xl relative group transition-colors duration-300 ease-in-out sm:hover:bg-primary sm:hover:text-background"
    >
      <ArrowUpRight
        size={18}
        className="absolute top-0 right-0 sm:mt-4 mt-2 sm:mr-4 mr-2 bg-secondary sm:group-hover:bg-primary sm:group-hover:text-secondary rounded"
      />
      <div className="sm:w-1/4 text-sm text-accent text-left">{date}</div>
      <div className="sm:w-3/4 text-xl sm:ml-5">
        {position} • {company}
        <div className="text-[15px] py-2">{description}</div>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <div
              key={"work" + index}
              className="sm:group-hover:bg-secondary sm:group-hover:text-primary bg-primary text-secondary px-3 py-1 rounded-2xl text-[12px]"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};
