import "./WarehousesForm.scss";
import Typography from "../../components/Typography/Typography.jsx";
import FormFields from "../../components/FormFields/FormFields.jsx";
import Button from "../../components/Button/Button.jsx";
import { emptyFieldError } from "../../utils/formValidation.js";
import { useState, useEffect } from "react";


const WarehousesForm = () => {
    const [errors, setError] = useState({
        "warehouse-name": "",
        "address": "",
        "city": "",
        "country": "",
        "contact-name": "",
        "number": "",
        "email": "",
    });

    const handleSubmit = async(e)=> {
        e.preventDefault();
        emptyFieldError(e, errors, setError);
    };

    // useEffect(() => {
    //     console.log(errors);
    // },[errors])

    return (
        <form
            onSubmit={handleSubmit}
            className="warehouses-form__contain-all"

        >
            <section className="warehouses-form__form-header">
                <Typography className="warehouses-form__typography-text" variant="h1">Add New Warehouse</Typography>
            </section>

            <section className="warehouses-form__form-input-wrapper">

                <div className="warehouses-form__warehouse-details">
                    <Typography className="warehouses-form__typography-text--form" variant="h2">Warehouse Details</Typography>
                    <FormFields errorState={errors["warehouse-name"]} htmlFor="warehouse-name" inputName="Warehouse Name" />
                    <FormFields errorState={errors["address"]} htmlFor="address" inputName="Street Address"/>
                    <FormFields errorState={errors["city"]} htmlFor="city" inputName="City"/>
                    <FormFields errorState={errors["country"]} htmlFor="country" inputName="Country"/>
                </div>

                <div className="warehouses-form__contact-details">
                    <Typography className="warehouses-form__typography-text--form" variant="h2">Contact Details</Typography>
                    <FormFields errorState={errors["contact-name"]} htmlFor="contact-name" inputName="Contact Name"/>
                    <FormFields htmlFor="position" inputName="Position"/>
                    <FormFields errorState={errors["number"]} htmlFor="number" inputName="Phone Number"/>
                    <FormFields errorState={errors["email"]} htmlFor="email" inputName="Email"/>
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