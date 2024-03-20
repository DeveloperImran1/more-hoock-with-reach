import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    const postsStyle = {
        display: "grid",
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px'
    }
    return (
        <div style={postsStyle}>
          {
           posts.map(post => <Post post={post}></Post>)
          }
        </div>
    );
};

export default Posts;