import Typography from "../Typography/Typography.jsx";

// *** Variants ***
// Phone Number
// Email

const FormFields = ({
    variant = "none"
}) => {
    return(
        <input
            variant={variant}
        />
    );
}

export default FormFields;