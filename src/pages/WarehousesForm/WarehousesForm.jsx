import "./WarehousesForm.scss";
import Typography from "../../components/Typography/Typography.jsx";
import FormFields from "../../components/FormFields/FormFields.jsx";
import Button from "../../components/Button/Button.jsx";
import { fieldFilled } from "../../utils/formValidation.js";
import { useState } from "react";


const WarehousesForm = () => {
    const [errors, setError] = useState({
        "warhouse-name": "no-error",
        "address": "no-error",
        "city": "no-error",
        "country": "no-error",
    });

    const handleSubmit = async(e)=> {
        e.preventDefault();
        console.log(e);
        fieldFilled(e.target, 8); // second input is the number of fields to test
    };

    return (
        <form onSubmit={handleSubmit} className="warehouses-form__contain-all">
            <section className="warehouses-form__form-header">
                <Typography className="warehouses-form__typography-text" variant="h1">Add New Warehouse</Typography>
            </section>

            <section className="warehouses-form__form-input-wrapper">

                <div className="warehouses-form__warehouse-details">
                    <Typography className="warehouses-form__typography-text--form" variant="h2">Warehouse Details</Typography>
                    <FormFields htmlFor="warhouse-name" inputName="Warehouse Name"/>
                    <FormFields htmlFor="address" inputName="Street Address"/>
                    <FormFields htmlFor="city" inputName="City"/>
                    <FormFields htmlFor="country" inputName="Country"/>
                </div>

                <div className="warehouses-form__contact-details">
                    <Typography className="warehouses-form__typography-text--form" variant="h2">Contact Details</Typography>
                    <FormFields htmlFor="contact-name" inputName="Contact Name"/>
                    <FormFields htmlFor="position" inputName="Position"/>
                    <FormFields htmlFor="number" inputName="Phone Number"/>
                    <FormFields htmlFor="email" inputName="Email"/>
                </div>

            </section>

            <section className="warehouses-form__button-wrapper">
                <Button
                    type="button"
                    className="warehouses-form__cancel"
                    variant="secondary">
                    Cancel
                </Button>
                <Button
                    type="submit"
                    className="warehouses-form__add"
                    variant="primary">
                    + Add Warehouse
                </Button>
            </section>
        </form>
    );
};

export default WarehousesForm;