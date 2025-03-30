import InputForm from "../Elements/Input";
import Button from "..//Elements/Button/Button.jsx";
import GoogleButton from "..//Elements/Button/GoogleButton.jsx";
const FormLogin = () => {
    return (
        <form className="mt-5 space-y-4">
          <InputForm label="Username" name="username" type="text" placeholder="Masukkan Username"/>
          <InputForm label="Kata Sandi" name="kata sandi" type="password" placeholder="Masukkan Kata Sandi"></InputForm>

        <div className="flex justify-between text-sm mt-3 px-0">
          <p className="text-gray-400">Belum punya akun? <a href="#" className="text-white underline">Daftar</a></p>
          <a href="#" className="text-white underline">Lupa kata sandi?</a>
        </div>

        <div className="mt-5 text-center space-y-3">
          <Button>Masuk</Button>
          <p className="text-gray-400">Atau masuk dengan</p>
          <GoogleButton>Masuk</GoogleButton>
        </div>
        </form>
    )
}

export default FormLogin;