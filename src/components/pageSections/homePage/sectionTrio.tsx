import { ImageAndTextIn } from "@/types";
import HeadingAndText from "@/components/headingAndText/headingAndText";
import ResponsiveImage from "@/components/responsiveImage";

const SectionItem: React.FC<{ section: ImageAndTextIn }> = ({ section }) => (
  <div className="section-2__item">
    {section.image && (
      <div className="w-2/5 mx-auto relative aspect-[1] rounded-full overflow-hidden">
        <ResponsiveImage image={section.image} />
      </div>
    )}
    {section.text && <HeadingAndText section={section.text} HeadingEl="h2" />}
  </div>
);

export type SectionTrioProps = {
  firstSection?: ImageAndTextIn;
  secondSection?: ImageAndTextIn;
  thirdSection?: ImageAndTextIn;
};

const SectionTrio: React.FC<{ section: SectionTrioProps }> = ({ section }) => (
  <section className="container mx-auto">
    <div className="section-2">
      {section.firstSection && <SectionItem section={section.firstSection} />}
      {section.secondSection && <SectionItem section={section.secondSection} />}
      {section.thirdSection && <SectionItem section={section.thirdSection} />}
    </div>
  </section>
);

export default SectionTrio;
