import Typography from "../Typography/Typography.jsx";

const TableCardField = ({ label, children, className = "" }) => {
    return (
        <div className={`card__field ${className}`}>
            <Typography className="card__label" variant="h4">
                {label}
            </Typography>
            <div className="card__value">
                {children}
            </div>
        </div>
    );
};

export default TableCardField;
