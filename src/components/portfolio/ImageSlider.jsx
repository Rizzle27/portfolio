import { useState } from "react"

export default function ImageSlider({ project }) {
  const [mainImage, setMainImage] = useState(0)

  return(
    <div className="flex flex-col gap-4">
      <div className="relative">
        {
          project.url && (
            <a className="absolute right-0 w-[10%] sm:w-[5%] p-1 rounded-tr-[8px] rounded-bl-[8px] bg-jade opacity-50 hover:opacity-100 duration-200" href={project.url} target="_blank">
              <img src="/icons/link-48.svg" alt="" />
            </a>
          ) 
        }
        <img className="aspect-video rounded-[8px]" src={project.images[mainImage]} alt={`Caputra del proyecto ${project.title}`} />
      </div>

      <div className="flex gap-4 h-10 lg:h-14">
        {
          project.images.map((image, index) => (
            <button key={index} className={`${index == mainImage && "border-2 border-jade rounded-[8px]"} relative aspect-video`} onClick={() => setMainImage(index)}>
              {
                index == mainImage && (
                  <div className="absolute flex justify-center items-center bg-black opacity-75 rounded-[6px] w-full h-full">
                    <span className="text-white text-xl">{index + 1}</span>
                  </div>
                )
              }
              <img className="object-cover w-full h-full rounded-[6px]" src={image} alt={`Miniatura ${index + 1} del proyecto ${project.title}`}/>
            </button>
          ))
        }
      </div>
    </div>
  )
}