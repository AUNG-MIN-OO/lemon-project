import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home.jsx";
import Ingredient from "./pages/Ingredient.jsx";
import Shopping_Cart from "./pages/Shopping_Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import ProductDetail from "./pages/Product_Detail.jsx";
import Receipt from "./pages/Receipt.jsx";
import Review from "./pages/Review.jsx";
import Access from "./pages/Access.jsx";

import Loader from "./components/Loader.jsx";

export default function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// simulate app boot time (fonts, images, state)
		const timer = setTimeout(() => {
			setLoading(false);
		}, 600);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/ingredient" element={<Ingredient />} />
			<Route path="/cart" element={<Shopping_Cart />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="/product/:id" element={<ProductDetail />} />
			<Route path="/receipt" element={<Receipt />} />
			<Route path="/review" element={<Review />} />
			<Route path="/access" element={<Access />} />
		</Routes>
	);
}
