import { Link } from "react-router-dom";
import Icon from "../Iconography/Iconography";

const TableCardActions = ({ editTo, onDelete }) => {
    return (
        <div className="card__actions">
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
