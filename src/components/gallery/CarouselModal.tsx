import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { X } from "react-feather";
import ResponsiveImage from "../responsiveImage";
import { CustomSanityImageSource } from "@/types";

type CarouselModalProps = {
  title: string;
  images: CustomSanityImageSource[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
};

const CarouselModal: React.FC<CarouselModalProps> = ({
  title,
  images,
  initialIndex,
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-[#333]" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="relative w-full h-full">
          <button
            onClick={onClose}
            aria-label="Stäng bild"
            className="absolute top-4 right-4 p-2 rounded-full text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <X className="w-10 h-10" />
            <span className="sr-only">Stäng bild</span>
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            initialSlide={initialIndex}
            className="h-[85%] my-20 carousel-modal"
          >
            {images.map((image) => (
              <SwiperSlide key={image._id}>
                {title && (
                  <h1 className="text-white mx-auto text-center">{title}</h1>
                )}
                <div className="relative w-full h-full object-contain">
                  <ResponsiveImage
                    image={image}
                    loading="lazy"
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default CarouselModal;
