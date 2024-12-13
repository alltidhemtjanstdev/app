import ResponsiveImage from "@/components/responsiveImage";
import { SanityImageIn } from "@/types";

const HeroImage: React.FC<{ image: SanityImageIn }> = ({ image }) => (
  <div className="relative aspect-video w-full max-h-[524px]">
    <ResponsiveImage image={image} />
  </div>
);

export default HeroImage;
