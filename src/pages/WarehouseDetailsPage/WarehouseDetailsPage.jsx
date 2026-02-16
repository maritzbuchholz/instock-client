import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDeleteModal } from "../../hooks/useDeleteModal.js"
import { fetchUpdate } from "../../utils/utils.js";
import Typography from "../../components/Typography/Typography.jsx";
import TablesWarehouse from "../../components/TablesWarehouse/TablesWarehouse.jsx";
import DeleteModal from "../../components/DeleteModal/DeleteModal.jsx";
import "./WarehouseDetailsPage.scss";

const WarehouseDetailsPage = ({ warehouses, setWarehouses, inventory, setInventory }) => {

    const { id } = useParams();
    const [warehouse, setWarehouse] = useState(null);

    useEffect(() => {
        if (warehouses && warehouses.length > 0) {
            const found = warehouses.find((w) => String(w.id) === id);
            setWarehouse(found || null);
        }
    }, [warehouses, id]);

    const { modalOpen, deleteItem, openDeleteModal, closeDeleteModal, confirmDelete } =
        useDeleteModal(() => fetchUpdate("inventories", setInventory), "inventories");

    if (!warehouses || warehouses.length === 0) {
        return <Typography variant="p1" className="message">Loading warehouses...</Typography>;
    }

    if (!warehouse) {
        return <Typography variant="p1" className="message">Warehouse not found.</Typography>;
    }

    return (
        <section className="warehouse-details">
            <TablesWarehouse
                warehouses={warehouses}
                setWarehouses={setWarehouses}
                warehouse={warehouse}
                inventory={inventory}
                setInventory={setInventory}
                openDeleteModal={openDeleteModal} />
            {modalOpen && deleteItem && (
                <DeleteModal
                    deleteItem={deleteItem.item_name}
                    variant="inventory"
                    onCancel={closeDeleteModal}
                    onConfirm={confirmDelete}
                />
            )}
        </section>
    );
};

export default WarehouseDetailsPage;