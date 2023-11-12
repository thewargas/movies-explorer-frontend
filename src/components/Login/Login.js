import "./Login.css";
import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Login({ handleAuthorize, apiError, isInputsDisabled }) {
  return (
    <main className="login">
      <AuthForm
        title={"Рады видеть!"}
        buttonText={"Войти"}
        text={"Ещё не зарегистрированы?"}
        link={"Регистрация"}
        textPath={"/signup"}
        submitPath={"/movies"}
        onSubmit={handleAuthorize}
        apiError={apiError}
        isInputsDisabled={isInputsDisabled}
      />
    </main>
  );
}

export default Login;
