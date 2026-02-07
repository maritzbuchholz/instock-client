import "./FormFields.scss";
import Typography from "../Typography/Typography.jsx";

// *** Variants ***
// Phone Number
// Email

const FormFields = ({
    inputName="Placeholder",
    variant="standard",
}) => {
    return(
        <label className="form-fields__label">
            <Typography variant="h3" className="form-fields__label-text">{inputName}</Typography>
            <div className="form-fields__input-container">
                <input
                    className="form-fields__input"
                    variant={variant}
                    placeholder={inputName}
                />
                <Typography variant="p3" className="form-fields__error">This field is required</Typography>
            </div>
        </label>
    );
}

export default FormFields;