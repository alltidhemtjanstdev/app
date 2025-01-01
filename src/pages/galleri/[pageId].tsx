import { GetServerSideProps } from "next";
import { GalleryIn } from "@/types";
import { sanityClient } from "../../../sanity";
import { galleryByIdQuery } from "../../../sanity/queries";
import ResponsiveImage from "@/components/responsiveImage";
import CarouselModal from "@/components/gallery/CarouselModal";
import { useState } from "react";

export type GalleryPageProps = {
  data: GalleryIn | null;
};

const GalleryPage: React.FC<GalleryPageProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!data) {
    return (
      <article className="container gallery">
        <h1>Galleri</h1>
        <p className="gallery__error">
          Vi kunde tyvärr inte hitta det här galleriet. Försök igen senare.
        </p>
      </article>
    );
  }

  const { title, description, galleryImages } = data;

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <article className="container gallery">
      {title && <h1>{title}</h1>}
      {description && <p className="gallery__description">{description}</p>}
      {galleryImages && galleryImages.length > 0 && (
        <div className="gallery__images">
          {galleryImages.map((image, index) => {
            return (
              <button
                key={image._id}
                onClick={() => openModal(index)}
                className="gallery__image-wrapper"
              >
                <ResponsiveImage image={image} loading="lazy" />
                <span className="sr-only">Visa bild {index + 1}</span>
              </button>
            );
          })}
          <CarouselModal
            title={title}
            images={galleryImages}
            initialIndex={currentIndex}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        </div>
      )}
    </article>
  );
};

export const getServerSideProps: GetServerSideProps<GalleryPageProps> = async (
  ctx
) => {
  const { pageId } = ctx.params || {};

  if (!pageId) {
    return { notFound: true };
  }

  try {
    const data = await sanityClient.fetch(galleryByIdQuery, { pageId });

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching gallery data:", error);

    return {
      notFound: true,
    };
  }
};

export default GalleryPage;
