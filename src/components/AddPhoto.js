import { useNavigate } from "react-router-dom";
import Title from "./Title";

function AddPhoto({ onAddPhoto }) {
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();

    const post = {
      id: Number(new Date()),
      description: event.target.elements.description.value,
      imageLink: event.target.elements.url.value,
    };
    console.log(post);
    onAddPhoto(post);
    navigate("..");
  };
  return (
    <>
      <Title></Title>
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
