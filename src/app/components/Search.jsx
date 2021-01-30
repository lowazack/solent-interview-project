import React from 'react';
import SearchIcon from '../../../public/icons/seach.svg';
import SearchBg from '../../../public/images/background.jpg'
import {SearchCont, SearchTitle, SearchSubTitle, SearchInput} from "Components/Search.styled";

const Search = (props) => {

    return (
        <SearchCont style={{backgroundImage: `url(${SearchBg})`}}>
            <div className={'container'}>
                <SearchTitle>Find a member of staff</SearchTitle>
                <SearchSubTitle>Use the search box to get started</SearchSubTitle>

                <SearchInput >
                    <input type="text" placeholder={'Start typing'}  onChange={e => {props.searchFunction(e.target.value)}}/>
                    <img src={SearchIcon} alt="search icon"/>
                </SearchInput>
            </div>
        </SearchCont>
    );

};

export default Search;