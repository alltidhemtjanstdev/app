import { GetStaticProps } from "next/types";
import { motion } from "framer-motion";

import { sanityClient } from "../../../sanity";
import { workPageQuery } from "../../../sanity/queries";
import { SanityImageIn, HeadingAndTextIn } from "@/types";
import { fadeInAnimation } from "@/utils/animations";
import SeoData from "@/components/seoData";
import HeroImage from "@/components/pageSections/heroImage";
import TextSection from "@/components/pageSections/textSection";

export type WorkPageData = {
  _id: string;
  pageTitle: string;
  image: SanityImageIn;
  descriptionSection: HeadingAndTextIn;
};

export type WorkPageProps = {
  data: WorkPageData;
};

const WorkPage: React.FC<WorkPageProps> = ({ data }) => {
  if (!data) return null;

  const { pageTitle, image, descriptionSection } = data;

  return (
    <>
      <SeoData
        title={pageTitle || "Jobba hos oss"}
        description="Jobba hos Alltid Hemtjänst"
      />

      <motion.div {...fadeInAnimation}>
        {image && <HeroImage image={image} />}

        <TextSection section={descriptionSection} HeadingEl="h1" contactBtn />
      </motion.div>
    </>
  );
};

export const getStaticProps: GetStaticProps<WorkPageProps> = async () => {
  try {
    const data = await sanityClient.fetch(workPageQuery);

    if (!data || Object.keys(data).length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data,
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

export default WorkPage;
