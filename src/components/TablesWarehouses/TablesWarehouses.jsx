import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDeleteModal } from "../../hooks/useDeleteModal.js"
import { fetchUpdate } from "../../utils/utils.js";
import Iconography from "../Iconography/Iconography";
import TableCard from "../TableCard/TableCard.jsx";
import TableCardField from "../TableCard/TableCardField.jsx";
import TableCardActions from "../TableCard/TableCardActions.jsx";
import Typography from "../Typography/Typography.jsx";
import TablesHeader from "../../components/TablesHeader/TablesHeader.jsx";
import TableRowHeader from "../../components/TableRowHeader/TableRowHeader.jsx";
import DeleteModal from "../../components/DeleteModal/DeleteModal.jsx";
import "./TablesWarehouses.scss"

const TableWarehouses = ({ warehouses, setWarehouses }) => {
    if (!warehouses || warehouses.length === 0) {
        return <p>No warehouses available.</p>;
    }

    const headers = [
        { label: "WAREHOUSE", key: "warehouse_name", flex: 1.25 },
        { label: "ADDRESS", key: "address", flex: 1 },
        { label: "CONTACT NAME", key: "contact_name", flex: 1 },
        { label: "CONTACT INFORMATION", key: "contact_email", flex: 1.5 } //key is for sorting
    ];

    const navigate = useNavigate();

    const goToAddWarehouse = () => navigate("/warehouses/form/add");

    const { modalOpen, deleteItem, openDeleteModal, closeDeleteModal, confirmDelete } =
        useDeleteModal(() => fetchUpdate("warehouses", setWarehouses), "warehouses");

    return (
        <div className="warehouse-table-wrapper">
            <TablesHeader headerText="Warehouses" buttonText="+ Add New Warehouse" onButtonClick={goToAddWarehouse} />
            <TableRowHeader headers={headers} data={warehouses} setData={setWarehouses} />
            <div className="warehouse-table">
                {warehouses.map((warehouse) => (
                    <TableCard key={warehouse.id} className="warehouse-table__card">
                        <TableCardField label="WAREHOUSE" className="card__field--alt warehouse-table__warehouse">
                            <Link to={`/warehouses/${warehouse.id}`} className="warehouse-table__link">
                                <Typography variant="p2" className="card__value-text">{warehouse.warehouse_name}</Typography>
                                <Iconography name="chevronRight" className="warehouse-link__icon" />
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
                            editTo={`/warehouses/form/${warehouse.id}/edit`}
                            onDelete={() => openDeleteModal(warehouse)}
                            className="warehouse-table__actions"
                        />
                    </TableCard>
                ))}
            </div>
            {modalOpen && deleteItem && (
                <DeleteModal
                    deleteItem={deleteItem.warehouse_name}
                    variant="warehouse"
                    onCancel={closeDeleteModal}
                    onConfirm={confirmDelete}
                />
            )}

        </div>
    );
};

export default TableWarehouses;
