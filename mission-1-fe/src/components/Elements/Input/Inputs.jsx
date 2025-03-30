import eye from "C:/Users/MSI GAMING/Documents/Harisenin Bootcamp Local Folder/1405_mission 1 FE/mission-1-fe/src/assets/images/icons/eye.svg";
const Input = (props) => {
    const { type, placeholder, name } = props;
    return (
        <div className="relative w-full">
            <input 
                type={type} 
                placeholder={placeholder} 
                name={name}
                className="w-full h-12 rounded-xl bg-transparent border border-gray-600 px-4 text-white focus:outline-none pr-10"
            />
            {type === 'password' && (
                <img 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer border-0"
                    src={eye}
                />
            )}
        </div>
    );
};

export default Input;
