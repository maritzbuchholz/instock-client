import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableCard from "../TableCard/TableCard.jsx";
import TableCardField from "../TableCard/TableCardField.jsx";
import TableCardActions from "../TableCard/TableCardActions.jsx";
import chevronRight from "../../assets/Icons/chevronright24px.svg";
import Typography from "../Typography/Typography.jsx";
import TablesHeader from "../../components/TablesHeader/TablesHeader.jsx";
import "./TablesWarehouses.scss"

const TableWarehouses = ({ warehouses }) => {
    if (!warehouses || warehouses.length === 0) {
        return <p>No warehouses available.</p>;
    }

    return (
        <>
            <TablesHeader headerText="Warehouses" buttonText="+ Add New Warehouse" />

            <div className="warehouse-table">
                {warehouses.map((warehouse) => (
                    <TableCard key={warehouse.id} className="warehouse-table__card">
                        <TableCardField label="WAREHOUSE" className="card__field--alt">
                            <Link to={`/warehouses/${warehouse.id}`} className="warehouse-table__link">
                                <Typography variant="p2" className="card__value-text">{warehouse.warehouse_name}</Typography>
                                <img
                                    src={chevronRight}
                                    alt="Chevron Right"
                                    className="warehouse-link__icon"
                                />
                            </Link>
                        </TableCardField>

                        <TableCardField label="CONTACT NAME" >
                            <Typography variant="p2" className="card__value-text">
                                {warehouse.contact_name}
                            </Typography>
                        </TableCardField>

                        <TableCardField label="ADDRESS">
                            <Typography variant="p2" className="card__value-text">
                                {warehouse.address}, {warehouse.city}, {warehouse.country}
                            </Typography>
                        </TableCardField>

                        <TableCardField label="CONTACT INFORMATION">
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
        </>
    );
};

export default TableWarehouses;
