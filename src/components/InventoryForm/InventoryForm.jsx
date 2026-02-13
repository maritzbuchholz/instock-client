import "./InventoryForm.scss";
import Typography from "../../components/Typography/Typography.jsx";
import FormFields from "../../components/FormFields/FormFields.jsx";
import Button from "../Button/Button.jsx";

const InventoryForm = () => {
    return (
       
  <section className="inventory-form">
            {/* <div className="inventories-form__header">
                <Typography variant="h1">Add New Warehouse</Typography>
            </div> */}

            <form className="inventory-form__wrapper">
                <div className="inventory-form-details">
                    <Typography variant="h2">Item Details</Typography>
                    <FormFields inputName="Item Name"/>
                    <FormFields htmlFor="Description" type="text_area" inputName="Description" placeholder="Please enter a brief item description..."/>
                    <FormFields inputName="Category" type="dropdown"/>
                </div>

                <div className="inventory-form-availability">
                    <Typography variant="h2">Item Availability</Typography>
                    <FormFields inputName="Status" type="radio" options={[
                        { label: "In stock", value: "inStock" },
                        { label: "Out of stock", value: "outOfStock" },
                        ]}/>
                    <FormFields inputName="Warehouse" type="dropdown"/>
                </div>
                
            </form>
            <div className="inventory-form__buttons">
                <Button variant = "secondary">Cancel</Button>
                <Button variant = "primary">+ Add Item</Button>
                </div>
            
        </section>
     
    )
}

export default InventoryForm;