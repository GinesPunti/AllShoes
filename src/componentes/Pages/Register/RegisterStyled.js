import styled from "styled-components";

export const RegisterPage = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #e2e9f3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FormContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: #e2e9f3;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;
export const RegisterTitle= styled.p`
  font-size: 2rem;
  font-weight:300;
`
export const ImgContainer = styled.div`
  width: 50%;
  height: 100%;
  background-image: url("assets/Airforce.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const RegisterContainer = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(133, 193, 233, 0.5);
  border-radius: 10px;
`;
export const FormStyled = styled.form`
  width: 100%;
  height: 100%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 30%;
    height: 7%;
    border: 3px solid #85c7f2;
    background-color: #85c7f2;
    border-radius: 5px;
    font-weight:600;
    &:hover {
      cursor: pointer;
      background-color: white;
      transition: all 0.3s;
    }
  }
`;
export const InputsContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin:10px;
`;
export const Inputs=styled.input`
  width:70%;
  height:40%;
  border: none;
  border-radius: 5px;
`
export const ErrorContainer=styled.div`
  width:100%;
  height:5%;
`;
export const ErrorMenssege=styled.p`
  color: red;
  font-size: .8rem;
  width:100%;
  height: 15%;
  text-align:center;
`;
export const ButtonsContainer=styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin:10px;
`;
export const GoogleContainer = styled.div`
  width: 20%;
  height: 2rem;
  background-color:#85c7f2;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin: 5px;
  p {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
