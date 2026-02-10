import Typography from "../../components/Typography/Typography.jsx";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import "./TablesWarehouse.scss";

const TablesWarehouse = ({ warehouses, setWarehouses, warehouse }) => {
    return (
        <div className="warehouse-inventory-table__wrapper">
            <PageHeader headerText={warehouse.warehouse_name} variant="edit" />
            <WarehouseDetails warehouse={warehouse} />
            <div className="warehouse-inventory-table">

            </div>
        </div>

    );
}

export default TablesWarehouse;