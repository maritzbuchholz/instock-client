import "./EditInventory.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import Typography from "../../components/Typography/Typography.jsx";
import InventoryForm from "../../components/InventoryForm/InventoryForm.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import TablesHeader from "../../components/TablesHeader/TablesHeader.jsx";

const EditInventory = ( {inventory} ) => {

    const navigate = useNavigate();
    const goToInventories = () => navigate("/inventories");
    
    return (
        <div className="edit-inventory__wrapper">
      
    <PageHeader headerText = "Edit Inventory Item" onBack={goToInventories}/>
       <InventoryForm btn_primary="Save" btn_secondary="Cancel"/>
      
       </div>
    )
}

export default EditInventory;