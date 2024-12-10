import { PostIn } from "@/types/post";
import ResponsiveImage from "../responsiveImage";
import styles from "./post.module.scss";
import { formatDate } from "@/utils/date";

type PostProps = {
  post: PostIn;
};

const Post: React.FC<PostProps> = ({ post }) => {
  if (!post) return null;

  const { image, title, content, _createdAt } = post;

  const formattedDate = formatDate(_createdAt);

  return (
    <article className={styles.post}>
      <p className="date">
        Publicerad den <time>{formattedDate}</time>
      </p>
      {image && (
        <figure>
          <ResponsiveImage image={image} />
        </figure>
      )}
      <div>
        {title && <h2>{title}</h2>}
        {content && <p>{content}</p>}
      </div>
    </article>
  );
};

export default Post;
