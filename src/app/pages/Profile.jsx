import React, {useEffect, useState} from 'react';
import axios from "axios";

const Profile = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=10")
            .then(res => {
                console.log(res.data)
                setUsers(res.data.results)
            })
    }, [])

    return (
        <>
          <h1>Profile</h1>
        </>
    );
};

export default Profile;