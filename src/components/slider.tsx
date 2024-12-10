import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import * as Modules from "swiper/modules";
import "swiper/css/bundle";

export enum SwiperModules {
  A11y = "A11y",
  Keyboard = "Keyboard",
  Navigation = "Navigation",
}

type SliderProps = {
  slides: ReactNode[];
  params: SwiperOptions;
  sliderModules: SwiperModules[];
  className?: string;
};

const Slider: React.FC<SliderProps> = ({
  slides,
  params,
  className,
  sliderModules,
}) => {
  const SliderModules = sliderModules.map((m) => Modules[m]);
  const sliderParams = { ...params, modules: SliderModules };

  return (
    <>
      <Swiper {...sliderParams} className={className}>
        {slides.map((slide, index) => (
          <SwiperSlide key={`slider_${index}`}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
