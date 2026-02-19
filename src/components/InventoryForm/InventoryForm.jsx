import "./InventoryForm.scss";
import { Link, useNavigate } from "react-router-dom";
import Typography from "../Typography/Typography.jsx";
import FormFields from "../FormFields/FormFields.jsx";
import Button from "../Button/Button.jsx";
import { useState } from "react";

const InventoryForm = ( {btn_primary, btn_secondary} ) => {

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
                    <FormFields htmlFor="item_name" inputName="Item Name" />
                    <FormFields htmlFor="description" type="text_area" inputName="Description" placeholder="Please enter a brief item description..." />
                    <FormFields htmlFor="category" inputName="Category" type="dropdown" />
                </div>

                <div className="inventory-form-availability">
                    <Typography variant="h2">Item Availability</Typography>
                    <FormFields
                    htmlFor="status" 
                    inputName="Status" 
                    type="radio" 
                    value={formData.status}
                    onChange={handleChange} 
                    options={[
                        { label: "In stock", value: "inStock" },
                        { label: "Out of stock", value: "outOfStock" },
                    ]} />
                    {formData.status === "inStock" && (
                        <FormFields 
                        htmlFor="quantity" 
                        inputName="Quantity"
                        type="numerical" 
                        value={formData.quantity} 
                        onChange={handleChange} />)}
                    <FormFields htmlFor="warehouse" inputName="Warehouse" type="dropdown" />
                </div>

            </form>
            <div className="inventory-form__buttons">
                <Button variant="secondary" isLink = {true} to={"/inventories"}>{btn_secondary}</Button>
                <Button variant="primary"> {btn_primary}</Button>
            </div>
        </section>

    )
}

export default InventoryForm;