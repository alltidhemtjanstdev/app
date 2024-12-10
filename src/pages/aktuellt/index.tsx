import { GetStaticProps } from "next/types";
import { motion } from "framer-motion";

import { sanityClient } from "../../../sanity";
import { newsPageQuery } from "../../../sanity/queries";
import { fadeInAnimation } from "@/utils/animations";
import SeoData from "@/components/seoData";
import { PostIn } from "@/types/post";
import PostList from "@/components/post/postList";

interface NewsPageProps {
  data: PostIn[] | [];
}

const NewsPage: React.FC<NewsPageProps> = ({ data }) => {
  return (
    <>
      <SeoData
        title="Aktuellt"
        description={`Aktuella nyheter och uppdateringar. ${
          data.length > 0
            ? `${data.length} inlägg tillgängliga.`
            : "Inga inlägg just nu."
        }`}
      />

      <motion.div {...fadeInAnimation} className="container mx-auto py-40">
        {data.length > 0 ? (
          <div className="w-fit mx-auto">
            <h1 className="text-7xl">Aktuellt</h1>
            <PostList posts={data} />
          </div>
        ) : (
          <>
            <h1 className="text-7xl">Aktuellt</h1>
            <p>Det finns inga inlägg att visa för närvarande.</p>
          </>
        )}
      </motion.div>
    </>
  );
};

export const getStaticProps: GetStaticProps<NewsPageProps> = async () => {
  try {
    const data: PostIn[] = await sanityClient.fetch(newsPageQuery);

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

export default NewsPage;
