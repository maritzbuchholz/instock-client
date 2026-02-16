import "./WarehousesForm.scss";
import Typography from "../../components/Typography/Typography.jsx";
import FormFields from "../../components/FormFields/FormFields.jsx";
import Button from "../../components/Button/Button.jsx";
import { emptyFieldError, validateEmail, validatePhone, removeErrors, formatPhoneInput } from "../../utils/formValidation.js";
import { useState, useEffect } from "react";


// This useEffect manages all potential types
// Include field name below if you want the field to be required or validated,
// Set intial error state to empty string
// FormFields set name = id
const WarehousesForm = () => {
    const [errors, setError] = useState({ 
        "warehouse-name": "",
        "address": "",
        "city": "",
        "country": "",
        "contact-name": "",
        "phone": "",
        "email": "",
    });

    const handleSubmit = async(e)=> {
        e.preventDefault();
        let newErrors = {...errors};
        // Checks individual errors first, accumulates changes into local object, then updates error states
        // Required to prevents any asyncronous code from running out of order and allows setError to capture all error states
        newErrors = emptyFieldError(e, errors, newErrors); // include event, error statevalue, local error collector (object)
        newErrors = validateEmail(e, errors, newErrors);
        newErrors = validatePhone(e, errors, newErrors);
        setError(newErrors);
    };

    const handleChange = (e) => { 
        removeErrors(e, errors, setError); // Any errors flag are removed once user interacts
        if (e.currentTarget.name === "phone") {
            e.currentTarget.value = formatPhoneInput(e.currentTarget.value); // Restricts phone number format live
        };
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
                    <FormFields onChange={handleChange} errorState={errors["warehouse-name"]} htmlFor="warehouse-name" inputName="Warehouse Name" />
                    <FormFields onChange={handleChange} errorState={errors["address"]} htmlFor="address" inputName="Street Address"/>
                    <FormFields onChange={handleChange} errorState={errors["city"]} htmlFor="city" inputName="City"/>
                    <FormFields onChange={handleChange} errorState={errors["country"]} htmlFor="country" inputName="Country"/>
                </div>

                <div className="warehouses-form__contact-details">
                    <Typography className="warehouses-form__typography-text--form" variant="h2">Contact Details</Typography>
                    <FormFields onChange={handleChange} errorState={errors["contact-name"]} htmlFor="contact-name" inputName="Contact Name"/>
                    <FormFields htmlFor="position" inputName="Position"/>
                    <FormFields onChange={handleChange} errorState={errors["phone"]} htmlFor="phone" inputName="Phone Number"/>
                    <FormFields onChange={handleChange} errorState={errors["email"]} htmlFor="email" inputName="Email"/>
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