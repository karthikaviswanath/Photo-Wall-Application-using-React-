import Photo from "./Photo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Title from "./Title";

function PhotoWall() {
  const posts = useSelector((state) => [...state.photoReducer.value]); //using spread operator because otherwise posts
  //will be an immutable array and sort cannot be used with that
  return (
    <>
      <Title />
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
