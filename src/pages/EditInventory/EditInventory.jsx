import "./EditInventory.scss";
import Typography from "../../components/Typography/Typography.jsx";
import InventoryForm from "../../components/InventoryForm/InventoryForm.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import TablesHeader from "../../components/TablesHeader/TablesHeader.jsx";

const EditInventory = ( {inventory} ) => {
    return (
        <div>
      
        <PageHeader headerText = "Edit Inventory Item"/>
       <InventoryForm />
      
       </div>
    )
}

export default EditInventory;