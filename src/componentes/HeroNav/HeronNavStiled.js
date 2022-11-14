import styled from "styled-components";


export const HeroNavStyled= styled.nav`
    position: absolute;
    width:100%;
    height: 10%;
    display: flex;
    justify-content: flex-end;
    padding: none;
    background-color: rgba(0,0,0,.8);
    
`

export const NavAStyled= styled.a`
    text-decoration: none;
    color: white;
    &:hover{
        border-bottom: solid 2px white;
        transition: all .1s;
    }
`

export const NavUlStyled= styled.ul`
    display: flex;
    flex-direction: row; 
    list-style: none; 
    align-items: center;
    cursor: pointer;
    color:white;
    margin-right: 1rem;
`

export const NavLiStyled= styled.li `
    margin: 10px;
`
