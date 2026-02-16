import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUpdate } from "./utils/apiRequests.js";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage.jsx";
import WarehousesForm from "./pages/WarehousesForm/WarehousesForm.jsx";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage.jsx";
import InventoryPage from "./pages/InventoryPage/InventoryPage.jsx";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AddInventory from "./pages/AddInventory/AddInventory.jsx";
import EditInventory from "./pages/EditInventory/EditInventory.jsx";

const App = () => {

    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const [warehouses, setWarehouses] = useState([]);
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                await fetchUpdate("warehouses", setWarehouses)
                await fetchUpdate("inventories", setInventory)
            } catch (error) {
                console.log(error)
            }
        }
        fetchInitialData();
    }, []);

    return (
        <BrowserRouter>
            <Navigation />
            <main>
                <Routes>
                    <Route path="/" element={<Navigate to="/warehouses" replace />} />
                    <Route path="/warehouses" element={<WarehousesPage warehouses={warehouses} setWarehouses={setWarehouses} />} />
                    <Route path="/warehouses/form/add" element={<WarehousesForm />} />
                    {/* <Route path="/warehouses/form/:id/edit" element={<WarehousesForm />} /> */}
                    <Route path="/inventories" element={<InventoryPage inventory={inventory} setInventory={setInventory} />} />
                    <Route path="/inventories/form/add" element={<AddInventory inventory={inventory} />} />
                    <Route path="/inventories/form/:id/edit" element={<EditInventory inventory={inventory} />} />
                    <Route path="/inventories/:id" element={<InventoryDetailsPage inventory={inventory} />} />
                    <Route path="/warehouses/:id" element={<WarehouseDetailsPage warehouses={warehouses} setWarehouses={setWarehouses} inventory={inventory} setInventory={setInventory} />} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    );
}

export default App;