import Typography from "../../components/Typography/Typography.jsx";
import Iconography from "../../components/Iconography/Iconography.jsx";
import Button from "../../components/Button/Button.jsx"
import "./TablesHeader.scss";

const TablesHeader = ({ headerText, buttonText, onButtonClick }) => {
    return (
        <div className="table-header">
            <div className="table-header__title">
                <Typography variant="h1">{headerText}</Typography>
            </div>

            <div className="table-header__search">
                <input
                    type="text"
                    className="table-header__search-input"
                    placeholder="Search..."
                />
                <Iconography name="search" className="table-header__search-icon" />
            </div>

            <Button
                type="button"
                className="table-header__button"
                variant="primary"
                onClick={onButtonClick}
            >
                {buttonText}
            </Button>
        </div>
    );
};

export default TablesHeader;
