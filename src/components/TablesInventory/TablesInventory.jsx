import { Link } from "react-router-dom";
import Iconography from "../Iconography/Iconography";
import TableCard from "../TableCard/TableCard";
import TableCardField from "../TableCard/TableCardField";
import TableCardActions from "../TableCard/TableCardActions";
import TablesHeader from "../TablesHeader/TablesHeader";
import TableRowHeader from "../TableRowHeader/TableRowHeader";
import Tags from "../Tags/Tags";
import Typography from "../Typography/Typography";
import "./TablesInventory.scss";

const TablesInventory = ({ inventory, setInventory, openDeleteModal }) => {
    if (!inventory || inventory.length === 0) {
        return <p>No inventory available.</p>;
    }

    const headers = [
        { label: "INVENTORY ITEM", key: "item_name", flex: 1.25 },
        { label: "CATEGORY", key: "category", flex: 1 },
        { label: "STATUS", key: "status", flex: 1 },
        { label: "QTY", key: "quantity", flex: 0.5 },
        { label: "WAREHOUSE", key: "warehouse_name", flex: 1 }
    ];

    return (
        <div className="inventory-table-wrapper">
            <TablesHeader headerText="Inventory" buttonText="+ Add New Item" />
            <TableRowHeader headers={headers} data={inventory} setData={setInventory} />
            <div className="inventory-table">
                {inventory.map((item) => (
                    <TableCard key={item.id} className="inventory-table__card">
                        <TableCardField label="INVENTORY ITEM" className="card__field--alt inventory-table__inventory">
                            <Link to={`/inventories/${item.id}`} className="inventory-table__link">
                                <Typography variant="p2" className="card__value-text">{item.item_name}</Typography>
                                <Iconography name="chevronRight" className="inventory-link__icon" />
                            </Link>
                        </TableCardField>

                        <TableCardField label="CATEGORY" className="inventory-table__category">
                            <Typography variant="p2">{item.category}</Typography>
                        </TableCardField>

                        <TableCardField label="STATUS" className="inventory-table__status">
                            <Tags status={item.status} />
                        </TableCardField>

                        <TableCardField label="QTY" className="inventory-table__qty">
                            <Typography variant="p2">{item.quantity}</Typography>
                        </TableCardField>

                        <TableCardField label="WAREHOUSE" className="inventory-table__warehouse">
                            <Typography variant="p2">{item.warehouse_name}</Typography>
                        </TableCardField>

                        <TableCardActions
                            editTo={`/inventories/${item.id}/edit`}
                            onDelete={() => openDeleteModal(item)}
                            className="inventory-table__actions"
                        />
                    </TableCard>
                ))}
            </div>
        </div>
    );
};

export default TablesInventory;