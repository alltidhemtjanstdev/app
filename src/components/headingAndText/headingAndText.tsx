import { HeadingAndTextIn } from "@/types";
import { contactPageLink } from "@/constants";
import { RenderPortableText } from "@/utils/text-utils";
import Button from "../button";

type HeadingAndTextProps = {
  section: HeadingAndTextIn;
  HeadingEl: "h1" | "h2" | "h3";
  contactBtn?: boolean;
};

const HeadingAndText: React.FC<HeadingAndTextProps> = ({
  section,
  HeadingEl,
  contactBtn,
}) => {
  if (!section) return null;

  const { heading, editedText } = section;

  return (
    <div className="w-fit mx-auto">
      {heading && <HeadingEl>{heading}</HeadingEl>}
      {editedText && <RenderPortableText text={editedText} />}
      {contactBtn && (
        <Button
          href={contactPageLink.href}
          variant="cta"
          size="medium"
          className="ml-auto mt-6"
        >
          {contactPageLink.text}
        </Button>
      )}
    </div>
  );
};

export default HeadingAndText;
