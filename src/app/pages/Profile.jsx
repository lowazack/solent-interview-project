import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router";

import Search from "Components/Search";
import UserProfile from "Components/UserProfile";

const Profile = (props) => {
    const [user, setUser] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [screenWidth, setScreenWidth] = useState(0)



    let { seed, userId } = useParams();

    useEffect(() => {

        updateScreenWidth()

        window.addEventListener("resize", updateScreenWidth);

        axios.get(`https://randomuser.me/api/?results=10&seed=${seed}`)
            .then(res => {
                setUser(res.data.results.filter(user => {
                    return user.login.uuid === userId
                })[0]);
            })

        return () => {
            window.removeEventListener('resize', updateScreenWidth)
        }
    }, [])

    let updateScreenWidth = () => {
        setScreenWidth(window.innerWidth)
    }

    let updateSearchTerm = (value) => {
        setSearchTerm(value)
    }

    return (
        <>
            { screenWidth > 800 ? <Search searchFunction={updateSearchTerm} /> : null }

            {user !== false ? <UserProfile user={user} /> : null }

        </>
    );
};

export default Profile;