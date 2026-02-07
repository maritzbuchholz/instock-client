import { Link } from "react-router-dom";
import Iconography from "../Iconography/Iconography";
import TableCard from "../TableCard/TableCard"; 
import TableCardField from "../TableCard/TableCardField";
import TableCardActions from "../TableCard/TableCardActions";
import Tags from "../Tags/Tags";
import "./TablesInventory.scss";

const TablesInventory = ({ inventory }) => {
    if (!inventory || inventory.length === 0) {
        return <p>No inventory available.</p>;
    }

    return (
        <div className="inventory-table">
            {inventory.map((item) => (
                <TableCard key={item.id} className="inventory-table__Card">
                    <TableCardField label="INVENTORY ITEM" className="inventory-table__field">
                        <Link to={`/inventory/${item.id}`} className="inventory-link">
                            {item.item_name}
                            <Iconography name="chevronRight" className="inventory-link__icon" />
                        </Link>
                    </TableCardField>

                    <TableCardField label="CATEGORY" className="inventory-table__field">
                        {item.category}
                    </TableCardField>

                    <TableCardField label="STATUS" className="inventory-table__field">
                        <Tags status={item.status} />
                    </TableCardField>

                    <TableCardField label="QTY" className="inventory-table__field">
                        {item.quantity}
                    </TableCardField>

                    <TableCardField label="WAREHOUSE" className="inventory-table__field">
                        {item.warehouse_name}
                    </TableCardField>

                    <TableCardActions
                        editTo={`/inventory/${item.id}/edit`}
                        onDelete={() => console.log("Delete inventory", item.id)}
                        className="inventory-table__actions"
                    />
                </TableCard>
            ))}
        </div>
    );
};

export default TablesInventory;