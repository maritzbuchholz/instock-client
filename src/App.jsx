import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Navigation /> 
            
            <main>
                <Routes>
                <Route path="/" element={<WarehousesPage />} />
                <Route path="/warehouses" element={<WarehousesPage />} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    );
}

export default App;