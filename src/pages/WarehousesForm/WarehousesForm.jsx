import "./WarehousesForm.scss";
import axios from "axios";
import Typography from "../../components/Typography/Typography.jsx";
import FormFields from "../../components/FormFields/FormFields.jsx";
import Button from "../../components/Button/Button.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import { validateEmail, validatePhone, removeErrors, formatPhoneInput, isFormValid } from "../../utils/formValidation.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postUpdate, fetchUpdate } from "../../utils/apiRequests.js";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

// This useEffect manages all potential types
// Include field name below if you want the field to be required or validated,
// Set intial error state to empty string
// FormFields set name = id
const WarehousesForm = ({setWarehouses}) => {
    const [formData, setFormData] = useState({
        warehouse_name: "",
        address: "",
        city: "",
        country: "",
        contact_name: "",
        contact_position: "",
        contact_phone: "",
        contact_email: "",
    });

    const [errors, setError] = useState({ 
        "contact_phone": "",
        "contact_email": "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        let finalValue = value;

        if (name === "contact_phone") {
            finalValue = formatPhoneInput(value);
            let newErrors = { ...errors }
            newErrors = validatePhone(finalValue, errors, newErrors);
            setError(newErrors);
        }
        if (name === "contact_email") {
            let newErrors = { ...errors }
            newErrors = validateEmail(finalValue, errors, newErrors);
            setError(newErrors);
        }
        setFormData((prev) => ({ ...prev, [name]: finalValue }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = { ...errors };
        // Checks individual errors first, accumulates changes into local object, then updates error states
        // Required to prevents any asyncronous code from running out of order and allows setError to capture all error states
        // newErrors = emptyFieldError(e, errors, newErrors); // include event, error statevalue, local error collector (object)
        // newErrors = validateEmail(e, errors, newErrors);
        // newErrors = validatePhone(e, errors, newErrors);

        // Checks if errors exist. If not, form is submitted
        // const errorStateArray = Object.values(newErrors); // Converts the error object into an array of error states
        // const errorExists = errorStateArray.some(inputErrorState => inputErrorState); // checks if error state exists in array (empty strings are falsey) 
        const errorExists = Object.values(newErrors).some(inputErrorState => inputErrorState);
        if (errorExists) {
            setError(newErrors);
            return;
        } else if (!errorExists) {
            postUpdate("warehouses", formData, setWarehouses, "warehouses");
        };
    };


    const navigate = useNavigate();
    const goToInventories = () => navigate("/warehouses");

    return (
        <form
            onSubmit={handleSubmit}
            className="warehouses-form__contain-all"

        >
            <section className="warehouses-form__form-header">
                <PageHeader headerText="Add New Warehouse" onBack={goToInventories} />
            </section>

            <section className="warehouses-form__form-input-wrapper">

                <div className="warehouses-form__warehouse-details">
                    <Typography className="warehouses-form__typography-text--form" variant="h2">Warehouse Details</Typography>
                    <FormFields value={formData.warehouse_name} onChange={handleChange} errorState={errors["warehouse_name"]} htmlFor="warehouse_name" inputName="Warehouse Name" />
                    <FormFields value={formData.address} onChange={handleChange} errorState={errors["address"]} htmlFor="address" inputName="Street Address"/>
                    <FormFields value={formData.city} onChange={handleChange} errorState={errors["city"]} htmlFor="city" inputName="City"/>
                    <FormFields value={formData.country} onChange={handleChange} errorState={errors["country"]} htmlFor="country" inputName="Country"/>
                </div>

                <div className="warehouses-form__contact-details">
                    <Typography className="warehouses-form__typography-text--form" variant="h2">Contact Details</Typography>
                    <FormFields value={formData.contact_name} onChange={handleChange} errorState={errors["contact_name"]} htmlFor="contact_name" inputName="Contact Name"/>
                    <FormFields value={formData.contact_position} onChange={handleChange} errorState={errors["contact_position"]} htmlFor="contact_position" inputName="Position"/>
                    <FormFields value={formData.contact_phone} onChange={handleChange} errorState={errors["contact_phone"]} htmlFor="contact_phone" inputName="Phone Number"/>
                    <FormFields value={formData.contact_email} onChange={handleChange} errorState={errors["contact_email"]} htmlFor="contact_email" inputName="Email"/>
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
                    variant="primary"
                    disabled={!isFormValid(formData)}>
                    + Add Warehouse
                </Button>
            </section>
        </form>
    );
};

export default WarehousesForm;