const Label = (props) => {
    const { htmlFor, children } = props;
    return (
        <label 
        htmlFor = {htmlFor}
        className="block text-lg">
            {children}
        </label>
    )
}

export default Label;