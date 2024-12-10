import { GetStaticProps } from "next/types";
import { motion } from "framer-motion";
import { sanityClient } from "../../sanity";
import { homePageQuery } from "../../sanity/queries";
import { ImageAndTextIn, HeadingAndTextIn, TestimonialIn } from "@/types";
import { fadeInAnimation } from "@/utils/animations";
import { documentLink, homecarePageLink } from "@/constants";
import SeoData from "@/components/seoData";
import ImageTextSection from "@/components/pageSections/imageTextSection";
import HeroSection from "@/components/pageSections/homePage/heroSection";
import SectionTrio, {
  SectionTrioProps,
} from "@/components/pageSections/homePage/sectionTrio";
import TestimonialSlider from "@/components/pageSections/aboutPage/testimonialSlider";
import TextSection from "@/components/pageSections/textSection";

export type HomePageData = {
  _id: string;
  pageTitle: string;
  mainHeadingSection?: string;
  strengthsSection?: SectionTrioProps;
  socialAgencyResultsSection?: ImageAndTextIn;
  locationsSection?: ImageAndTextIn;
  servicesSection?: ImageAndTextIn;
  customerSection?: HeadingAndTextIn;
  testimonialsSection?: {
    quoteList?: TestimonialIn[];
  };
};

export type HomePageProps = {
  data: HomePageData;
};

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  if (!data) return null;

  const {
    pageTitle,
    mainHeadingSection,
    strengthsSection,
    socialAgencyResultsSection,
    locationsSection,
    servicesSection,
    customerSection,
    testimonialsSection,
  } = data;

  return (
    <>
      <SeoData
        title={pageTitle || "Hem - Alltid Hemtjänst"}
        description="Välkommen till Alltid Hemtjänst och Service"
      />

      <motion.div {...fadeInAnimation}>
        {mainHeadingSection && <HeroSection title={mainHeadingSection} />}
        {strengthsSection && <SectionTrio section={strengthsSection} />}
        {servicesSection && (
          <ImageTextSection
            section={servicesSection}
            layout="image-start"
            bgColor="accent-light"
          />
        )}
        {locationsSection && (
          <ImageTextSection
            section={locationsSection}
            button={homecarePageLink}
            layout="image-end"
          />
        )}
        {socialAgencyResultsSection && (
          <ImageTextSection
            section={socialAgencyResultsSection}
            button={documentLink}
            layout="image-start"
            bgColor="accent-light"
          />
        )}
        {customerSection && (
          <TextSection section={customerSection} HeadingEl="h2" contactBtn />
        )}
        {testimonialsSection?.quoteList && (
          <TestimonialSlider quotes={testimonialsSection.quoteList} />
        )}
      </motion.div>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  try {
    const data = await sanityClient.fetch(homePageQuery);

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

export default HomePage;
