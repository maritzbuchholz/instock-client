import "./InventoriesForm.scss";
import Typography from "../../components/Typography/Typography.jsx";
import FormFields from "../../components/FormFields/FormFields.jsx";

const InventoriesForm = () => {
    return (
        <div className = "inventories-form__card">
  <section className="inventories-form">
            <div className="inventories-form__header">
                <Typography variant="h1">Add New Warehouse</Typography>
            </div>

            <form className="inventories-form__wrapper">
                <div className="inventories-form-details">
                    <Typography variant="h2">Item Details</Typography>
                    <FormFields inputName="Item Name"/>
                    <FormFields inputName="Description"/>
                    <FormFields inputName="Category"/>
                </div>

                <div className="warehouses-form-availability">
                    <Typography variant="h2">Item Availability</Typography>
                    <FormFields inputName="Status"/>
                    <FormFields inputName="Warehouse"/>
                </div>
            </form>
            
        </section>
        </div>
    )
}

export default InventoriesForm;