import { technologies } from "@techs"

// Swiper requires
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../../styles.css'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function SkillsSlider() {
  return(
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full"
      >
        {
          technologies.map((tech, index) => (
            <SwiperSlide className="px-12 pb-12 pt-10 rounded-[12px] bg-darkJungleGreen" key={index}>
              <div className="flex flex-col justify-center items-center gap-2">
                <img src={tech.svg} alt={`Ícono de ${tech.name}`} />
                <h4 className="text-white font-medium">{tech.name}</h4>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
  )
}