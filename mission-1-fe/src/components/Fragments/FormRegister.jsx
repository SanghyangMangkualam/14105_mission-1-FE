import InputForm from "../Elements/Input";
import Button from "..//Elements/Button/Button.jsx";
import GoogleButton from "..//Elements/Button/GoogleButton.jsx";
import { Link } from "react-router-dom";
const FormRegister = () => {
    return (
        <form className="mt-5 space-y-4">
          <InputForm label="Username" name="username" type="text" placeholder="Masukkan Username"/>
          <InputForm label="Kata Sandi" name="kata sandi" type="password" placeholder="Masukkan Kata Sandi"></InputForm>
          <InputForm label="Konfirmasi Kata Sandi" name="konfirmasi kata sandi" type="password" placeholder="Konfirmasi Kata Sandi"></InputForm>

        <div className="flex justify-between text-sm mt-3 px-0">
          <p className="text-gray-400">Sudah punya akun? <Link to="/login" className="text-white underline">Masuk</Link></p>
          <a href="#" className="text-white underline">Lupa kata sandi?</a>
        </div>

        <div className="mt-5 text-center space-y-3">
          <Button>Daftar</Button>
          <p className="text-gray-400">Atau</p>
          <GoogleButton>Daftar</GoogleButton>
        </div>
        </form>
    )
}

export default FormRegister;