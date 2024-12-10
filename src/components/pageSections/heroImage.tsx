import ResponsiveImage from "@/components/responsiveImage";
import { SanityImageIn } from "@/types";

const HeroImage: React.FC<{ image: SanityImageIn }> = ({ image }) => (
  <section className="relative aspect-video w-full max-h-[524px]">
    <ResponsiveImage image={image} />
  </section>
);

export default HeroImage;
