import { Link } from "react-router-dom";

export default function Materials() {
	return (
		<section className="materials scroll-section">
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

				<Link
					to="/ingredient"
					className="materials-btn"
					onClick={() => {
						window.scrollTo({
							top: 0,
							behavior: "instant",
						});
					}}
				>
					詳しく見る
				</Link>

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
	);
}
