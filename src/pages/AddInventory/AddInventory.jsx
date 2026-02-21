import "./AddInventory.scss";
import { postUpdate } from "../../utils/apiRequests.js";
import { Link, useNavigate } from "react-router-dom";
import Typography from "../../components/Typography/Typography.jsx";
import InventoryForm from "../../components/InventoryForm/InventoryForm.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import TablesHeader from "../../components/TablesHeader/TablesHeader.jsx";

const AddInventory = ( {inventory} ) => {

const navigate = useNavigate();
const goToInventories = () => navigate("/inventories");

const handleAddInventory = async (formData) => {
    try {
        const newInventory = await postUpdate ("inventories", formData);
        navigate(`/inventories/${newInventory.id}`);
    } catch (error) {
        console.error("Error creating inventory:", error);
    }
};


    return (
        <div className="add-inventory__wrapper">
      
        <PageHeader headerText = "Add New Inventory Item" onBack={goToInventories}/>
       <InventoryForm btn_primary="+ Add Item" btn_secondary="Cancel" onSubmit={handleAddInventory}/>
      
       </div>
    )
}

export default AddInventory;