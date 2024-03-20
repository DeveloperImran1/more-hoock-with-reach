import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const users = useLoaderData();   //main.jsx file a loader er maddhome data set koreci. ar aikhane data k case korteci. Than oi data UI te show korteci.
    const {name, website} = users;
    return (
        <div>
            <h2>Details about user: {name} </h2>
            <p>Website: {website} </p>
        </div>
    );
};

export default UserDetails;