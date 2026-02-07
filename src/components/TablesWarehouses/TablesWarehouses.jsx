import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card.jsx";
import CardField from "../Card/CardField.jsx";
import CardActions from "../Card/CardActions.jsx";
import chevronRight from "../../assets/Icons/chevronright24px.svg";

const TableWarehouses = ({ warehouses }) => {
    if (!warehouses || warehouses.length === 0) {
        return <p>No warehouses available.</p>;
    }

    return (
        <div className="warehouse-table">
            {warehouses.map((warehouse) => (
                <Card key={warehouse.id} className="warehouse-table__card">
                    <CardField label="WAREHOUSE" className="warehouse-table__field">
                        <Link to={`/warehouses/${warehouse.id}`} className="warehouse-link">
                            {warehouse.warehouse_name}
                            <img
                                src={chevronRight}
                                alt="Chevron Right"
                                className="warehouse-link__icon"
                            />
                        </Link>
                    </CardField>

                    <CardField label="CONTACT NAME" className="warehouse-table__field">
                        {warehouse.contact_name} ({warehouse.contact_position})
                    </CardField>

                    <CardField label="ADDRESS" className="warehouse-table__field">
                        {warehouse.address}, {warehouse.city}, {warehouse.country}
                    </CardField>

                    <CardField label="CONTACT INFORMATION" className="warehouse-table__field">
                        {warehouse.contact_phone} {warehouse.contact_email}
                    </CardField>

                    <CardActions
                        editTo={`/warehouses/${warehouse.id}/edit`}
                        onDelete={() => console.log("Delete warehouse", warehouse.id)}
                        className="warehouse-table__actions"
                    />
                </Card>
            ))}
        </div>
    );
};

export default TableWarehouses;
