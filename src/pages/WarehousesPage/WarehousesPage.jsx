import "./WarehousesPage.scss";
import Typography from "../../components/Typography/Typography.jsx";
import TableWarehouses from "../../components/TablesWarehouses/TablesWarehouses.jsx";
import TableHeader from "../../components/TablesHeader/TablesHeader.jsx";

const WarehousesPage = ({ warehouses }) => {
    return (
        <section className="warehouses">
            <TableHeader headerText="Warehouses" buttonText="+ Add New Warehouse" />

            <div className="warehouses__content">
                <TableWarehouses warehouses={warehouses} />
            </div>
        </section>
    );
};

export default WarehousesPage;