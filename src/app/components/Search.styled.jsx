import styled from 'styled-components';

export const SearchCont = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    background-size: cover;
    background-color: black;
    margin-bottom: 40px;
    padding-bottom: 40px;
    background-position: center -3px;
    
    @media screen and (min-width: 800px){
        margin-bottom: 80px;
        padding-bottom: 80px;
        padding-top: 150px;
  }
`;

export const SearchTitle = styled.h1`
    font-size: 3rem;
    line-height: 1;
    margin: 0;
    text-align: center;
    @media screen and (min-width: 800px){
      font-size: 6rem;
      text-align: left;
    }
`;

export const SearchSubTitle = styled.h3`
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;

    @media screen and (min-width: 800px){
      font-size: 2rem;
      text-align: left;
    }
`;

export const SearchInput = styled.div`
    width: 100%;
    border-radius: 10px;
    display: flex;
    position: relative;

    input {
      background-color: white;
      display: block;
      width: 100%;
      padding: 10px;
      border-radius: 10px;
      outline: none;
      border: 2px solid transparent;
      padding-right: 55px;
      font-size: 1.8rem;

      @media screen and (min-width: 800px){
        font-size: 2.5rem;
      }
    }

    img {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      pointer-events: none;
    }
  }
`

