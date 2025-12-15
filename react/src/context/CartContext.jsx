import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	const addToCart = (product, qty) => {
		setCart((prev) => {
			const existing = prev.find((item) => item.id === product.id);

			if (existing) {
				// OPTION C: replace quantity
				return prev.map((item) =>
					item.id === product.id ? { ...item, qty: qty } : item
				);
			}

			return [
				...prev,
				{
					id: product.id,
					name: product.name,
					price: product.price,
					image: product.images.main,
					qty,
				},
			];
		});
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider value={{ cart, addToCart, clearCart }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const ctx = useContext(CartContext);
	if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
	return ctx;
}
