import "./WarehousesPage.scss";
import Typography from "../../components/Typography/Typography.jsx";
import TableWarehouses from "../../components/TablesWarehouses/TablesWarehouses.jsx";

const WarehousesPage = () => {

    const warehouses = [
        {
            "id": 1,
            "warehouse_name": "Manhattan",
            "address": "503 Broadway",
            "city": "New York",
            "country": "USA",
            "contact_name": "Parmin Aujla",
            "contact_position": "Warehouse Manager",
            "contact_phone": "+1 (646) 123-1234",
            "contact_email": "paujla@instock.com",
            "created_at": "2024-09-12T03:17:28.000Z",
            "updated_at": "2024-09-12T03:17:28.000Z"
        },
        {
            "id": 2,
            "warehouse_name": "Washington",
            "address": "33 Pearl Street SW",
            "city": "Washington",
            "country": "USA",
            "contact_name": "Greame Lyon",
            "contact_position": "Warehouse Manager",
            "contact_phone": "+1 (646) 123-1234",
            "contact_email": "glyon@instock.com",
            "created_at": "2024-09-12T03:17:28.000Z",
            "updated_at": "2024-09-12T03:17:28.000Z"
        },
        {
            "id": 3,
            "warehouse_name": "Jersey",
            "address": "300 Main Street",
            "city": "New Jersey",
            "country": "USA",
            "contact_name": "Brad MacDonald",
            "contact_position": "Warehouse Manager",
            "contact_phone": "+1 (646) 123-1234",
            "contact_email": "bmcdonald@instock.com",
            "created_at": "2024-09-12T03:17:28.000Z",
            "updated_at": "2024-09-12T03:17:28.000Z"
        },
        {
            "id": 4,
            "warehouse_name": "SF",
            "address": "890 Brannnan Street",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Gary Wong",
            "contact_position": "Warehouse Manager",
            "contact_phone": "+1 (646) 123-1234",
            "contact_email": "gwong@instock.com",
            "created_at": "2024-09-12T03:17:28.000Z",
            "updated_at": "2024-09-12T03:17:28.000Z"
        },
        {
            "id": 5,
            "warehouse_name": "Santa Monica",
            "address": "520 Broadway",
            "city": "Santa Monica",
            "country": "USA",
            "contact_name": "Sharon Ng",
            "contact_position": "Warehouse Manager",
            "contact_phone": "+1 (646) 123-1234",
            "contact_email": "sng@instock.com",
            "created_at": "2024-09-12T03:17:28.000Z",
            "updated_at": "2024-09-12T03:17:28.000Z"
        },
        {
            "id": 6,
            "warehouse_name": "Seattle",
            "address": "1201 Third Avenue",
            "city": "Seattle",
            "country": "USA",
            "contact_name": "Daniel Bachu",
            "contact_position": "Warehouse Manager",
            "contact_phone": "+1 (646) 123-1234",
            "contact_email": "dbachu@instock.com",
            "created_at": "2024-09-12T03:17:28.000Z",
            "updated_at": "2024-09-12T03:17:28.000Z"
        },
        {
            "id": 7,
            "warehouse_name": "Miami",
            "address": "2650 NW 5th Avenue",
            "city": "Miami",
            "country": "USA",
            "contact_name": "Alana Thomas",
            "contact_position": "Warehouse Manager",
            "contact_phone": "+1 (646) 123-1234",
            "contact_email": "athomas@instock.com",
            "created_at": "2024-09-12T03:17:28.000Z",
            "updated_at": "2024-09-12T03:17:28.000Z"
        },
        {
            "id": 8,
            "warehouse_name": "Boston",
            "address": "215 Essex Street",
            "city": "Boston",
            "country": "USA",
            "contact_name": "Vanessa Mendoza",
            "contact_position": "Warehouse Manager",
            "contact_phone": "+1 (646) 123-1234",
            "contact_email": "vmendoza@instock.com",
            "created_at": "2024-09-12T03:17:28.000Z",
            "updated_at": "2024-09-12T03:17:28.000Z"
        }
    ]

    return (
        <section className="warehouses">
            <div className="warehouses__header">
                <Typography variant="h1">Warehouses</Typography>
            </div>

            <TableWarehouses warehouses={warehouses} />

            <div className="warehouses__content">
                <Typography variant="p1">Warehouse list will be displayed here.</Typography>
            </div>
        </section>
    );
};

export default WarehousesPage;