import Photo from "./Photo";

function PhotoWall({ posts }) {
  return (
    <div className="photoGrid">
      {posts.map((p,index) => (
        <Photo key={index} post={p} />
      ))}
    </div>
  );
}

export default PhotoWall;
