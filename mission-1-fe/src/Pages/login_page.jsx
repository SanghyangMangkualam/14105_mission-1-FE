import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
    return(
        <div className="login-page w-1/2 background-theatre">
        <AuthLayout title="Masuk">
            <FormLogin/>
        </AuthLayout>
        </div>
    );
};

export default LoginPage;
