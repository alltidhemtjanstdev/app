import Link from "next/link";
import { GalleryIn } from "@/types";
import ResponsiveImage from "../responsiveImage";
import styles from "./galleryCard.module.scss";
import { formatDate } from "@/utils/date";

type GalleryProps = {
  gallery: GalleryIn;
};

const GalleryCard: React.FC<GalleryProps> = ({ gallery }) => {
  const firstImage = gallery.galleryImages?.[0];
  const formattedDate = formatDate(gallery._createdAt);

  return (
    <article className={styles.galleryCard}>
      <Link href={`/galleri/${gallery._id}`}>
        {firstImage && (
          <div className="relative aspect-video">
            <ResponsiveImage image={firstImage} priority loading="eager" />
          </div>
        )}
        <p className="date">
          Publicerad den <time>{formattedDate}</time>
        </p>
        <h3>{gallery.title}</h3>
      </Link>
    </article>
  );
};

export default GalleryCard;
