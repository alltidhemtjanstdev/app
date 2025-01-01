import { GetStaticProps } from "next/types";
import { motion } from "framer-motion";
import { sanityClient } from "../../../sanity";
import { aboutPageQuery } from "../../../sanity/queries";
import {
  HeadingAndTextIn,
  PersonIn,
  ImageAndTextIn,
  PdfFileIn,
  TestimonialIn,
  CustomSanityImageSource,
} from "@/types";
import { fadeInAnimation } from "@/utils/animations";
import SeoData from "@/components/seoData";
import HeroImage from "@/components/pageSections/heroImage";
import DescriptionSection from "@/components/pageSections/aboutPage/descriptionSection";
import DocumentSection from "@/components/pageSections/aboutPage/documentSection";
import TestimonialSlider from "@/components/pageSections/aboutPage/testimonialSlider";
import ImageTextSection from "@/components/pageSections/imageTextSection";

export type AboutPageData = {
  _id: string;
  pageTitle?: string;
  image?: CustomSanityImageSource;
  descriptionSection?: {
    text?: HeadingAndTextIn;
    person?: PersonIn;
  };
  socialAgencyResultsSection?: ImageAndTextIn;
  socialAgencyDocumentsSection?: {
    document?: HeadingAndTextIn;
    files?: PdfFileIn[];
  };
  testimonialsSection?: {
    quoteList?: TestimonialIn[];
  };
};

export type AboutPageProps = {
  data: AboutPageData;
};

const AboutUsPage: React.FC<AboutPageProps> = ({ data }) => {
  if (!data) return null;

  const {
    pageTitle,
    image,
    descriptionSection,
    socialAgencyResultsSection,
    socialAgencyDocumentsSection,
    testimonialsSection,
  } = data;

  return (
    <>
      <SeoData
        title={pageTitle || "Om oss - Alltid Hemtjänst"}
        description="Om Alltid Hemtjänst och Service"
      />

      <motion.div {...fadeInAnimation}>
        {image && <HeroImage image={image} />}

        {descriptionSection && (
          <DescriptionSection section={descriptionSection} />
        )}

        {socialAgencyResultsSection && (
          <ImageTextSection
            section={socialAgencyResultsSection}
            layout="image-start"
            bgColor="accent-light"
          />
        )}

        {socialAgencyDocumentsSection && (
          <DocumentSection section={socialAgencyDocumentsSection} />
        )}

        {testimonialsSection?.quoteList && (
          <TestimonialSlider quotes={testimonialsSection.quoteList} />
        )}
      </motion.div>
    </>
  );
};

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  try {
    const data = await sanityClient.fetch(aboutPageQuery);

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

export default AboutUsPage;
