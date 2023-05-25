import Photo from "./Photo";
import PropTypes from "prop-types";

function PhotoWall({ posts, removePost }) {
  return (
    <div className="photoGrid">
      {posts.map((p, index) => (
        <Photo key={index} post={p} onRemovePost={removePost} />
      ))}
    </div>
  );
}

export default PhotoWall;

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  removePost: PropTypes.func.isRequired,
};
