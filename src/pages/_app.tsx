import { useEffect, useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { AppDataProvider } from "@/context/AppDataContext";
import { inter } from "@/utils/fonts";

import "@/styles/main.scss";
import Layout from "@/components/layout/layout";
import { GalleryIn, PostIn, ContactInfoIn } from "@/types";
import { sanityClient } from "../../sanity";
import {
  contactInfoQuery,
  galleryListQuery,
  newsPageQuery,
} from "../../sanity/queries";

export default function App({ Component, pageProps }: AppProps) {
  const [galleryData, setGalleryData] = useState<GalleryIn[]>([]);
  const [newsData, setNewsData] = useState<PostIn[]>([]);
  const [contactInfoData, setContactData] = useState<ContactInfoIn>();

  useEffect(() => {
    async function fetchData() {
      const gallery = await sanityClient.fetch(galleryListQuery);
      const news = await sanityClient.fetch(newsPageQuery);
      const contactInfo = await sanityClient.fetch(contactInfoQuery);

      setGalleryData(gallery);
      setNewsData(news);
      setContactData(contactInfo);
    }
    fetchData();
  }, []);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <AppDataProvider
        galleryData={galleryData}
        newsData={newsData}
        contactInfoData={contactInfoData}
      >
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </AppDataProvider>
    </>
  );
}
