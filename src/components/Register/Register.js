import "./Register.css";
import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Register({ handleRegister, apiError, isInputsDisabled }) {
  return (
    <main className="register">
      <AuthForm
        title={"Добро пожаловать!"}
        buttonText={"Зарегистрироваться"}
        text={"Уже зарегистрированы?"}
        link={"Войти"}
        textPath={"/signin"}
        onSubmit={handleRegister}
        apiError={apiError}
        isInputsDisabled={isInputsDisabled}
      />
    </main>
  );
}

export default Register;
