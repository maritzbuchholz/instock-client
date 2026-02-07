import "./WarehousesForm.scss";
import Typography from "../../components/Typography/Typography.jsx";
import FormFields from "../../components/FormFields/FormFields.jsx";

const WarehousesForm = () => {
    return (
        <section className="warehouses-form">
            <div className="warehouses-form__header">
                <Typography variant="h1">Add New Warehouse</Typography>
            </div>

            <div className="warehouses-form__warehouse-details">
                <Typography variant="h1">Warehouse Details</Typography>
                <FormFields inputName="Warehouse Name"/>
                <FormFields inputName="Street Address"/>
                <FormFields inputName="City"/>
                <FormFields inputName="Country"/>
            </div>
            <div className="warehouses-contact-details">
                <Typography variant="h1">Contact Details</Typography>
                <FormFields inputName="Contact Name"/>
                <FormFields inputName="Position"/>
                <FormFields inputName="Phone Number"/>
                <FormFields inputName="Email"/>
            </div>
        </section>
    );
};

export default WarehousesForm;