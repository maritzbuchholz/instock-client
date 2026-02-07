import Typography from "../Typography/Typography.jsx";

const TableCardField = ({ label, children }) => {
    return (
        <div className={"card__field"}>
            <Typography className="card__label" variant="h4">{label}</Typography>
            <Typography className="card__value" variant="p2">{children}</Typography>
        </div>
    );
};

export default TableCardField;
