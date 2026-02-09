import Iconography from "../../components/Iconography/Iconography.jsx";
import Typography from "../Typography/Typography.jsx";
import "./TableRowHeader.scss";

/* 
* Receives an array of objects for table headers with the label and flex ratio and returns the row header with the sort attached 
  and an appended final column called ACTIONS. 
* Also passes an onSort function as prop which will be called with header as parameter for the sort function
  of each row header as defined in the parent component.
* Do not pass ACTIONS column header in the array. Currently ACTIONS is set to have a flex ratio of 0.75. We can update this if needed.
* EXAMPLE HEADERS ARRAY
const headers = [
  { label: "Warehouse", flex: 1.5 },
  { label: "Contact Name", flex: 1 },
  { label: "Address", flex: 1 },
  { label: "Contact Info", flex: 1.5 }
];
*/

const TableRowHeader = ({ headers = [], onSort }) => {
    return (
        <div className="table-row-header">
            {headers.map(({ label, flex }, index) => (
                <div
                    key={index}
                    className="table-row-header__cell"
                    style={{ flex: flex }}
                >
                    <span className="table-row-header__label">
                        <Typography variant="h4">{label}</Typography></span>
                    <button
                        type="button"
                        className="table-row-header__sort-button"
                        aria-label={`Sort by ${label}`}
                        onClick={() => onSort(label)}
                    >
                        <Iconography
                            name="sort"
                            className="table-row-header__sort-icon"
                        />
                    </button>
                </div>
            ))}

            <div className="table-row-header__cell table-row-header__cell--actions" style={{ flex: 0.75 }}>
                <span className="table-row-header__label table-row-header__label--actions">
                    <Typography variant="h4">ACTIONS</Typography>
                </span>
            </div>
        </div>
    );
};

export default TableRowHeader;
