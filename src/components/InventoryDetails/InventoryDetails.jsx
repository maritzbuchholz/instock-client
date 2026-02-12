import Typography from "../Typography/Typography";
import Tags from "../Tags/Tags";
// import "./InventoryDetails.scss";

const InventoryDetails = ({ item }) => {
    return (
        <div className="inventory-details__header">
            <div className="inventory-details__field inventory-details__description">
                <div className="inventory-details__group">
                    <Typography variant="h4" className="inventory-details__title">ITEM DESCRIPTION:</Typography>
                    <Typography variant="p2" className="inventory-details__value">
                        {item.description}
                    </Typography>
                </div>
                
                <div className="inventory-details__group">
                    <Typography variant="h4" className="inventory-details__title">CATEGORY:</Typography>
                    <Typography variant="p2" className="inventory-details__value">
                        {item.category}
                    </Typography>
                </div>
            </div>

            <div className="inventory-details__status-wrapper">
                <div className="inventory-details__status-qty-row">
                    <div className="inventory-details__field inventory-details__status">
                        <Typography variant="h4" className="inventory-details__title">STATUS:</Typography>
                        <div className="inventory-details__value">
                            <Tags status={item.status} />
                        </div>
                    </div>

                    <div className="inventory-details__field inventory-details__quantity">
                        <Typography variant="h4" className="inventory-details__title">QUANTITY:</Typography>
                        <Typography variant="p2" className="inventory-details__value">
                            {item.quantity}
                        </Typography>
                    </div>
                </div>

                <div className="inventory-details__field inventory-details__warehouse">
                    <Typography variant="h4" className="inventory-details__title">WAREHOUSE:</Typography>
                    <Typography variant="p2" className="inventory-details__value">
                        {item.warehouse_name}
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default InventoryDetails;