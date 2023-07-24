import "./Register.css";
import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Register() {
  return (
    <main className="register">
      <AuthForm
        title={"Добро пожаловать!"}
        buttonText={"Зарегистрироваться"}
        text={"Уже зарегистрированы?"}
        link={"Войти"}
        textPath={"/signin"}
        submitPath={"/signin"}
      />
    </main>
  );
}

export default Register;
