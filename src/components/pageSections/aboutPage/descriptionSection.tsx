import Button from "@/components/button";
import HeadingAndText from "@/components/headingAndText/headingAndText";
import Person from "@/components/person";
import { contactPageLink } from "@/constants";
import { AboutPageData } from "@/pages/om-oss";

const DescriptionSection: React.FC<{
  section: AboutPageData["descriptionSection"];
}> = ({ section }) => (
  <section>
    <div className="container mx-auto">
      {section?.text && (
        <HeadingAndText section={section.text} HeadingEl="h1" />
      )}
      <div className="max-w-[80rem] mx-auto flex justify-between flex-wrap gap-10 mt-10">
        {section?.person && <Person person={section.person} />}
        <Button
          href={contactPageLink.href}
          variant="cta"
          size="medium"
          className={!section?.person ? "ml-auto" : ""}
        >
          {contactPageLink.text}
        </Button>
      </div>
    </div>
  </section>
);

export default DescriptionSection;
