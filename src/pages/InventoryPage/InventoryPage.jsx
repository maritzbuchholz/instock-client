import { useDeleteModal } from "../../hooks/useDeleteModal.js"
import { fetchUpdate } from "../../utils/utils.js";
import TablesInventory from "../../components/TablesInventory/TablesInventory.jsx";
import DeleteModal from "../../components/DeleteModal/DeleteModal.jsx";
import "./InventoryPage.scss";

const InventoryPage = ({ inventory, setInventory }) => {
    const { modalOpen, deleteItem, openDeleteModal, closeDeleteModal, confirmDelete } =
        useDeleteModal(() => fetchUpdate("inventories", setInventory), "inventories");

        return (
        <section className="inventory">
            <TablesInventory 
                inventory={inventory} 
                setInventory={setInventory} 
                openDeleteModal={openDeleteModal} 
            />

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

export default InventoryPage;