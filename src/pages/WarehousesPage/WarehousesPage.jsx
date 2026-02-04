import "./WarehousesPage.scss";
import Typography from "../../components/Typography/Typography.jsx";

const WarehousesPage = () => {
    return (
        <section className="warehouses">
            <div className="warehouses__header">
                <Typography variant="h1">Warehouses</Typography>
            </div>

            <div className="warehouses__content">
                <Typography variant="p1">Warehouse list will be displayed here.</Typography>
            </div>
        </section>
    );
};

export default WarehousesPage;