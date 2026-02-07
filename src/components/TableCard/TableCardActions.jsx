import { Link } from "react-router-dom";
import editIcon from "../../assets/Icons/edit24px.svg";
import deleteIcon from "../../assets/Icons/deleteoutline24px.svg";

const TableCardActions = ({ editTo, onDelete, className = "" }) => {
    return (
        <div className={`card__actions ${className}`}>
            <Link to={editTo} className="card__icon-action" aria-label="Edit">
                <img src={editIcon} alt="" />
            </Link>

            <button
                type="button"
                className="card__icon-action"
                aria-label="Delete"
                onClick={onDelete}
            >
                <img src={deleteIcon} alt="" />
            </button>
        </div>
    );
};

export default TableCardActions;
