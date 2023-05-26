import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PhotoWall({ posts, removePost }) {
  const onAddPostHandler = () => {
    console.log("add button clicked");
  };

  return (
    <>
      <div>
        <Link to="/AddPhoto" className="addButton" onClick={onAddPostHandler}>
          Add Photo
        </Link>
      </div>
      <div className="photoGrid">
        {posts
          .sort(function (x, y) {
            return y.id - x.id; //Sort posts array in descending order
          })
          .map((p) => (
            <Photo key={p.id} post={p} onRemovePost={removePost} />
          ))}
      </div>
    </>
  );
}

export default PhotoWall;

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  removePost: PropTypes.func.isRequired,
};
