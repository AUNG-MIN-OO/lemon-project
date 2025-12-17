import Header from "../components/Header";
import Footer from "../components/Footer";
import Curve_Body from "../components/Curve_Body";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

export default function About() {
	return (
		<>
			<Header />
			<section className="about-section">
				{/* ===== Intro ===== */}
				<div className="about-wrapper">
					<h1 className="about-title">焼き菓子3＆1とは</h1>

					<div className="about-card">
						<div className="about-img">
							<img
								src="/images/shop.png"
								alt="焼き菓子3&1 店舗"
								className="shop-image"
							/>
						</div>
						<div className="about-shop">
							<p>
								愛知県豊川市のbenchさんにて月2回営業マルシェ出店です。無農薬レモンを使った瀬戸内レモンケーキをはじめ焼き菓子を焼いています。愛媛県出身の4人のママで育児や家事の合間にほっとひと息できるようなお菓子を作っています。
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ===== Story ===== */}
			<section className="story-section">
				<div className="story-card">
					<div className="story-text">
						<h3>店のストーリー</h3>
						<p>
							子どもたちが小さい頃、毎日公園へ連れて行く孤独と疲れの中で、帰りに見つけたパン屋やお菓子を、2人がお昼寝したときにそっと食べる時間が私の小さな幸せでした。
						</p>
						<p>
							その経験に何度も救われたからこそ、同じように日々がんばる誰かにも、家族とほっとできるお菓子を届けたい―その想いが、この店を始めた理由です。
						</p>
					</div>

					<div className="story-images">
						<img
							src="/images/baking_cookie1.png"
							className="story-img-left"
							alt="Baking Cookie Photo"
						/>
						<img
							src="/images/baking_cookie2.png"
							className="story-img-right"
							alt="Baking Cookie Photo"
						/>
					</div>
				</div>
			</section>
			{/* ===== Ingredients ===== */}
			<section className="about-ingredient-section">
				<div className="about-ingredient-card">
					<div className="about-ingredient-images">
						<img src="/images/About_lemon.png" alt="レモン" />
						<img src="/images/About_egg.png" alt="卵" />
					</div>

					<div className="about-ingredient-text">
						<h3>素材の想い</h3>
						<p>
							私たちが選ぶ素材には、すべて理由があります。
							ランニングエッグは放し飼いではないものの、生で食べてもおいしく安心できる品質です。
						</p>
						<p>
							大切にしているのは、美味しさと安全性、そして素材から感じられる“エネルギー”。旬のものや名産地のもの、国産・地元の素材には、より強い生命力があります。
						</p>
						<p>
							だからこそ、自分の子どもにも安心して食べさせられる素材だけを丁寧に選んでいます。
							素材の力をそのままお菓子にのせて、あなたの大切な人の時間にも、やさしい幸せが届きますように。
						</p>
					</div>
				</div>
			</section>
			<Curve_Body />
			<ScrollToTopButton />
			<Footer />
		</>
	);
}
