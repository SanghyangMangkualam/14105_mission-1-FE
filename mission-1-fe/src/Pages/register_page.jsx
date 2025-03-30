import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
    return(
        <div className="register-page w-1/2 background-cinema">
        <AuthLayout title="Daftar">
            <FormRegister/>
        </AuthLayout>
        </div>
    );
};

export default RegisterPage;