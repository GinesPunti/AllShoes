import styled from "styled-components";

export const HeroSectionStyled= styled.section`
    width:100%;
    height: 100vh;
    background-color: #4C4C4C;
    display:flex;
`

export const GalleryContainer= styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction:row;

`
export const Gallery1= styled.div`
    width: 50%;
    height: 100%;
    background-image: url("https://www.washingtonpost.com/resizer/tBm9jNLxF2fxIheIp8DphA9l1D4=/arc-anglerfish-washpost-prod-washpost/public/SUTRNHSQOUI6VFT34B2NGAWH2Q.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right:5px;
    display:flex;
`
export const Gallery2= styled.div`
    width: 50%;
    height:100%;
    background-image: url("https://www.eastbaytimes.com/wp-content/uploads/2020/02/BNG-Z-DUNK-0216-01-2.jpg?w=1024");
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right:5px;
    display:flex;
`
export const Gallery3= styled.div`
    width: 50%;
    height:100%;
    background-image: url("https://fansided.com/wp-content/uploads/imagn-images/2021/06/16199230.jpeg");
    background-position:center;
    background-repeat: no-repeat;
    background-size:cover;
`

export const TextSection= styled.p`
    width:100%;
    font-size: 2rem;
    font-weight: 10px;
    text-align:center;
    font-family: 'Kanit', sans-serif ;
    color: #D1D1D1;
    margin: 10px;
`
export const ButtonTienda= styled.button`
    width:25%;
    height:15%;
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


export const TextContainer=styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    text-align: center;
    align-items:center;
    justify-content:center;
    margin-top: 5px;
    flex-direction: column;
    background-image:url("assets/zapas.jpg");
    background-position:center;
    background-repeat: no-repeat;
    background-size:cover;


`

