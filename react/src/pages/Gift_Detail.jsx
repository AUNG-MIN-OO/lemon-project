import Header from "../components/Header";
import Footer from "../components/Footer";
import Curve_Body from "../components/Curve_Body";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";
import { useCart } from "../context/CartContext.jsx";
import products from "../data/products.json";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Gift_Detail() {
	const { addToCart } = useCart();
	const product = products["gift_box_standard"]; // ← JSON lookup
	const [qty, setQty] = useState(1);

	const totalPrice = product.price * qty;
	return (
		<>
			<Header />

			<section className="giftset">
				{/* ===============================
          1. GIFT SET MAIN (TOP)
      ================================ */}
				<div className="giftset-hero">
					<img
						src="/images/gift_set.png"
						alt="ギフトセット内容"
						className="giftset"
					/>

					<div className="giftset-info">
						<h2 className="giftset-title">ギフトセット</h2>
						<p className="giftset-price">3,300円（税込）</p>
						{/* QUANTITY + CART */}
						<div className="cart-section">
							<label className="qty-label">数量</label>

							<div className="qty-box">
								<button
									className="qty-btn"
									onClick={() =>
										setQty(qty > 1 ? qty - 1 : 1)
									}
								>
									−
								</button>

								<span className="qty-number">{qty}</span>

								<button
									className="qty-btn"
									onClick={() => setQty(qty + 1)}
								>
									＋
								</button>
							</div>

							<p className="total-price">
								合計：
								<strong>{totalPrice.toLocaleString()}円</strong>
							</p>

							<button
								className="btn-add-cart"
								onClick={() => addToCart(product, qty)}
							>
								カートに入れる
							</button>
						</div>
					</div>
				</div>

				{/* ===============================
          2. GIFT SET MENU (MIDDLE)
      ================================ */}
				<div className="giftset-menu">
					<img
						src="/images/gift_set_image.png"
						alt="ギフトセット内容一覧"
					/>
				</div>

				{/* ===============================
          3. GIFT BOX (BOTTOM)
      ================================ */}
				<div className="giftset-box">
					<img src="/images/gift_set_box.png" alt="ギフトボックス" />
				</div>

				<div className="gift-back">
					<Link to="/" className="gift-back-product">
						<span className="gift-back-icon">←</span>
						商品一覧に戻る
					</Link>
				</div>
			</section>

			<Curve_Body />

			<ScrollToTopButton />

			<Footer />
		</>
	);
}
