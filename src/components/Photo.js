import PropTypes from "prop-types";

function Photo({ post, onRemovePost }) {

  const removePhotoHandler = () =>{
    onRemovePost(post);
  }

  return (
    <>
      <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description} />
        <figcaption>
          <p> {post.description} </p>
        </figcaption>
        <div className="button-container">
          <button onClick = {removePhotoHandler}>Remove</button>
        </div>
      </figure>
    </>
  );
}

export default Photo;

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  onRemovePost: PropTypes.func.isRequired,
};
