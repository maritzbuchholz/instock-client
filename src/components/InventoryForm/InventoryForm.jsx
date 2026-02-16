import "./InventoryForm.scss";
import { Link, useNavigate } from "react-router-dom";
import Typography from "../Typography/Typography.jsx";
import FormFields from "../FormFields/FormFields.jsx";
import Button from "../Button/Button.jsx";
import { useState } from "react";

const InventoryForm = () => {

    const navigate = useNavigate();
    const goToInventories = () => navigate("/inventories");

    const [formData, setFormData] = useState({
        status: "",
        quantity: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => {
            const updated = { ...prev, [name]: value };

            if (name === "status" && value === "Out of Stock") {
                updated.quantity = "";
            }

            return updated;
        });
    };

    return (

        <section className="inventory-form">
            {/* <div className="inventories-form__header">
                <Typography variant="h1">Add New Warehouse</Typography>
            </div> */}

            <form className="inventory-form__wrapper">
                <div className="inventory-form-details">
                    <Typography variant="h2">Item Details</Typography>
                    <FormFields inputName="Item Name" />
                    <FormFields htmlFor="Description" type="text_area" inputName="Description" placeholder="Please enter a brief item description..." />
                    <FormFields inputName="Category" type="dropdown" />
                </div>

                <div className="inventory-form-availability">
                    <Typography variant="h2">Item Availability</Typography>
                    <FormFields inputName="Status" type="radio" value={formData.status} options={[
                        { label: "In stock", value: "inStock" },
                        { label: "Out of stock", value: "outOfStock" },
                    ]} />
                    {formData.status === "In Stock" && (
                        <FormFields htmlFor="Quantity" inputName="Quantity" value={formData.quantity} onChange={handleChange} />)}
                    <FormFields inputName="Warehouse" type="dropdown" />
                </div>

            </form>
            <div className="inventory-form__buttons">
                <Button variant="secondary" to={"/inventories"}>Cancel</Button>
                <Button variant="primary">+ Add Item</Button>
            </div>

        </section>

    )
}

export default InventoryForm;