import classNames from "classnames";
import { GalleryIn } from "@/types";
import GalleryCard from "./galleryCard";
import styles from "./galleryList.module.scss";

const GalleryList: React.FC<{ data: GalleryIn[] | [] }> = ({ data }) => (
  <div
    className={classNames(
      styles.galleryList,
      data.length === 1 && styles.singleItem
    )}
  >
    {data.map((gallery) => (
      <GalleryCard key={gallery._id} gallery={gallery} />
    ))}
  </div>
);

export default GalleryList;
