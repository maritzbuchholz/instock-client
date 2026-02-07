import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage.jsx";
import WarehousesForm from "./pages/WarehousesForm/WarehousesForm.jsx";
// import Navigation from "./components/Navigation/Navigation.jsx";
// import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage.jsx";
// import InventoriesPage from "./pages/InvetoriesPage/InventoriesPage.jsx";
// import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetails.jsx";

import Footer from "./components/Footer/Footer.jsx";

const App = () => {

    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const [warehouses, setWarehouses] = useState([]);
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const [warehouseResponse, inventoryResponse] = await Promise.all([
                    axios.get(`${baseUrl}/warehouses`),
                    axios.get(`${baseUrl}/inventory`)
                ]);

                setWarehouses(warehouseResponse.data);
                setInventory(inventoryResponse.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchInitialData();
    }, []);

    return (
        <BrowserRouter>
            {/* <Navigation />  */}

            <main>
                <Routes>
             
                <Route path="/warehouses/form" element={<WarehousesForm />} />
                    <Route path="/" element={<Navigate to="/warehouses" replace />} />
                    <Route path="/warehouses" element={<WarehousesPage warehouses={warehouses} />} />
                    {/* <Route path="/warehouses/:id" element={<WarehouseDetailsPage warehouses={warehouses} />} /> */}
                    {/* <Route path="/inventory" element={<InventoriesPage inventory={inventory} />} />
                    <Route path="/inventory/:id" element={<InventoryDetailsPage inventory={inventory} />} /> */}
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    );
}

export default App;