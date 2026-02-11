import Typography from "../Typography/Typography";
import "./WarehouseDetails.scss";

const WarehouseDetails = ({ warehouse }) => {
    return (
        <div className="warehouse-details__header">
            <div className="warehouse-details__field warehouse-details__address">
                <Typography variant="h4" className="warehouse-details__title">WAREHOUSE ADDRESS:</Typography>
                <Typography variant="p2" className="warehouse-details__value">
                    {warehouse.address}, {warehouse.city}, {warehouse.country}
                </Typography>
            </div>
            <div className="warehouse-details__contact-wrapper">
                <div className="warehouse-details__field warehouse-details__name">
                    <Typography variant="h4" className="warehouse-details__title">CONTACT NAME:</Typography>
                    <Typography variant="p2" className="warehouse-details__value">
                        <span>{warehouse.contact_name}</span>
                        <span>{warehouse.contact_position}</span>
                    </Typography>
                </div>

                <div className="warehouse-details__field warehouse-details__info">
                    <Typography variant="h4" className="warehouse-details__title">CONTACT INFORMATION:</Typography>
                    <Typography variant="p2" className="warehouse-details__value">
                        <span>{warehouse.contact_phone}</span>
                        <span>{warehouse.contact_email}</span>
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default WarehouseDetails;