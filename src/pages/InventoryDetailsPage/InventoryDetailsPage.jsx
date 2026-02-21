import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Typography from "../../components/Typography/Typography.jsx";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import "./InventoryDetailsPage.scss";
import { fetchUpdate } from "../../utils/apiRequests.js";

const InventoryDetailsPage = ({ inventory }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [item, setItem] = useState(null);

    // useEffect(() => {
    //     if (inventory && inventory.length > 0) {
    //         const found = inventory.find((i) => String(i.id) === id);
    //         setItem(found || null);
    //     }
    // }, [inventory, id]);

    useEffect(() => {
        if (inventory && inventory.length > 0) {
            fetchUpdate(`inventories/${id}`, setItem);
        }
    }, []);

    if (!inventory || inventory.length === 0) {
        return <Typography variant="p1" className="message">Loading inventory...</Typography>;
    }

    if (!item) {
        return <Typography variant="p1" className="message">Inventory item not found.</Typography>;
    }

    const handleBack = () => navigate(`/inventories`);
    const handleEdit = () => navigate(`/inventories/form/${item.id}/edit`);

    return (
        <section className="inventory-details">
            <div className="inventory-details__content">
                <PageHeader
                    headerText={item.item_name}
                    variant="edit"
                    onBack={handleBack}
                    onEdit={handleEdit}
                />
                <InventoryDetails item={item} />
            </div>
        </section>
    );
};

export default InventoryDetailsPage;