import ImageAndText from "@/components/imageAndText/imageAndText";
import { ImageAndTextIn } from "@/types";

const ImageTextSection: React.FC<{
  section: ImageAndTextIn;
  layout: "image-start" | "image-end";
  button?: { href: string; text: string };
  bgColor?: "accent-light" | "white";
}> = ({ section, button, layout, bgColor = "white" }) => (
  <section className={`bg-${bgColor}`}>
    <div className="container mx-auto">
      <ImageAndText imageAndText={section} layout={layout} ctaButton={button} />
    </div>
  </section>
);

export default ImageTextSection;
