import React from "react";
import logo from "./assets/images/icons/Logo.svg";
import google from "./assets/images/icons/Google_Logo.svg";
import InputForm from "./components/Elements/Input/index.jsx";


const Login = () => {
  return (
    <div className="login-page background-theatre">
      <div className="container bg-black/80 rounded-2xl w-md p-10 text-white  
                items-center justify-center  
                fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img className="mx-auto min-w-[163px] min-h-[64px] pt-10" src={logo} alt="Logo" />
        <h3 className="font-semibold text-center text-[32px] mt-5">Masuk</h3>
        <p className="text-center text-lg text-white mt-2">Selamat datang kembali!</p>
        
        <form className="mt-5 space-y-4">
          <InputForm label="Username" name="username" type="text" placeholder="Masukkan Username"/>
          <InputForm label="Kata Sandi" name="kata sandi" type="password" placeholder="Masukkan Kata Sandi"></InputForm>
        </form>

        <div className="flex justify-between text-sm mt-3 px-0">
          <p className="text-gray-400">Belum punya akun? <a href="#" className="text-white underline">Daftar</a></p>
          <a href="#" className="text-white underline">Lupa kata sandi?</a>
        </div>

        <div className="mt-5 text-center space-y-3">
          <button className="w-full h-12 bg-gray-700 text-white rounded-xl">Masuk</button>
          <p className="text-gray-400">Atau masuk dengan</p>
          <button className="w-full h-12 border border-gray-600 text-white rounded-xl flex items-center justify-center">
            <img src={google} className="w-5 h-5 mr-2" alt="Google" /> Masuk dengan Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
