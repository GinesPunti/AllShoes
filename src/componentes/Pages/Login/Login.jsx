import React from "react";
import {
  LoginContainer,
  LoginPage,
  FormStyled,
  GoogleContainer,
  ImgContainer,
  FormContainer,
  InputsContainer,
  ErrorMenssege,
  ButtonsContainer,
  ErrorContainer,
  Inputs,
  LoginTitle,
} from "./LoginStyled";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { createUserProfile, singIn, singInGoogle } from "../../../firebase/firebase-utils";
import { async } from "@firebase/util";

const ERROR_CODES = {
  WRONG_PASSWORD: "auth/wrong-password",
  NOT_FOUND_USER: "auth/user-not-found",
};

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password} = data;
    try {
      const { user } =await singIn(email, password);
      createUserProfile(user)
    } catch (error) {
      const { code } = error;
      switch (code) {
        case ERROR_CODES.WRONG_PASSWORD:
          return alert("oaaa");
        case ERROR_CODES.NOT_FOUND_USER:
          return alert("El Usuario no existe");
        default:
          return alert("ERROR 404")
      }
    }
  };

  return (
    // <Link to="/Home">home</Link>
    <LoginPage>
      <ImgContainer />
      <FormContainer>
        <LoginTitle>Inicia Sesion</LoginTitle>
        <LoginContainer>
          <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <InputsContainer>
              <Inputs
                type="email"
                placeholder="Email"
                {...register(`email`, {
                  required: true,
                })}
              />
              <ErrorContainer>
                {errors.email?.type === `required` && (
                  <ErrorMenssege>El campo es requerido</ErrorMenssege>
                )}
              </ErrorContainer>
            </InputsContainer>
            <InputsContainer>
              <Inputs
                type="password"
                placeholder="Contraseña "
                {...register(`password`, {
                  required: true,
                })}
              />
              <ErrorContainer>
                {errors.password?.type === `required` && (
                  <ErrorMenssege>El campo es requerido</ErrorMenssege>
                )}
              </ErrorContainer>
            </InputsContainer>
            <ButtonsContainer>
              <GoogleContainer
                onClick={() => {
                  const google = singInGoogle();
                }}
              >
                <p>
                  <FcGoogle fontSize={"1.5rem"} /> oogle
                </p>
              </GoogleContainer>

              <button type="submit">Iniciar Sesion</button>

              <p>
                No tienes una cuenta?{" "}
                <span>
                  <Link
                    to={"/Register"}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Registrate{" "}
                  </Link>
                </span>
              </p>
            </ButtonsContainer>
          </FormStyled>
        </LoginContainer>
      </FormContainer>
    </LoginPage>
  );
}
