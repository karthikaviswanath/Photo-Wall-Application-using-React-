import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Photo from "./Photo";
import Comments from "./Comments";

function SinglePost() {
  const params = useParams();
  const postList = useSelector((state) => state.photo.posts);
  const post = postList.find((p) => p.id === Number(params.id));

  return (
    <div className="single-photo">
      <Photo post={post} />
      <Comments postId = {post.id} />
    </div>
  );
}

export default SinglePost;
