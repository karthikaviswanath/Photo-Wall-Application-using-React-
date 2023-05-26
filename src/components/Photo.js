import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deletePost } from "../photoSlice";

function Photo({ post }) {
  const dispatch = useDispatch();
  const removePhotoHandler = () => {
    console.log(post);
    dispatch(deletePost(post));
  };

  return (
    <>
      <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description} />
        <figcaption>
          <p> {post.description} </p>
        </figcaption>
        <div className="button-container">
          <button onClick={removePhotoHandler}>Remove</button>
        </div>
      </figure>
    </>
  );
}

export default Photo;

Photo.propTypes = {
  post: PropTypes.object.isRequired,
};
