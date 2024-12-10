/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: `/images/${
          process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "jp5u5q8y"
        }/**`,
      },
    ],
  },
};

export default nextConfig;
