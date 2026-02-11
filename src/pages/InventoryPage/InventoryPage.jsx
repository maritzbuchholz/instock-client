import "./InventoryPage.scss";
import Typography from "../../components/Typography/Typography.jsx";
import TablesInventory from "../../components/TablesInventory/TablesInventory.jsx";

const InventoryPage = ({ inventory, setInventory }) => {
    return (
        <section className="inventory">
            <TablesInventory inventory={inventory} setInventory={setInventory} />
        </section>
    );
};

export default InventoryPage;