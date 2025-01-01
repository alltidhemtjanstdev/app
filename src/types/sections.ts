import { CustomSanityImageSource } from "./cms";
import { PortableTextContent } from "./portableText";

export interface ImageAndTextIn {
  image?: CustomSanityImageSource;
  text?: HeadingAndTextIn;
}

export interface HeadingAndTextIn {
  heading?: string;
  editedText?: PortableTextContent;
}
