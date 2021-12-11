const Chatbox = (props) => {
  return (
    <form>
      <textarea
        placeholder="Your comments here. Remember, be nice!"
        maxLength="500"
        name="post"
        className="comment"
        value={props.text}
        onChange={props.handlePost}
        onKeyDown={props.submitPost}
      ></textarea>
    </form>
  );
};

export default Chatbox;
