import Image from "next/image";
import { urlFor } from "../../sanity";
import { SanityImageIn } from "@/types";

const ResponsiveImage: React.FC<{
  image: SanityImageIn;
  priority?: boolean;
  loading?: "eager" | "lazy";
  className?: string;
  sizes?: string;
}> = ({
  image,
  priority = false,
  className = "object-cover",
  sizes = "(max-width: 768px) 100vw, 50vw",
  loading,
}) => {
  if (!image?.asset?.metadata?.dimensions) return null;

  const { width, height } = image.asset.metadata.dimensions;
  const imageUrl = urlFor(image).width(width).height(height).quality(75).url();

  return (
    <Image
      src={imageUrl as string}
      alt={image.altText || ""}
      fill
      sizes={sizes}
      priority={priority}
      loading={loading}
      className={className}
    />
  );
};

export default ResponsiveImage;
