import React from "react";
import { useForm } from "react-hook-form";
import {
  GoogleContainer,
  RegisterContainer,
  RegisterPage,
  FormStyled,
  ImgContainer,
  FormContainer,
  InputsContainer,
  ErrorContainer,
  ErrorMenssege,
  RegisterTitle,
  Inputs,
} from "./RegisterStyled";
import { FcGoogle } from "react-icons/fc";
import { createUser, singInGoogle } from "../../../firebase/firebase-utils";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const ERROR_CODES = {
    EMAIL_IN_USE: "auth/email-already-in-use",
  };

  const onSubmit = async (values) => {
    const { email, password } = values;
    // console.log(values)
    try {
      const response = await createUser(email, password);
    } catch (error) {
      if (error.code === ERROR_CODES.EMAIL_IN_USE) {
        alert(`El email ya existe`);
      }
    }
  };
  return (
    <RegisterPage>
      <ImgContainer />
      <FormContainer>
        <RegisterTitle>Crea tu cuenta</RegisterTitle>
        <RegisterContainer>
          <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <InputsContainer>
              <Inputs
                placeholder="Nombre"
                type="text"
                {...register(`nombre`, {
                  required: true,
                  maxLength: 10,
                })}
              />
              <ErrorContainer>
                <ErrorMenssege>
                  {errors.nombre?.type === `required` && (
                    <p style={{ color: "red" }}>El campo es requerido</p>
                  )}
                  {errors.nombre?.type === `maxLength` && (
                    <p style={{ color: "red" }}>
                      El Nombre de usuario no puede tener mas de 10 letras
                    </p>
                  )}
                </ErrorMenssege>
              </ErrorContainer>
            </InputsContainer>
            <InputsContainer>
              <Inputs
                placeholder="Contraseña"
                type="password"
                {...register(`password`, {
                  required: true,
                  
                })}
              />
              <ErrorContainer>
                <ErrorMenssege>
                  {errors.password?.type === `required` && (
                    <p style={{ color: "red" }}>El campo es requerido</p>
                  )}
                </ErrorMenssege>
              </ErrorContainer>
            </InputsContainer>
            <InputsContainer>
              <Inputs
                placeholder="Email"
                type="email"
                {...register(`email`, {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              <ErrorContainer>
                <ErrorMenssege>
                  {errors.email?.type === `required` && (
                    <p style={{ color: "red" }}>El campo es requerido</p>
                  )}
                  {errors.email?.type === `pattern` && (
                    <p style={{ color: "red" }}>
                      El correo electronico es invalido
                    </p>
                  )}
                </ErrorMenssege>
              </ErrorContainer>
            </InputsContainer>

            <GoogleContainer
              onClick={async() => {
                const response = await singInGoogle();
              }}
            >
              <p>
                <FcGoogle fontSize={"1.3rem"} />
                oogle
              </p>
            </GoogleContainer>

            <p>
              <input type="checkbox" />
              Acepto los terminos y condiciones
            </p>

            <button type="submit">Registrate</button>
          </FormStyled>
        </RegisterContainer>
      </FormContainer>
    </RegisterPage>
  );
};
