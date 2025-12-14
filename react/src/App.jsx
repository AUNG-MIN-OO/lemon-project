import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shopping_Cart from "./pages/Shopping_Cart.jsx";
import Checkout from "./pages/Checkout.jsx"
import ProductDetail from "./pages/Product_Detail.jsx";
import Receipt from "./pages/Receipt.jsx";
import Loader from "./components/Loader.jsx";
import {useEffect, useState} from "react";

export default function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simulate app boot time (fonts, images, state)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // adjust if needed

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Shopping_Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/receipt" element={<Receipt />} />
        </Routes>
    );
}
