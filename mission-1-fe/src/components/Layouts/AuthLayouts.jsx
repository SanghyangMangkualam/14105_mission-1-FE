import logo from "../../assets/images/icons/Logo.svg";

const AuthLayout = (props) => {
    const { children, title} = props;
    return (
        <div className="container bg-black/80 rounded-2xl w-md p-10 text-white  
                items-center justify-center  
                fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img className="mx-auto min-w-[163px] min-h-[64px] pt-10" src={logo} alt="Logo" />
            <h3 className="font-semibold text-center text-[32px] mt-5">{title}</h3>
            <p className="text-center text-lg text-white mt-2">Selamat datang kembali!</p>
            {children}
        </div>
    )
}

export default AuthLayout;
