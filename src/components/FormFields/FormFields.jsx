import "./FormFields.scss";
import Typography from "../Typography/Typography.jsx";

// *** Variants ***
// Phone Number
// Email

const FormFields = ({
    variant = "none"
}) => {
    return(
        <input className="form-fields"
            variant={variant}
        />
    );
}

export default FormFields;