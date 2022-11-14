import styled from "styled-components";

export const SectionShopStyled = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("assets/court.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: black;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

export const CategoriesStyled = styled.div`
  width: 25%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  transition: all 0.3s;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &:hover {
    cursor: pointer;
    border-radius: 5px;
    scale: 0.7;
  }
`;
export const CategorieContainer= styled.div`
    width:100%;
    height:100%;
    display:flex;
`
