import { PostIn } from "@/types";
import Post from "./post";

const PostList: React.FC<{ posts: PostIn[] }> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <Post key={post._id} post={post} />
    ))}
  </>
);

export default PostList;
