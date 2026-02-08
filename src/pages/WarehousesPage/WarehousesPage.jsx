import "./WarehousesPage.scss";
import Typography from "../../components/Typography/Typography.jsx";
import TableWarehouses from "../../components/TablesWarehouses/TablesWarehouses.jsx";

const WarehousesPage = ({ warehouses }) => {
    return (
        <section className="warehouses">
            <div className="warehouses__content">
                <TableWarehouses warehouses={warehouses} />
            </div>
        </section>
    );
};

export default WarehousesPage;