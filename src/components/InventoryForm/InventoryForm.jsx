import "./InventoryForm.scss";
import { Link, useNavigate } from "react-router-dom";
import Typography from "../Typography/Typography.jsx";
import FormFields from "../FormFields/FormFields.jsx";
import Button from "../Button/Button.jsx";
import { useState, useEffect } from "react";
import { fetchUpdate } from "../../utils/apiRequests.js";

const InventoryForm = ({ btn_primary, btn_secondary, onSubmit }) => {

    const navigate = useNavigate();
    const goToInventories = () => navigate("/inventories");

    const [warehouses, setWarehouses] = useState([]);
    useEffect(() => {
        fetchUpdate("warehouses", setWarehouses);
    }, []);

    const [categories, setCategories] = useState([]);
    useEffect(()=> {
        fetchUpdate("categories", setCategories)
    }, []);

    const [formData, setFormData] = useState({
        item_name: "",
        description: "",
        category: "",
        status: "",
        quantity: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => {
            const updated = { ...prev, [name]: value };

            if (name === "status" && value === "Out of Stock") {
                updated.quantity = 0;
            }

            return updated;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formattedData = {
            ...formData,
            status: formData.status === "inStock" ? "In Stock" : "Out of Stock", // for api to recognize
            quantity: formData.status === "outOfStock" ? 0 : Number(formData.quantity), // converts a string to a number, additional valiation
        };
        onSubmit(formattedData);
    }

    return (

        <section className="inventory-form">
            {/* <div className="inventories-form__header">
                <Typography variant="h1">Add New Warehouse</Typography>
            </div> */}

            <form className="inventory-form__wrapper" onSubmit={handleSubmit}>
                <div className="inventory-form__fields">
                <div className="inventory-form-details">
                    <Typography variant="h2">Item Details</Typography>
                    <FormFields htmlFor="item_name" inputName="Item Name" value={formData.item_name} onChange={handleChange} />
                    <FormFields htmlFor="description" type="text_area" inputName="Description" placeholder="Please enter a brief item description..." value={formData.description} onChange={handleChange} />
                    <FormFields htmlFor="category" inputName="Category" type="dropdown" value={formData.category} onChange={handleChange} />
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
                    <FormFields
                        htmlFor="warehouse_id"
                        inputName="Warehouse"
                        type="dropdown"
                        value={formData.warehouse_id}
                        onChange={handleChange}
                        options={warehouses.map((warehouse) => ({
                            label: warehouse.warehouse_name,
                            value: warehouse.id,
                        }))}
                    />

                </div>

                </div>

                <div className="inventory-form__buttons">
                    <Button variant="secondary" isLink={true} to={"/inventories"}>{btn_secondary}</Button>
                    <Button variant="primary" type="submit"> {btn_primary}</Button>
                </div>
            </form>
        </section>

    )
}

export default InventoryForm;