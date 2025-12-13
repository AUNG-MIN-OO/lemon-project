import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shopping_Cart from "./pages/Shopping_Cart.jsx";
import Checkout from "./pages/Checkout.jsx"
import ProductDetail from "./pages/Product_Detail.jsx";
import Receipt from "./pages/Receipt.jsx";

export default function App() {
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
