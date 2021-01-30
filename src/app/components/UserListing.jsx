import React from 'react';
import SearchIcon from '../../../public/icons/circle-arrow.svg';
import { Link } from 'react-router-dom';


import {ListingButton, ListingImage, ListingName, ListingGo} from './UserListing.styled'

const UserListing = (props) => {
    return (
        <ListingButton href={'/seed/id'}>
            <ListingImage src={props.user.picture.thumbnail} alt={props.user.name.first + ' ' + props.user.name.last}/>
            <ListingName>{props.user.name.first} {props.user.name.last}</ListingName>
            <ListingGo src={SearchIcon} alt="go to profile"/>
        </ListingButton>
    );
};

export default UserListing;