import { projects } from "../../../portfolio.json"
import ImageSlider from "./ImageSlider"

// Swiper requires
import { Swiper, SwiperSlide } from "swiper/react"
import { Thumbs } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/thumbs';
import "../../styles.css"

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-14 my-4">

      {
        projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-4 p-4 rounded-[12px] bg-darkJungleGreen">

            <div className="flex flex-row gap-4">
            
              <ImageSlider project={project} />

            </div>
      
            <div className="flex flex-col gap-6 justify-between">
              <h3 className="text-jade text-3xl font-semibold">{project.title}</h3>
              <p className="text-white">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-4 text-white border-2 border-jade rounded-full">{tech}</span>
                ))}
              </div>
            </div>

          </div>
        ))
      }

    </div>
  );
}
