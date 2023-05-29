import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/photoSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Photo({ post }) {
  const dispatch = useDispatch();
  const removePhotoHandler = () => {
    console.log(post);
    dispatch(deletePost(post));
  };

  const postComments = useSelector((state) => state.comment.postComments);
  const count =
    postComments.length > 0
      ? postComments.filter((p) => p.postId === post.id).length
      : 0;

  return (
    <>
      <figure className="figure">
        <Link to={`/SinglePost/${post.id}`}>
          <img className="photo" src={post.imageLink} alt={post.description} />
        </Link>
        <figcaption>
          <p> {post.description} </p>
        </figcaption>
        <div className="button-container">
          <button onClick={removePhotoHandler}>Remove</button>
          <Link className="button" to={`/SinglePost/${post.id}`}>
            <div className="comment-count">
              <div className="speech-bubble"></div>
              {count}
            </div>
          </Link>
        </div>
      </figure>
    </>
  );
}

export default Photo;

Photo.propTypes = {
  post: PropTypes.object.isRequired,
};
