import { GetStaticProps } from "next/types";
import { motion } from "framer-motion";

import { sanityClient } from "../../../sanity";
import { galleryListQuery } from "../../../sanity/queries";
import { fadeInAnimation } from "@/utils/animations";
import SeoData from "@/components/seoData";
import { GalleryIn } from "@/types";
import GalleryList from "@/components/gallery/galleryList";

export type GalleryListPageProps = {
  data: GalleryIn[] | [];
};

const GalleryListPage: React.FC<GalleryListPageProps> = ({ data }) => {
  return (
    <>
      <SeoData
        title="Bildgalleri"
        description="Alltid Hemtjänst och Service bildgalleri"
      />

      <motion.div {...fadeInAnimation} className="container mx-auto py-40">
        <h1 className="text-7xl">Bildgalleri</h1>

        {data.length > 0 ? (
          <GalleryList data={data} />
        ) : (
          <p>Det finns inga bilder att visa för närvarande.</p>
        )}
      </motion.div>
    </>
  );
};

export const getStaticProps: GetStaticProps<
  GalleryListPageProps
> = async () => {
  try {
    const data: GalleryIn[] = await sanityClient.fetch(galleryListQuery);

    return {
      props: {
        data: data.length > 0 ? data : [],
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);

    return {
      notFound: true,
    };
  }
};

export default GalleryListPage;
