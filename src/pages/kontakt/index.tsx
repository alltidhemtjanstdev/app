import { GetStaticProps } from "next/types";
import { motion } from "framer-motion";

import { sanityClient } from "../../../sanity";
import { contactPageQuery } from "../../../sanity/queries";
import { HeadingAndTextIn, SanityImageIn } from "@/types";
import { fadeInAnimation } from "@/utils/animations";
import SeoData from "@/components/seoData";
import TextSection from "@/components/pageSections/textSection";
import HeroImage from "@/components/pageSections/heroImage";
import { useContactInfo } from "@/hooks/useContactInfo";

export type ContactPageData = {
  _id: string;
  pageTitle?: string;
  image?: SanityImageIn;
  descriptionSection?: HeadingAndTextIn;
};

export type ContactPageProps = {
  data: ContactPageData;
};

const ContactPage: React.FC<ContactPageProps> = ({ data }) => {
  const {
    address,
    street,
    postNumber,
    municipality,
    phone,
    email,
    days,
    time,
  } = useContactInfo();

  const { pageTitle, image, descriptionSection } = data;

  return (
    <>
      <SeoData
        title={pageTitle || "Kontakt - Alltid Hemtjänst"}
        description="Kontakta Alltid Hemtjänst och Service"
      />

      <motion.div {...fadeInAnimation}>
        {image && <HeroImage image={image} />}
        {descriptionSection && (
          <TextSection
            section={descriptionSection}
            HeadingEl="h1"
            background="light"
          />
        )}
        <section className="container mx-auto">
          <div className="infoSection">
            <div className="item">
              <h2>Kontaktuppgifter</h2>

              <div className="flex flex-col">
                <strong>Telefon:</strong>
                <a href={`tel:${phone}`}>{phone}</a>
              </div>

              <div className="flex flex-col">
                <strong>E-post:</strong>
                <a href={`mailto:${email}`}>{email}</a>
              </div>

              <div>
                <strong>Adress:</strong>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <address className="flex flex-col">
                    <span>{street}</span>
                    <span>
                      {postNumber} {municipality}
                    </span>
                  </address>
                </a>
              </div>

              {days && time && (
                <div className="flex flex-col">
                  <strong>Öppettider:</strong>
                  <span>{days}</span>
                  <span>{time}</span>
                </div>
              )}
            </div>

            <div className="item">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  address
                )}&output=embed`}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export const getStaticProps: GetStaticProps<ContactPageProps> = async () => {
  try {
    const data = await sanityClient.fetch(contactPageQuery);

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

export default ContactPage;
