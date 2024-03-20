import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {title, id} = post;
    const postStyle = {
        border: "4px solid tomato",
        borderRadius: "10px",
        padding: "10px",
        
    }

    // Link er maddhome ba src er maddhome searchbar er url a last a link add kora jai. Temni navigate er maddhome link add korar jonno useNavigate() function k call kore variable er moddhe store kore nita hoi. Than oi variable k call korar somoi path ta bole dita hoi. 
    const navigate = useNavigate();
    const handleDetails =() =>{
        navigate(`${id}`);   // aikhane navigate(-1); dara bughai back link ba ager page a nia jabe.
    }
  
    return (
        <div style={postStyle}>
            <h2>Post ID: {id}</h2>
            <p>{title}</p>
            <Link to={`${id}`}><button>Post Details</button></Link>
           <button onClick={handleDetails}>See now</button>
        </div>
    );
};

export default Post;