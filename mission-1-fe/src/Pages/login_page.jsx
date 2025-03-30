import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
    return(
        <AuthLayout title="Masuk">
            <FormLogin/>
        </AuthLayout>
    );
};

export default LoginPage;
