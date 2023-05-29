import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/photoSlice";

function AddPhoto() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    const post = {
      id: Number(new Date()),
      description: event.target.elements.description.value,
      imageLink: event.target.elements.url.value,
    };
    console.log(post);
    dispatch(createPost(post));
    navigate("..");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form">
          <input
            type="text"
            placeholder="Enter Image URL"
            name="url"
            required
          ></input>
          <input
            type="text"
            placeholder="Enter Description"
            name="description"
            required
          ></input>
          <button> Post </button>
        </div>
      </form>
    </>
  );
}

export default AddPhoto;
