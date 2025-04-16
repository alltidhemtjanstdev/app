import { SanityImageObject } from "@sanity/image-url/lib/types/types";

export type CustomSanityImageSource = SanityImageObject & {
  _id: string;
  hotspot?: {
    x: number;
    y: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  altText?: string;
  caption?: string;
};
