import styled from "styled-components";

export const SectionProductStyled= styled.section`
    width:100%;
    height:100vh;
    background-image: url("assets/court2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: contain;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    align-items: center;
`

export const ProductCard=styled.div`
    width: 20%;
    height:55%;
    color: white;
    background-color: rgba(0,0,0,.5);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: -1px 3px 13px 1px rgba(0,0,0,0.75);
    -webkit-box-shadow: -1px 3px 13px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 3px 13px 1px rgba(0,0,0,0.75);
    border: 1px solid black;

    img{
        width:100%;
        height:45%;
        object-fit: cover;
    }

    h2{
        font-size: 1rem;
    }

    p{
        color: #8AC926;
        font-weight: 700;
    }

`

export const ButtonBuy=styled.button`
    width:55%;
    height:10%;
    border: 3px solid #85C7F2;
    background-color: #85C7F2;
    border-radius: 10px;
    font-family: 'Kanit', sans-serif;

    &:hover{
        cursor: pointer;
        background-color: white;
        transition: all .3s;
    }

`
