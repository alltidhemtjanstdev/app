import { GetStaticProps } from "next/types";
import { motion } from "framer-motion";

import { sanityClient } from "../../../sanity";
import { homeCarePageQuery } from "../../../sanity/queries";
import { ImageAndTextIn, HeadingAndTextIn, SanityImageIn } from "@/types";
import { fadeInAnimation } from "@/utils/animations";
import SeoData from "@/components/seoData";
import HeroImage from "@/components/pageSections/heroImage";
import TextSection from "@/components/pageSections/textSection";
import ImageTextSection from "@/components/pageSections/imageTextSection";

export type HomeCarePageData = {
  _id: string;
  pageTitle?: string;
  image?: SanityImageIn;
  personalizedCareSection?: ImageAndTextIn;
  descriptionSection?: HeadingAndTextIn;
  servicesSection?: HeadingAndTextIn;
  customerSection?: HeadingAndTextIn;
};

export type HomeCarePageProps = {
  data: HomeCarePageData;
};

const HomeCarePage: React.FC<HomeCarePageProps> = ({ data }) => {
  if (!data) return null;

  const {
    pageTitle,
    image,
    personalizedCareSection,
    descriptionSection,
    servicesSection,
    customerSection,
  } = data;

  return (
    <>
      <SeoData title={pageTitle || "Hemtjänst"} description="Hemtjänst" />

      <motion.div {...fadeInAnimation}>
        {image && <HeroImage image={image} />}
        {descriptionSection && (
          <TextSection section={descriptionSection} HeadingEl="h2" />
        )}
        {personalizedCareSection && (
          <ImageTextSection
            section={personalizedCareSection}
            layout="image-start"
            bgColor="accent-light"
          />
        )}
        {servicesSection && (
          <TextSection section={servicesSection} HeadingEl="h2" />
        )}
        {customerSection && (
          <TextSection
            section={customerSection}
            background="light"
            HeadingEl="h2"
            contactBtn
          />
        )}
      </motion.div>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeCarePageProps> = async () => {
  try {
    const data = await sanityClient.fetch(homeCarePageQuery);

    if (!data || Object.keys(data).length === 0) {
      return { notFound: true };
    }

    return {
      props: { data },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return { notFound: true };
  }
};

export default HomeCarePage;
