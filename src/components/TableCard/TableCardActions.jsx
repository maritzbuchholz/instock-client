import { Link } from "react-router-dom";
import Icon from "../Iconography/Iconography";
import editIcon from "../../assets/Icons/edit24px.svg";
import deleteIcon from "../../assets/Icons/deleteoutline24px.svg";

const TableCardActions = ({ editTo, onDelete, className = "" }) => {
    return (
        <div className={`card__actions ${className}`}>
            <Link to={editTo} className="card__icon-action" aria-label="Edit">
                <Icon name="edit" />
            </Link>

            <button
                type="button"
                className="card__icon-action"
                aria-label="Delete"
                onClick={onDelete}
            >
                <Icon name="delete" />
            </button>
        </div>
    );
};

export default TableCardActions;
