import ResponsiveImage from "@/components/responsiveImage";
import { CustomSanityImageSource } from "@/types";

const HeroImage: React.FC<{ image: CustomSanityImageSource }> = ({ image }) => (
  <div className="relative aspect-video w-full max-h-[524px]">
    <ResponsiveImage image={image} />
  </div>
);

export default HeroImage;
