import Header from "../components/Header";
import Footer from "../components/Footer";
import Curve_Body from "../components/Curve_Body";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

export default function Gift_Detail() {
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
						<button className="btn-add-cart">カートに入れる</button>
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
			</section>

			<Curve_Body />

			<ScrollToTopButton />

			<Footer />
		</>
	);
}
