import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableCard from "../TableCard/TableCard.jsx";
import TableCardField from "../TableCard/TableCardField.jsx";
import TableCardActions from "../TableCard/TableCardActions.jsx";
import chevronRight from "../../assets/Icons/chevronright24px.svg";

const TableWarehouses = ({ warehouses }) => {
    if (!warehouses || warehouses.length === 0) {
        return <p>No warehouses available.</p>;
    }

    return (
        <div className="warehouse-table">
            {warehouses.map((warehouse) => (
                <TableCard key={warehouse.id} className="warehouse-table__Card">
                    <TableCardField label="WAREHOUSE" className="warehouse-table__field">
                        <Link to={`/warehouses/${warehouse.id}`} className="warehouse-link">
                            {warehouse.warehouse_name}
                            <img
                                src={chevronRight}
                                alt="Chevron Right"
                                className="warehouse-link__icon"
                            />
                        </Link>
                    </TableCardField>

                    <TableCardField label="CONTACT NAME" className="warehouse-table__field">
                        {warehouse.contact_name} ({warehouse.contact_position})
                    </TableCardField>

                    <TableCardField label="ADDRESS" className="warehouse-table__field">
                        {warehouse.address}, {warehouse.city}, {warehouse.country}
                    </TableCardField>

                    <TableCardField label="CONTACT INFORMATION" className="warehouse-table__field">
                        {warehouse.contact_phone} {warehouse.contact_email}
                    </TableCardField>

                    <TableCardActions
                        editTo={`/warehouses/${warehouse.id}/edit`}
                        onDelete={() => console.log("Delete warehouse", warehouse.id)}
                        className="warehouse-table__actions"
                    />
                </TableCard>
            ))}
        </div>
    );
};

export default TableWarehouses;
