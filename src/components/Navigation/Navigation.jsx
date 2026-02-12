import { NavLink } from "react-router-dom";
import InStockLogo from "../../assets/Logo/InStockLogo.svg";
import "./Navigation.scss";
import Typography from "../Typography/Typography";

const Navigation = () => {
    return (
        <header className = "nav">
            <div className = "nav__logo">
                <img src={InStockLogo} alt="InStock Logo" />
            </div> 

            <nav className = "nav__tabs">
                <NavLink
                    to="/warehouses"
                    className={({  isActive  }) =>
                        isActive ? "nav__tab nav__tab--active"
                    : "nav__tab"
                    }
                >
                Warehouses
                </NavLink>

                <NavLink
                    to="/inventories"
                    className={({  isActive  }) =>
                        isActive ? "nav__tab nav__tab--active"
                    : "nav__tab"
                    }
                >
                Inventory
                </NavLink>

            </nav>

        </header>
    );

};

export default Navigation;
