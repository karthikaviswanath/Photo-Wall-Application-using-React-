import Photo from "./Photo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function PhotoWall() {
  const posts = useSelector((state) => [...state.photo.posts]); //using spread operator because otherwise posts
  //will be an immutable array and sort cannot be used with that

  return (
    <>
      <Link to="/AddPhoto" className="addButton">
        Add Photo
      </Link>
      <div className="photoGrid">
        {posts
          .sort(function (x, y) {
            return y.id - x.id; //Sort posts array in descending order
          })
          .map((p) => (
            <Photo key={p.id} post={p} />
          ))}
      </div>
    </>
  );
}

export default PhotoWall;
