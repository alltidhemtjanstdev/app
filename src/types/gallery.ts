import { CustomSanityImageSource } from "./cms";
export interface GalleryIn {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  galleryImages?: CustomSanityImageSource[];
}
