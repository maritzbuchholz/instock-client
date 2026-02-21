import "./EditInventory.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Typography from "../../components/Typography/Typography.jsx";
import InventoryForm from "../../components/InventoryForm/InventoryForm.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import TablesHeader from "../../components/TablesHeader/TablesHeader.jsx";
import { fetchUpdate, patchUpdate } from "../../utils/apiRequests.js";

const EditInventory = ({ inventory, setInventory }) => {

    const navigate = useNavigate();
    const goToInventories = () => navigate("/inventories");

    const { id } = useParams();
    const [inventoryItem, setInventoryItem] = useState();

    useEffect(() => {
        fetchUpdate(`inventories/${id}`, setInventoryItem);
    }, [id]);


    const handleUpdateInventory = async (formData) => {
        await patchUpdate(`inventories/${id}`, formData, setInventory, "inventories");
        navigate(`/inventories/${id}`);
    };

    return (
        <div className="edit-inventory__wrapper">
            <PageHeader headerText="Edit Inventory Item" onBack={goToInventories} />

            <InventoryForm btn_primary="Save" btn_secondary="Cancel" onSubmit={handleUpdateInventory} initialData={inventoryItem} />

        </div>
    )
}

export default EditInventory;