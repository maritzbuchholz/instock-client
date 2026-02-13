import "./FormFields.scss";
import Typography from "../Typography/Typography.jsx";
import { errorType } from "../../utils/formValidation.js";

// *** Variants ***
// Phone Number
// Email

const FormFields = ({
    htmlFor="",
    inputName="Placeholder",
    variant="text",
    type="",
    errorState="",
    onChange,
}) => {
    return(
        <label className="form-fields__label" htmlFor={htmlFor}>
            <Typography variant="h3" className="form-fields__label-text">{inputName}</Typography>
            <div className="form-fields__input-container">
                <input
                    id={htmlFor}
                    name={htmlFor}
                    variant={variant}
                    type={type}
                    className={`form-fields__input ${errorState ? "form-fields__input--error": ""}`}
                    placeholder={inputName}
                    onChange={onChange}
                />
                <Typography
                    variant="p3"
                    className={`form-fields__message ${errorState ? "form-fields__message--error": ""}`}
                >
                    {errorType(errorState)}
                </Typography>
            </div>
        </label>
    );
}

export default FormFields;