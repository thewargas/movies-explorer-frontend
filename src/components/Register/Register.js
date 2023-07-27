import "./Register.css";
import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Register({ handleRegister, apiError }) {
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
      />
    </main>
  );
}

export default Register;
