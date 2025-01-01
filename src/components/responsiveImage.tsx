import Image from "next/image";
import { urlFor } from "../../sanity";
import { CustomSanityImageSource } from "@/types/cms";

const ResponsiveImage: React.FC<{
  image: CustomSanityImageSource;
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
  const hotspotX = image.hotspot?.x ?? 0.5;
  const hotspotY = image.hotspot?.y ?? 0.5;

  const imageUrl = urlFor(image)
    .auto("format")
    .fit("crop")
    .focalPoint(hotspotX || 0.5, hotspotY || 0.5)
    .quality(75)
    .url();

  return (
    <Image
      src={imageUrl as string}
      alt={image.altText || ""}
      fill
      sizes={sizes}
      priority={priority}
      loading={loading}
      className={className}
      objectPosition={`${hotspotX * 100 || 50}% ${hotspotY * 100 || 50}%`}
    />
  );
};

export default ResponsiveImage;
