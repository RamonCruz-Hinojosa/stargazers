const Chatposts = (props) => {
  return ( 
    <ul>
  {props.post.map((p) => (
    <li className="comments">
      {p.author}:{p.post}
    </li>
  ))}
</ul>
   );
}
 
export default Chatposts;
