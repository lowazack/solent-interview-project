import styled from 'styled-components';

export const Image = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 15px solid white;
    box-shadow: 0px 0px 0px 1px rgba(150,150,150,1);
    margin: auto;
    display:block;
    margin-bottom: 15px;
    margin-top: 50px;
    @media screen and (min-width: 800px){
        margin-top: 50px;
    }
`;

export const Title = styled.h2`
    margin: auto;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 40px
`
export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    margin-bottom: 60px
    flex-direction: column;
    
    @media screen and (min-width: 800px){
        flex-direction: row;
    }
    
`

export const Detail = styled.div`
    display: flex;
    align-items: center;
    line-height: 1;
    flex-direction: column;
    margin-bottom: 40px;
    
    @media screen and (min-width: 800px){
        flex-direction: row;
    }
    
    img {
        margin-bottom: 10px;
        margin-right: 10px;
        @media screen and (min-width: 800px){
            margin-bottom: 0px;
        }   
    }
`