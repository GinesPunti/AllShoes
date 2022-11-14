import styled from "styled-components";

export const ModalCartClose = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: flex-end;
`;

export const ModalCartStyle = styled.div`
  width: 35%;
  height: 100vh;
  background-color: rgba(63, 63, 63, 0.9);
  box-shadow: -1px 3px 13px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 3px 13px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 3px 13px 1px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  position: absolute;
`;
export const ModalCartType = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: white;
`;
export const ModalCartClean = styled.div`
  width: 6%;
  height: 100%;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;
export const ModalCartProducts = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top:10px;
  p {
    color: white;
  }
  overflow: scroll;
  /* scroll-snap-align:unset; */
  &::-webkit-scrollbar {
    background: transparent;
  }
  &::-webkit-scrollbar:horizontal {
    display: none;
  }
`;
export const ModalCarFoot = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const ModalCartPrice = styled.div`
  width: 90%;
  height: 30%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 10px;
`;
export const Button = styled.button`
  min-width: 10rem;
  min-height: 2rem;
  border: 3px solid #85c7f2;
  background-color: #85c7f2;
  text-align: center;
  border-radius: 10px;
  font-family: "Kanit", sans-serif;

  &:hover {
    cursor: pointer;
    background-color: white;
    transition: all 0.3s;
  }
`;
export const ModalCardCont = styled.div`
  width: 95%;
  height: 20%;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
margin-bottom: 10px;
  img {
    width: 25%;
    height:auto;    
    object-fit:contain;

  }
`;
export const ModalCardName = styled.p`
  width: 30%;
  text-align: center;
`;
export const ModalCardPrice = styled.p`
  width: 10%;
`;
export const ModalCardQuantity = styled.p`
  width: 10%;
`;
export const ModalCartPriceSpan = styled.span`
  color: #8ac926;
`;
