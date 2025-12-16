import Header from "../components/Header";
import Footer from "../components/Footer";
import Curve_Body from "../components/Curve_Body";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

export default function Home() {
	return (
		<>
			<Header />
			<main className="ingredients-section">
				<h1 className="ingredients-title">素材のこだわり</h1>

				{/* ITEM 1 */}
				<div className="ingredient-card left">
					<div className="ingredient-text">
						<h2>ランニングエッグ</h2>
						<p>
							ランニングエッグは黄身の色が濃く、味に力があります。焼き菓子に使うと、バターや砂糖に負けない“卵の旨み”がしっかり感じられる仕上がりになります。濃厚なコクと自然な甘みがあり、焼き上がりに深みが生まれるため採用しています。
						</p>
					</div>
					<div className="ingredient-image">
						<img
							src="/images/egg_product.png"
							alt="ランニングエッグ"
						/>
					</div>
				</div>

				{/* ITEM 2 */}
				<div className="ingredient-card right">
					<div className="ingredient-image">
						<img
							src="/images/lemon_product.png"
							alt="瀬戸内レモン"
						/>
					</div>
					<div className="ingredient-text">
						<h2>瀬戸内の無農薬レモン</h2>
						<p>
							瀬戸内の太陽をたっぷり浴び、丁寧に育てられた無農薬レモン。農薬に頼らず手間ひまかけて育てられたその果実は、香り立ちが豊かで、皮ごと使用しても雑味がありません。素材そのものの上質さが、焼き菓子に清々しい香りと奥行きをもたらします。
						</p>
					</div>
				</div>

				{/* ITEM 3 */}
				<div className="ingredient-card left">
					<div className="ingredient-text">
						<h2>安心の国産小麦</h2>
						<p>
							3&1の焼き菓子には、安心・安全にこだわり、国産小麦粉を使用しています。国産ならではの豊かな香りと、しっとりとしたやさしい食感が楽しめます。素材本来の自然な味わいを引き立てる、信頼できる小麦粉です。
						</p>
					</div>
					<div className="ingredient-image">
						<img src="/images/flour_product.png" alt="国産小麦" />
					</div>
				</div>

				{/* ITEM 4 */}
				<div className="ingredient-card right">
					<div className="ingredient-image">
						<img
							src="/images/butter_product.png"
							alt="北海道バター"
						/>
					</div>
					<div className="ingredient-text">
						<h2>北海道バター</h2>
						<p>
							確かな品質で知られる北海道バターを使用しています。コクく豊かな香りが、焼き菓子にしっかりとした味わいを与え、どなたにも愛されるおいしさに仕上げてくれます。
						</p>
					</div>
				</div>

				{/* ITEM 5 */}
				<div className="ingredient-card left">
					<div className="ingredient-text">
						<h2>やさしい甘さのきび砂糖</h2>
						<p>
							素材の風味を引き立てるため、甘さがやわらかい“きび砂糖”を使用しています。自然な甘みが広がり、くどさのないやさしい味わいに仕上がります。後味がすっきりしているため、お子さまにも人気の甘さです。
						</p>
					</div>
					<div className="ingredient-image">
						<img src="/images/sugar_product.png" alt="きび砂糖" />
					</div>
				</div>
			</main>

			<Curve_Body />

			<ScrollToTopButton />

			<Footer />
		</>
	);
}
