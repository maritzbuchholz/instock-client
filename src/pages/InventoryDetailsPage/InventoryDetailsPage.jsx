import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from "../../components/Typography/Typography.jsx";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails.jsx";
import "./InventoryDetailsPage.scss";

const InventoryDetailsPage = ({ inventory }) => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        if (inventory && inventory.length > 0) {
            const found = inventory.find((i) => String(i.id) === id);
            setItem(found || null);
        }
    }, [inventory, id]);

    if (!inventory || inventory.length === 0) {
        return <Typography variant="p1" className="message">Loading inventory...</Typography>;
    }

    if (!item) {
        return <Typography variant="p1" className="message">Inventory item not found.</Typography>;
    }

    return (
        <section className="inventory-details">
            <div className="inventory-details__content">
                <InventoryDetails item={item} />
            </div>
        </section>
    );
};

export default InventoryDetailsPage;