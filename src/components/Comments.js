import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../redux/commentsSlice";

function Comments({ postId }) {
  const dispatch = useDispatch();
  const postComments = useSelector((state) => state.comment.postComments);

  const submitHandler = (event) => {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    dispatch(addComments({ comment: comment, postId: postId }));
    clearTextBox(event);
  };
  const clearTextBox = (event) => {
    event.target.elements.comment.value = "";
  };

  return (
    <div className="comment">
      {postComments.length > 0 &&
        postComments.map((c, index) => {
          if (c.postId === postId) {
            return <p key={index}>{c.comment}</p>;
          }
        })}
      <form className="comment-form" onSubmit={submitHandler}>
        <input type="text" placeholder="Add comment !" name="comment" />
        {/* <input type="submit" hidden /> */}
      </form>
    </div>
  );
}
export default Comments;
