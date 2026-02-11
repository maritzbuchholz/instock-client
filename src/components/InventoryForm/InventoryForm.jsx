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
                    <FormFields inputName="Description"/>
                    <FormFields inputName="Category"/>
                </div>

                <div className="inventory-form-availability">
                    <Typography variant="h2">Item Availability</Typography>
                    <FormFields inputName="Status"/>
                    <FormFields inputName="Warehouse"/>
                </div>
                <div className="inventory-form__buttons">
                <Button variant = "secondary">Cancel</Button>
                <Button variant = "primary">+ Add Item</Button>
                </div>
            </form>
            
        </section>
     
    )
}

export default InventoryForm;