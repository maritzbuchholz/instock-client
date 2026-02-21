import "./WarehousesFormEdit.scss";
import axios from "axios";
import Typography from "../../components/Typography/Typography.jsx";
import FormFields from "../../components/FormFields/FormFields.jsx";
import Button from "../../components/Button/Button.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import { validateEmail, validatePhone, removeErrors, formatPhoneInput, isFormValid } from "../../utils/formValidation.js";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { patchUpdate, fetchUpdate } from "../../utils/apiRequests.js";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

// This useEffect manages all potential types
// Include field name below if you want the field to be required or validated,
// Set intial error state to empty string
// FormFields set name = id
const WarehousesForm = ({setWarehouses, warehouses}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const goToInventories = () => navigate("/warehouses");
    const [formData, setFormData] = useState({
        id: "",
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
        contact_phone: "",
        contact_email: "",
    });

    useEffect(() => {
        const fetchWarehouses = async () => {
            try {
                const res = await axios.get(`${baseUrl}/warehouses/${id}`);
                setFormData({...res.data});
            } catch (err) {
                console.error('Failed to fetch warehouses', err);
            }
        };

        fetchWarehouses();
    }, []);

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
        if (!isFormValid(formData)) {
            return;
        } else if (isFormValid(formData)) {
            const rawData = new FormData(e.currentTarget);
            const serverData = Object.fromEntries(rawData.entries());
            patchUpdate(`warehouses/${id}`, serverData, setWarehouses, `warehouses/${id}`);
            navigate("/warehouses");
        };
    };



    return (
        <form
            onSubmit={handleSubmit}
            className="warehouses-form__contain-all"
        >
            <section className="warehouses-form__form-header">
                <PageHeader headerText="Edit Warehouse" onBack={goToInventories} />
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
                    Save
                </Button>
            </section>
        </form>
    );
};

export default WarehousesForm;