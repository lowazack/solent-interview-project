import React from 'react';
import {Image, Title, Details, Detail} from './UserProfile.styled';
import MailIcon from '../../../public/icons/email.svg';
import CrownIcon from '../../../public/icons/dob.svg';
import phoneIcon from '../../../public/icons/phone.svg';
import moment from 'moment'

const UserProfile = (props) => {
    let formatDate = date => {

        return '4/5/1990'
    }

    return (
        <div className="container">
            <Image src={props.user.picture.large}/>
            <Title>{props.user.name.first} {props.user.name.last}</Title>

            <Details>
                <Detail>
                    <img src={MailIcon} alt="Email Icon"/>
                    {props.user.email}
                </Detail>
                <Detail>
                    <img src={CrownIcon} alt="Date of birth icon"/>
                    { moment(props.user.dob.date).format('D/M/YYYY') }
                </Detail>
                <Detail>
                    <img src={phoneIcon} alt="Number Icon"/>
                    {props.user.cell}
                </Detail>
            </Details>
        </div>
    );
};

export default UserProfile;