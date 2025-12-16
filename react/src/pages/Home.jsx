import Header from "../components/Header";
import Footer from "../components/Footer";
import Curve_Body from "../components/Curve_Body";
import Home_Lineup from "./Home_Lineup.jsx";
import Home_Giftset from "./Home_Giftset.jsx";
import Home_Giftset_Schedule from "./Home_Giftset_Schedule.jsx";
import Home_Ranking from "./Home_Ranking.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

export default function Home() {
	return (
		<>
			<Header />

			<section className="home-hero">
				<div className="home-hero-inner">
					{/* Circle photo */}
					<div className="hero-photo">
						<img
							src="/images/eat_together-for-home.svg"
							alt="焼き菓子"
						/>
					</div>

					{/* Gift box */}
					<div className="hero-gift">
						<img
							src="/images/giftbox-open-homepage.svg"
							alt="ギフトセット"
						/>
					</div>

					{/* Vertical copy */}
					<div className="hero-copy">
						<p>家族と</p>
						<p>ほっと一息</p>
						<p>小さな</p>
						<p>ごほうびを</p>
					</div>

					{/* Decorative lemons */}
					<img
						src="/images/deco-lemon-right-home.png"
						className="hero-lemon"
					/>
					<img
						src="/images/lemon_deco.png"
						className="lemon lemon-1 float-lemon float-slow"
					/>
					<img
						src="/images/lemon_deco.png"
						className="lemon lemon-2 float-lemon float-fast"
					/>
					<img
						src="/images/lemon_deco.png"
						className="lemon lemon-3 float-lemon float-delay-1"
					/>
					<img
						src="/images/lemon_deco.png"
						className="lemon lemon-4 float-lemon float-delay-2"
					/>
					<img
						src="/images/lemon_deco.png"
						className="lemon lemon-5 float-lemon float-delay-3"
					/>
					<img
						src="/images/lemon_deco.png"
						className="lemon lemon-6 float-lemon float-fast"
					/>
					<img
						src="/images/lemon_deco.png"
						className="lemon lemon-7 float-lemon float-fast"
					/>
					<img
						src="/images/lemon_deco.png"
						className="lemon lemon-8 float-lemon float-fast"
					/>
					<img
						src="/images/cookie-1.svg"
						className="hero-cookie cookie-1"
					/>
					<img
						src="/images/cookie-2.svg"
						className="hero-cookie cookie-2"
					/>
					<img
						src="/images/cookie-3.svg"
						className="hero-cookie cookie-3"
					/>
					<img
						src="/images/cookie-4.svg"
						className="hero-cookie cookie-4"
					/>
				</div>

				<div className="inverse-body-curve"></div>
			</section>

			<section className="materials">
				<div className="materials-inner">
					<h2 className="materials-title">素材のこだわり</h2>

					<div className="materials-grid">
						<img
							src="/images/egg.png"
							alt="ランキングエッグ"
							className="material-card"
						/>
						<img
							src="/images/lemon.png"
							alt="無農薬レモン"
							className="material-card"
						/>
						<img
							src="/images/flour.png"
							alt="国産小麦粉"
							className="material-card"
						/>
						<img
							src="/images/butter.png"
							alt="北海道バター"
							className="material-card"
						/>
						<img
							src="/images/sugar.png"
							alt="きび砂糖"
							className="material-card"
						/>
					</div>

					<a href="#" className="materials-btn">
						詳しく見る
					</a>

					<img
						src="/images/material-hero-lemon.png"
						className="material-hero-lemon"
					/>
					<img
						src="/images/lemon_deco.png"
						className="material-deco-lemon-1 float-lemon float-slow"
					/>
					<img
						src="/images/lemon_deco.png"
						className="material-deco-lemon-2 float-lemon float-delay-3"
					/>
				</div>
			</section>

			<Home_Lineup />

			<Home_Giftset />

			<Home_Giftset_Schedule />

			<Home_Ranking />

			<Curve_Body />

			<ScrollToTopButton />

			<Footer />
		</>
	);
}
