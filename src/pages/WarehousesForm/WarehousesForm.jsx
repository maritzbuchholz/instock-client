import "./WarehousesForm.scss";
import Typography from "../../components/Typography/Typography.jsx";
import FormFields from "../../components/FormFields/FormFields.jsx";

const WarehousesForm = () => {
    return (
        <section className="warehouses">
            <div className="warehouses__header">
                <Typography variant="h1">Warehouses</Typography>
            </div>

            <div className="warehouses__content">
                <Typography variant="p1">Warehouse form will be displayed here.</Typography>
                <FormFields />
            </div>
        </section>
    );
};

export default WarehousesForm;