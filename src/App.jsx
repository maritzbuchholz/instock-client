import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navigation from "./components/Navigation/Navigation.jsx";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage.jsx";
import InventoriesPage from "./pages/InventoriesPage/InventoriesPage.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
    return (
        <BrowserRouter>
            {/* <Navigation />  */}
            
            <main>
                <Routes>
                    <Route path="/" element={<WarehousesPage />} />
                    <Route path="/warehouses" element={<WarehousesPage />} />
                    <Route path="/inventories" element={<InventoriesPage />} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    );
}

export default App;