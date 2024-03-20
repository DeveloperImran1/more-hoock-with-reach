import { Link } from "react-router-dom";

const User = ({user}) => {
    const {name, email, phone, id} = user;
    const userStyle = {
        border: "4px solid tomato",
        borderRadius: "10px",
        padding: "10px"
    }
    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            {/* Link tag ba componet er maddhome src er moto browser er url a extra word gulo set kore. */}
            <Link to={`/user/${id}`}>Show Details</Link>  
            <Link to={`/user/${id}`}><button>Click me</button></Link>
        </div>
    );
};

export default User;