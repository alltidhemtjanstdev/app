import Link from "next/link";
import { GetStaticProps } from "next/types";
import { sanityClient } from "../../sanity";
import { galleryListQuery } from "../../sanity/queries";
import { GalleryIn } from "@/types";
import {
  accessibilityLink,
  cookiesLink,
  GALLERY_PAGE_PATH,
  navLinks,
} from "@/constants";
import SeoData from "@/components/seoData";

type SidkartaPageProps = {
  data: GalleryIn[];
};

const SidkartaPage: React.FC<SidkartaPageProps> = ({ data }) => {
  return (
    <>
      <SeoData title={"Sidkarta - Alltid Hemtjänst"} />
      <section className="container mx-auto">
        <h1>Sidkarta</h1>

        <nav>
          <ul className="space-y-4 list-disc ml-5">
            {navLinks.map((link) => (
              <li key={link.href} className="space-y-4">
                <Link href={link.href} className="link">
                  {link.text}
                </Link>
                {data.length > 0 && link.href.includes("/galleri") && (
                  <ul className="space-y-4 list-disc ml-10">
                    {data.map((page) => (
                      <li key={page._id}>
                        <Link
                          href={`${GALLERY_PAGE_PATH}/${page._id}`}
                          className="link"
                        >
                          {page.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link href={cookiesLink.href} className="link">
                {cookiesLink.text}
              </Link>
            </li>
            <li>
              <Link href={accessibilityLink.href} className="link">
                {accessibilityLink.text}
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data: GalleryIn[] = await sanityClient.fetch(galleryListQuery);

  return {
    props: {
      data: data.length > 0 ? data : [],
    },
    revalidate: 10,
  };
};

export default SidkartaPage;
