import { GetServerSideProps } from "next";
import { GalleryIn } from "@/types";
import { sanityClient } from "../../../sanity";
import { galleryByIdQuery } from "../../../sanity/queries";
import GalleryImageModal from "@/components/gallery/galleryImageModal";

export type GalleryPageProps = {
  data: GalleryIn | null;
};

const GalleryPage: React.FC<GalleryPageProps> = ({ data }) => {
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

  return (
    <article className="container gallery">
      {title && <h1>{title}</h1>}
      {description && <p className="gallery__description">{description}</p>}
      {galleryImages && galleryImages.length > 0 && (
        <div className="gallery__images">
          {galleryImages.map((image) => {
            return <GalleryImageModal key={image.asset._id} image={image} />;
          })}
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
