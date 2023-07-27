import "./Login.css";
import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Login({ handleAuthorize, apiError }) {
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
      />
    </main>
  );
}

export default Login;
