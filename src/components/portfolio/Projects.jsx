import { projects } from "@cv";
import { useState } from "react";

// Swiper requires
import "swiper/css";
import "swiper/css/pagination";

export default function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);

  const project = projects[projectIndex];

  return (
    <div className="flex flex-col gap-4 my-4 p-4 rounded-[12px] bg-darkJungleGreen">
      <div className="flex flex-col gap-4">

        <div className="relative">
          {project.url && (
            <a className="absolute right-0 w-12 bg-jade opacity-50 hover:opacity-100 duration-200" href={project.url}>
              <img src="/icons/link-48.svg" alt={`Link al proyecto ${project.title}`} />
            </a>
          )}
          <img className="rounded-[8px]" src={project.images[0]} alt={`Imágen del proyecto ${project.title}`} />
        </div>

        <div className="flex gap-2 lg:gap-4">
          {
            projects.map((project, index) => (
              <button className={`${projectIndex == index && "border-2 border-jade"} aspect-video rounded-[8px]`} key={index} onClick={() => setProjectIndex(index)}>
                <img className="rounded-[6px]" src={project.images[0]} alt={`Miniatura principal del proyecto ${project.title}`} />
              </button>
            ))
          }
        </div>

      </div>

      <h3 className="text-jade text-3xl font-medium">{project.title}</h3>
      <p className="text-white">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span className="px-4 text-white border-2 border-jade rounded-full" key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}
