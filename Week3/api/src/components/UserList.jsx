import  { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(3);

    async function fetchUser() {
        
        // const res2 = await fetch("https://jsonplaceholder.typicode.com/users");
        
        // const data = await res2.json();

        try{
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log(res);

            setUsers(res.data);
        }
        catch(err){
          console.log(err);
        }
    }
    useEffect(() => {
        fetchUser()
    }, []);
    return (
        <div>
            <h1>Profiles</h1>
            {users.slice(0, show).map((user, index) => (
                <div key={index}>
                    <h2>Name : {user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Address: {user.address.city} {user.address.street}</p>
                </div>
            ))}

            {users.length > show && (
                <button onClick={() => setShow(show + 3)}>Show More</button>
            )}
        </div>
    )
}

export default UserList
