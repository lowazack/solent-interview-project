import styled from 'styled-components';

export const ListingButton = styled.a`
    display: flex;
    width: 100%;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    align-items: center;
    margin-bottom: 20px;
    border: 2px solid black;
    color: black;
    text-decoration: none;
`;

export const ListingImage = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid black;
    margin-right: 20px;
`
export const ListingName = styled.span`
    font-size: 1.7rem;
`

export const ListingGo = styled.img`
    margin-left: auto;
`