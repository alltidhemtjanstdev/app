import { SanityImageIn } from "./cms";

export interface PostIn {
  _id: string;
  _createdAt: string;
  title: string;
  content: string;
  image?: SanityImageIn;
}
