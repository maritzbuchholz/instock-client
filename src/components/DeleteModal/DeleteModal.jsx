import Typography from "../../components/Typography/Typography.jsx";
import Button from "../Button/Button.jsx";
import "./DeleteModal.scss";

const DeleteModal = ({ deleteItem, variant = "warehouse", onCancel, onConfirm }) => { //variants = warehouse, inventory


    const safeVariant = variant == "warehouse" || variant == "inventory" ? variant : "warehouse";

    return (
        <div className="delete-modal__wrapper">
            <div className="delete-modal__content">
                {safeVariant == "warehouse" && (
                    <>
                        <Typography variant="h1" className="delete-modal__Title">Delete {deleteItem} warehouse?</Typography>
                        <Typography variant="p1" className="delete-modal__text">Please confirm that you’d like to delete the {deleteItem}
                            warehouse from the list of warehouses.You won’t be able to undo this action.</Typography>
                    </>
                )}
                {safeVariant == "inventory" && (
                    <>
                        <Typography variant="h1" className="delete-modal__Title">Delete {deleteItem} inventory item?</Typography>
                        <Typography variant="p1" className="delete-modal__text">Please confirm that you’d like to delete {deleteItem} from
                            the inventory list. You won’t be able to undo this action.</Typography>
                    </>
                )}
            </div>
            <div className="delete-modal__actions">
                <Button variant="secondary" onClick={onCancel}>Cancel</Button>
                <Button variant="delete" onClick={onConfirm}>Delete</Button>
            </div>
        </div>
    );
};

export default DeleteModal;