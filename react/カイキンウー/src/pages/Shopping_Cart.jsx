import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Curve_Body from "../components/Curve_Body.jsx";

export default function Shopping_Cart() {
	const { cart } = useCart();

	// total price
	const totalAmount = cart.reduce(
		(sum, item) => sum + item.price * item.qty,
		0
	);

	return (
		<>
			<Header />

			<main>
				<div>
					<div className="cart-container">
						<h1 className="cart-title">カートの中身</h1>

						<div className="cart-box">
							{/* TABLE HEADER */}
							<div className="cart-row cart-header">
								<div className="col-name">商品名</div>
								<div className="col-price">単価(税込)</div>
								<div className="col-qty">数量</div>
								<div className="col-subtotal">小計(税込)</div>
							</div>

							{/* EMPTY CART */}
							{cart.length === 0 && (
								<p
									style={{
										padding: "40px",
										textAlign: "center",
									}}
								>
									カートに商品が入っていません。
								</p>
							)}

							{/* CART ITEMS */}
							{cart.map((item) => (
								<div className="cart-row" key={item.id}>
									<div className="col-name product-info">
										<img
											src={item.image}
											alt={item.name}
											className="product-img"
										/>
										<div>
											<p className="jp">{item.name}</p>
											<p className="en">{item.id}</p>
										</div>
									</div>

									<div className="col-price">
										{item.price.toLocaleString()} 円
									</div>

									<div className="col-qty">{item.qty} 個</div>

									<div className="col-subtotal">
										{(
											item.price * item.qty
										).toLocaleString()}{" "}
										円
									</div>
								</div>
							))}

							{/* LINE */}
							{cart.length > 0 && <hr className="divider" />}

							{/* TOTAL */}
							{cart.length > 0 && (
								<div className="cart-total-row">
									<div className="total-label">
										商品合計 (税込)
									</div>
									<div className="total-amount">
										{totalAmount.toLocaleString()} 円
									</div>
								</div>
							)}
						</div>

						{/* BUTTONS */}
						<div className="cart-buttons">
							<Link to="/#lineup" className="btn-yellow">
								商品一覧に戻る
							</Link>
							<Link to="/checkout" className="btn-yellow">
								レジへ進む
							</Link>
						</div>
					</div>
				</div>
			</main>

			<Curve_Body />
			<Footer />
		</>
	);
}
