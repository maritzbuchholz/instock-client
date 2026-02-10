import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableCard from "../TableCard/TableCard.jsx";
import TableCardField from "../TableCard/TableCardField.jsx";
import TableCardActions from "../TableCard/TableCardActions.jsx";
import chevronRight from "../../assets/Icons/chevronright24px.svg";
import Typography from "../Typography/Typography.jsx";
import TablesHeader from "../../components/TablesHeader/TablesHeader.jsx";
import TableRowHeader from "../../components/TableRowHeader/TableRowHeader.jsx";
import "./TablesWarehouses.scss"

const TableWarehouses = ({ warehouses }) => {
    if (!warehouses || warehouses.length === 0) {
        return <p>No warehouses available.</p>;
    }

    const headers = [
        { label: "WAREHOUSE", flex: 1.25 },
        { label: "ADDRESS", flex: 1 },
        { label: "CONTACT NAME", flex: 1 },
        { label: "CONTACT INFORMATION", flex: 1.5 }
    ];

    return (
        <div className="warehouse-table-wrapper">
            <TablesHeader headerText="Warehouses" buttonText="+ Add New Warehouse" />
            <TableRowHeader headers={headers} />
            <div className="warehouse-table">
                {warehouses.map((warehouse) => (
                    <TableCard key={warehouse.id} className="warehouse-table__card">
                        <TableCardField label="WAREHOUSE" className="card__field--alt warehouse-table__warehouse">
                            <Link to={`/warehouses/${warehouse.id}`} className="warehouse-table__link">
                                <Typography variant="p2" className="card__value-text">{warehouse.warehouse_name}</Typography>
                                <img
                                    src={chevronRight}
                                    alt="Chevron Right"
                                    className="warehouse-link__icon"
                                />
                            </Link>
                        </TableCardField>

                        <TableCardField label="CONTACT NAME" className="warehouse-table__name">
                            <Typography variant="p2" className="card__value-text">
                                {warehouse.contact_name}
                            </Typography>
                        </TableCardField>

                        <TableCardField label="ADDRESS" className="warehouse-table__address">
                            <Typography variant="p2" className="card__value-text">
                                {warehouse.address}, {warehouse.city}, {warehouse.country}
                            </Typography>
                        </TableCardField>

                        <TableCardField label="CONTACT INFORMATION" className="warehouse-table__contact">
                            <Typography variant="p2" className="card__value-text">{warehouse.contact_phone}</Typography>
                            <Typography variant="p2" className="card__value-text">{warehouse.contact_email}</Typography>
                        </TableCardField>

                        <TableCardActions
                            editTo={`/warehouses/${warehouse.id}/edit`}
                            onDelete={() => console.log("Delete warehouse", warehouse.id)}
                            className="warehouse-table__actions"
                        />
                    </TableCard>
                ))}
            </div>
        </div>
    );
};

export default TableWarehouses;
