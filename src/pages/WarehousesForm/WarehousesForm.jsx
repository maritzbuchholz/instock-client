import "./WarehousesForm.scss";
import Typography from "../../components/Typography/Typography.jsx";
import FormFields from "../../components/FormFields/FormFields.jsx";
import Button from "../../components/Button/Button.jsx";

const WarehousesForm = () => {
    return (
        <section className="warehouses-form__contain-all">

            <div className="warehouses-form__form-header">
                <Typography className="warehouses-form__typography-text" variant="h1">Add New Warehouse</Typography>
            </div>

            <form onSubmit={console.log("submit")} className="warehouses-form__form-wrapper">

                <div className="warehouses-form__warehouse-details">
                    <Typography className="warehouses-form__typography-text--form" variant="h2">Warehouse Details</Typography>
                    <FormFields inputName="Warehouse Name"/>
                    <FormFields inputName="Street Address"/>
                    <FormFields inputName="City"/>
                    <FormFields inputName="Country"/>
                </div>

                <div className="warehouses-form__contact-details">
                    <Typography className="warehouses-form__typography-text--form" variant="h2">Contact Details</Typography>
                    <FormFields inputName="Contact Name"/>
                    <FormFields inputName="Position"/>
                    <FormFields inputName="Phone Number"/>
                    <FormFields inputName="Email"/>
                </div>

            </form>

            <div className="warehouses-form__button-wrapper">
                <Button
                    className="warehouses-form__cancel"
                    variant="secondary">
                    Cancel
                </Button>
                <Button
                    className="warehouses-form__add"
                    variant="primary">
                    + Add Warehouse
                </Button>
            </div>
            
        </section>
    );
};

export default WarehousesForm;