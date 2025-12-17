import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Ingredient from "./pages/Ingredient.jsx";
import Shopping_Cart from "./pages/Shopping_Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import ProductDetail from "./pages/Product_Detail.jsx";
import GiftDetail from "./pages/Gift_Detail.jsx";
import Receipt from "./pages/Receipt.jsx";
import Review from "./pages/Review.jsx";
import LinkToHash from "./components/LinkToHash.jsx";
import Access from "./pages/Access.jsx";
import Loader from "./components/Loader.jsx";
import { useEffect, useState } from "react";

export default function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// simulate app boot time (fonts, images, state)
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000); // adjust if needed

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Loader />;
	}
	return (
		<>
			<LinkToHash />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/ingredients" element={<Ingredient />} />
				<Route path="/cart" element={<Shopping_Cart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/product/:id" element={<ProductDetail />} />
				<Route path="/giftset" element={<GiftDetail />} />
				<Route path="/receipt" element={<Receipt />} />
				<Route path="/review" element={<Review />} />
				<Route path="/access" element={<Access />} />
			</Routes>
		</>
	);
}
