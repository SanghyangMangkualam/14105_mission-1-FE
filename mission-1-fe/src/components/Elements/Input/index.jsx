import Label from "./Label";
import Input from "./Inputs";

const InputForm = (props) => {
    const { label, name, type, placeholder } = props;
    return (
        <div className="space-y-1">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder}/>            
          </div>
    )
}

export default InputForm