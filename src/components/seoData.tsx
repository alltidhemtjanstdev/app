import Head from "next/head";

type SeoDataProps = {
  path?: string;
  title?: string;
  description?: string;
  canonical?: string;
  noIndex?: boolean;
};

const baseUrl = "https://www.alltidhemtjanst.se";
const FALLBACK_IMAGE = `${baseUrl}/images/logo.png`;

const SeoData: React.FC<SeoDataProps> = ({
  path,
  title = "Alltid Hemtjänst och Service AB",
  description = "Alltid Hemtjänst och Service AB",
  canonical,
  noIndex,
}) => {
  const fullUrl = path ? `${baseUrl}${path}` : baseUrl;

  return (
    <>
      <Head key="page-title">
        <title>{title}</title>
      </Head>
      <Head key="seo-data">
        <meta name="keywords" content="hemtjänst, vård, omsorg" />

        {title && <meta property="og:title" content={title} />}

        {description && (
          <>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
          </>
        )}

        <meta property="og:image" content={FALLBACK_IMAGE} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="686" />
        <meta property="og:image:height" content="386" />

        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={FALLBACK_IMAGE} />

        {!noIndex && (
          <link
            rel="canonical"
            href={canonical ? baseUrl + canonical : fullUrl}
          />
        )}

        {noIndex && <meta name="robots" content="noindex" />}
      </Head>
    </>
  );
};

export default SeoData;
