import "./InventoryPage.scss";
import Typography from "../../components/Typography/Typography.jsx";
import TablesInventory from "../../components/TablesInventory/TablesInventory.jsx";

const InventoryPage = ({ inventory }) => {
    return (
        <section className="inventory">
            <div className="inventory__header">
                <Typography variant="h1">Inventory</Typography>
            </div>
            <TablesInventory inventory={inventory} />
        </section>
    );
};

export default InventoryPage;