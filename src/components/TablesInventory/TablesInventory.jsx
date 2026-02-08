import { Link } from "react-router-dom";
import Iconography from "../Iconography/Iconography";
import TableCard from "../TableCard/TableCard"; 
import TableCardField from "../TableCard/TableCardField";
import TableCardActions from "../TableCard/TableCardActions";
import Tags from "../Tags/Tags";
import Typography from "../Typography/Typography";
import "./TablesInventory.scss";

const TablesInventory = ({ inventory }) => {
    if (!inventory || inventory.length === 0) {
        return <p>No inventory available.</p>;
    }

    return (
        <section className="inventory-table">
            <header className="inventory-table__header">
                <div className="inventory-table__column-label inventory-table__column-label--item">
                    <Typography variant="h4">INVENTORY ITEM</Typography>
                    <Iconography name="sort" className="inventory-table__sort-icon" />
                </div>
                <div className="inventory-table__column-label inventory-table__column-label--category">
                    <Typography variant="h4">CATEGORY</Typography>
                    <Iconography name="sort" className="inventory-table__sort-icon" />
                </div>
                <div className="inventory-table__column-label inventory-table__column-label--status">
                    <Typography variant="h4">STATUS</Typography>
                    <Iconography name="sort" className="inventory-table__sort-icon" />
                </div>
                <div className="inventory-table__column-label inventory-table__column-label--qty">
                    <Typography variant="h4">QTY</Typography>
                    <Iconography name="sort" className="inventory-table__sort-icon" />
                </div>
                <div className="inventory-table__column-label inventory-table__column-label--warehouse">
                    <Typography variant="h4">WAREHOUSE</Typography>
                    <Iconography name="sort" className="inventory-table__sort-icon" />
                </div>
                <div className="inventory-table__column-label inventory-table__column-label--actions">
                    <Typography variant="h4">ACTIONS</Typography>
                </div>
            </header>

            <main className="inventory-table__body">
                {inventory.map((item) => (
                    <TableCard key={item.id} className="inventory-table__row">
                        <TableCardField className="inventory-table__field--item">
                            <Link to={`/inventory/${item.id}`} className="inventory-link">
                                {item.item_name}
                                <Iconography name="chevronRight" className="inventory-link__icon" />
                            </Link>
                        </TableCardField>

                        <TableCardField className="inventory-table__field--category">
                            {item.category}
                        </TableCardField>

                        <TableCardField className="inventory-table__field--status">
                            <Tags status={item.status} />
                        </TableCardField>

                        <TableCardField className="inventory-table__field--qty">
                            {item.quantity}
                        </TableCardField>

                        <TableCardField className="inventory-table__field--warehouse">
                            {item.warehouse_name}
                        </TableCardField>

                        <TableCardActions
                            editTo={`/inventory/${item.id}/edit`}
                            onDelete={() => console.log("Delete item", item.id)}
                            className="inventory-table__field--actions"
                        />
                    </TableCard>
                ))}
            </main>
        </section>
    );
};

export default TablesInventory;