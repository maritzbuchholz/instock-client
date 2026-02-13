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
                    className="form-fields__input"
                    placeholder={inputName}
                />
                <Typography
                    variant="p3"
                    className={`form-fields__none ${errorState ? "form-fields__error": ""}`
                    }>
                    {errorType(errorState)}
                </Typography>
            </div>
        </label>
    );
}

export default FormFields;