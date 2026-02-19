import "./FormFields.scss";
import Typography from "../Typography/Typography.jsx";
import { errorType } from "../../utils/formValidation.js";
import Icon from "../Iconography/Iconography.jsx"

// *** Variants ***
// Phone Number
// Email

const FormFields = ({
    htmlFor="",
    inputName="Placeholder",
    variant="text",
    type="text", // text_area, dropdown, radio
    options = [],
    value,
    onChange,
    className,
    placeholder,
    errorState="",
}) => {

const fieldType = () => {
    if (type === "text") {
        return (
            <input
            id={htmlFor}
            name={htmlFor}
            type="text"
            className={`form-fields__input ${errorState ? "form-fields__input--error": ""}`}
            placeholder={inputName}
            value={value}
            onChange={onChange}
            />
    );
}

if (type === "text_area") {
        return (
            <textarea
            id={htmlFor}
            name={htmlFor}
            type="text_area"
            className={`form-fields__text_area ${errorState ? "form-fields__input--error": ""}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
    );
}

if (type === "numerical") {
        return (
            <input
            id={htmlFor}
            name={htmlFor}
            type="number"
            className={`form-fields__input ${errorState ? "form-fields__input--error": ""}`}
            placeholder={placeholder || inputName}
            value={value}
            onChange={onChange}
            min="0"
            />
    );
}


if (type === "dropdown") {
     return (
    <div className = "form-fields__dropdown-wrapper">
            <select
            id={htmlFor}
            name={htmlFor}
            type="dropdown"
            className={`form-fields__dropdown ${errorState ? "form-fields__input--error": ""}`}
            placeholder={inputName}
            value={value}
            onChange={onChange}
            >
            <option value="">Please select</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
            ))}
            </select>

            <Icon 
            name="dropdown"
            className="form-fields__dropdown-icon"/>
</div>
    );
}

if (type === "radio") {
      return (
        <div className="form-fields__radio-group">
          {options.map((option) => (
            <label key={option.value} className="form-fields__radio">
              <input
                className={`form-fields__radio-input ${errorState ? "form-fields__input--error": ""}`}
                type="radio"
                name={htmlFor}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      );
    }
  //  return null;

};

    return(
        <label className="form-fields__label" htmlFor={htmlFor}>
            <Typography variant="h3" className="form-fields__label-text">{inputName}</Typography>
            <div className="form-fields__input-container">
                
                {fieldType()}
                <Typography
                    variant="p3"
                    className={`form-fields__message ${errorState ? "form-fields__message--error": ""}`}
                >{errorType(errorState)}</Typography>
            </div>
        </label>
    );
}

export default FormFields;