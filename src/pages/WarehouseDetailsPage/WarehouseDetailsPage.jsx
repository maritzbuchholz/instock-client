import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from "../../components/Typography/Typography.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
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
        return <p>Loading warehouses...</p>;
    }

    if (!warehouse) {
        return <p>Warehouse not found.</p>;
    }

    return (
        <section className="warehouse-details">
            <div className="warehouses__content">
                <PageHeader headerText={warehouse.warehouse_name} variant="edit" />
            </div>
        </section>
    );
};

export default WarehouseDetailsPage;