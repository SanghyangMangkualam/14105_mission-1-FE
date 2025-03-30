import React from "react";
import LoginPage from "./Pages/login_page";
import RegisterPage from "./Pages/register_page";

const Login = () => {
  return (
    <div className="bg-black h-screen flex">
      {/* <div className="login-page w-1/2 background-theatre">
        <LoginPage></LoginPage>
      </div> */}
      <div className="register-page w-1/2 background-cinema">
        <RegisterPage></RegisterPage>
      </div>
    </div>
  );
};

export default Login;

