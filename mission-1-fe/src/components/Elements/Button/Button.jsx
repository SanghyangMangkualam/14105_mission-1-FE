const Button = (props) => {
    const { children } = props;
    return (
        <button className="w-full h-12 bg-gray-700 text-white rounded-xl">
            {children}
        </button>
    )
}

export default Button