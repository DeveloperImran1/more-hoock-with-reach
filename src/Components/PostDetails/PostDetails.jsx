import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const {id, body} = postDetails;

    const {postId} = useParams();   // ai usePerams method akta object nei. jar value hisabe paoa jai. oi post er id ta.
    console.log(postId);
    
    const navigate = useNavigate();
    const handleGoBack = ()=> {
        navigate(-1);  // aikhane -1 dila back button er moto kaj korbe. ager link a jabe.
    }
    return (
        <div>
            <h1>Post ID: {id} </h1>
            <p>{body}</p>

            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;