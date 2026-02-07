import { Link } from "react-router-dom";
import editIcon from "../../assets/Icons/edit-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";

const TableCardActions = ({ editTo, onDelete }) => {
    return (
        <div className="card__actions">
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
