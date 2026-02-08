import { Link } from "react-router-dom";
import Iconography from "../Iconography/Iconography";

const TableCardActions = ({ editTo, onDelete, className = "" }) => {
    return (
        <div className={`card__actions ${className}`}>
            <button
                type="button"
                className="card__icon-action"
                aria-label="Delete"
                onClick={onDelete}
            >
                <Iconography name="delete" />
            </button>

            <Link to={editTo} className="card__icon-action" aria-label="Edit">
                <Iconography name="edit" />
            </Link>
        </div>
    );
};

export default TableCardActions;
