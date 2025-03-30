import google from "../../../assets/images/icons/Google_Logo.svg";

const GoogleButton = (props) => {
    const { children } = props;
    return (
        <button className="w-full h-12 border border-gray-600 text-white rounded-xl flex items-center justify-center">
            <img src={google} 
            className="w-5 h-5 mr-2" 
            alt="Google" /> {children} dengan Google
          </button>
    )
}

export default GoogleButton;