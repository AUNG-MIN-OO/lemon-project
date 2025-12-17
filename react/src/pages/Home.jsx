import Header from "../components/Header";
import Footer from "../components/Footer";
import Curve_Body from "../components/Curve_Body";
import Home_Materials from "./Home_Materials.jsx";
import Home_Lineup from "./Home_Lineup.jsx";
import Home_Giftset from "./Home_Giftset.jsx";
import Home_Giftset_Schedule from "./Home_Giftset_Schedule.jsx";
import Home_Ranking from "./Home_Ranking.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";

export default function Home() {
	useScrollReveal();

	return (
		<>
			<Header />

			<section className="home-hero scroll-section">
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

			<Home_Materials />

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
