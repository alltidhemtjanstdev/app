import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { X } from "react-feather";
import ResponsiveImage from "../responsiveImage";
import { CustomSanityImageSource } from "@/types";

export type ModalProps = {
  image: CustomSanityImageSource;
};

const GalleryImageModal: React.FC<ModalProps> = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Visa bild"
        className="gallery__image-wrapper"
      >
        <ResponsiveImage image={image} loading="lazy" />
        <span className="sr-only">Visa bild</span>
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/80" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="h-[85%] w-full">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Stäng bild"
              className="absolute top-4 right-4 p-2 rounded-full text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <X className="w-10 h-10" />
              <span className="sr-only">Stäng bild</span>
            </button>
            <div className="relative object-contain w-full h-full">
              <ResponsiveImage
                image={image}
                loading="lazy"
                className="object-contain"
              />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default GalleryImageModal;
