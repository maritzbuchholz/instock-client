import "./AddInventory.scss";
import Typography from "../../components/Typography/Typography.jsx";
import InventoryForm from "../../components/InventoryForm/InventoryForm.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import TablesHeader from "../../components/TablesHeader/TablesHeader.jsx";

const AddInventory = ( {inventory} ) => {
    return (
        <div>
      
        <PageHeader headerText = "Add New Inventory Item"/>
       <InventoryForm />
      
       </div>
    )
}

export default AddInventory;