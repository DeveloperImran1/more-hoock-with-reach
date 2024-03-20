import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    // aikahne data fetch korte partam . kinto aikhane korle website reload hower somoi 1st time a aikhane data fetch kore load hoia thakto. Kino main.js file loader er maddhome korai jokno user button a clik hoia ai page a asbe. sudho tokhoni data fetch kore load hobe.
    const users = useLoaderData();
    console.log(users);
    const usersStyle = {
        
        display: "grid",
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px'
    }
    return (

        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Fantastic and vodro Users</p>

            <div style={usersStyle}>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;