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
                    isActive ? "nav_tab nav__tab--active"
                : "nav_tab"
                }
            >
            Warehouses
            </NavLink>

            <NavLink
                to="/inventory"
                className={({  isActive  }) =>
                    isActive ? "nav_tab nav__tab--active"
                : "nav_tab"
                }
            >
            Inventory
            </NavLink>

        </nav>

       </header>
    )

};

export default Navigation;
