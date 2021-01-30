import React, { useState, useEffect } from 'react';
import Search from "Components/Search";
import axios from "axios";
import UserListing from "Components/UserListing"


const Homepage = () => {

    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=10")
            .then(res => {
                setUsers(res.data.results)
            })
    }, [])

    let updateSearchTerm = (value) => {
        setSearchTerm(value)
    }

    let getUsers = () => {
        if (searchTerm === ''){
            return (
                <>{users.map((user, index) => (
                    <UserListing user={user} key={index} />
                ))}</>
            )
        }

        let usersArray = users.filter(user => {
            let name = user.name.first + " " + user.name.last;
            return name.toLowerCase().includes(searchTerm.toLowerCase());
        })

        return (
            <>{usersArray.map((user, index) => (
                <UserListing user={user} key={index} />
            ))}</>
        )

    }

    return (
        <>
            <Search searchFunction={updateSearchTerm}/>
            <div className="container">
                {getUsers()}
            </div>

        </>
    );
};

export default Homepage;

export { 
    Homepage
};