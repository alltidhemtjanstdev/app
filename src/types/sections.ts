import { SanityImageIn } from "./cms";
import { PortableTextContent } from "./portableText";

export interface ImageAndTextIn {
  image?: SanityImageIn;
  text?: HeadingAndTextIn;
}

export interface HeadingAndTextIn {
  heading?: string;
  editedText?: PortableTextContent;
}
