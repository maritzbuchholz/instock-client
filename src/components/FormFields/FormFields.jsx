import "./FormFields.scss";
import Typography from "../Typography/Typography.jsx";

// *** Variants ***
// Phone Number
// Email

const FormFields = ({
    label="Phone Number",
    variant = "none",
}) => {
    return(
        <label className="form-fields__label">
            <Typography variant="h3" className="form-fields__label-text">{label}</Typography>
            <div className="form-fields__input-container">
                <input
                    className="form-fields__input"
                    variant={variant}
                />
            </div>
        </label>
    );
}

export default FormFields;