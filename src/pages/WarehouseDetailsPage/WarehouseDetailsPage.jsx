import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from "../../components/Typography/Typography.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import TablesWarehouse from "../../components/TablesWarehouse/TablesWarehouse.jsx";
import "./WarehouseDetailsPage.scss";

const WarehouseDetailsPage = ({ warehouses, setWarehouses }) => {

    const { id } = useParams();
    const [warehouse, setWarehouse] = useState(null);

    useEffect(() => {
        if (warehouses && warehouses.length > 0) {
            const found = warehouses.find((w) => String(w.id) === id);
            setWarehouse(found || null);
        }
    }, [warehouses, id]);

    if (!warehouses || warehouses.length === 0) {
        return <Typography variant="p1" className="message">Loading warehouses...</Typography>;
    }

    if (!warehouse) {
        return <Typography variant="p1" className="message">Warehouse not found.</Typography>;
    }

    return (
        <section className="warehouse-details">
            <div className="warehouse-details__content">
                <TablesWarehouse warehouses={warehouses} setWarehouses={setWarehouses} warehouse={warehouse} />
            </div>
        </section>
    );
};

export default WarehouseDetailsPage;