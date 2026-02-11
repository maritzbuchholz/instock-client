import { Link } from "react-router-dom";
import Typography from "../../components/Typography/Typography.jsx";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import TableCard from "../TableCard/TableCard.jsx";
import TableCardField from "../TableCard/TableCardField.jsx";
import TableCardActions from "../TableCard/TableCardActions.jsx";
import chevronRight from "../../assets/Icons/chevronright24px.svg";
import TableRowHeader from "../../components/TableRowHeader/TableRowHeader.jsx";
import Tags from "../Tags/Tags.jsx";
import "./TablesWarehouse.scss";

const TablesWarehouse = ({ warehouses, setWarehouses, warehouse, inventory, setInventory }) => {

    if (!warehouse) {
        return <p>Warehouse not available</p>;
    }

    const headers = [
        { label: "INVENTORY ITEM", key: "item_name", flex: 1.25 },
        { label: "CATEGORY", key: "category", flex: 1 },
        { label: "STATUS", key: "status", flex: 1 },
        { label: "QUANTITY", key: "quantity", flex: 1.5 },
    ];

    const warehouseInventory = inventory.filter(item => item.warehouse_name === warehouse.warehouse_name)

    return (
        <div className="warehouse-inventory-table__wrapper">
            <PageHeader headerText={warehouse.warehouse_name} variant="edit" />
            <WarehouseDetails warehouse={warehouse} />
            <TableRowHeader headers={headers} warehouses={inventory} setWarehouses={setInventory} />
            <div className="warehouse-inventory-table">
                {warehouseInventory.map((inventory) => (
                    <TableCard key={inventory.id} className="warehouse-inventory-table__card">
                        <TableCardField label="INVENTORY ITEM" className="card__field--alt warehouse-inventory-table__item">
                            <Link to={`/inventory/${inventory.id}`} className="warehouse-inventory-table__link">
                                <Typography variant="p2" className="card__value-text">{inventory.item_name}</Typography>
                                <img
                                    src={chevronRight}
                                    alt="Chevron Right"
                                    className="inventory-link__icon"
                                />
                            </Link>
                        </TableCardField>

                        <TableCardField label="STATUS" className="warehouse-inventory-table__status">
                            <Tags status={inventory.status} />
                        </TableCardField>

                        <TableCardField label="CATEGORY" className="warehouse-inventory-table__category">
                            <Typography variant="p2" className="card__value-text">
                                {inventory.category}
                            </Typography>
                        </TableCardField>

                        <TableCardField label="QUANTITY" className="warehouse-inventory-table__quantity">
                            <Typography variant="p2" className="card__value-text">{inventory.quantity}</Typography>
                        </TableCardField>

                        <TableCardActions
                            editTo={`/inventory/${inventory.id}/edit`}
                            onDelete={() => console.log("Delete inventory", inventory.id)}
                            className="warehouse-inventory-table__actions"
                        />
                    </TableCard>
                ))}
            </div>
        </div>

    );
}

export default TablesWarehouse;