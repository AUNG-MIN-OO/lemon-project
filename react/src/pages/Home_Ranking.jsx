export default function Home_Ranking() {
	return (
		<section className="home-ranking container scroll-section">
			<h2 className="ranking-title">ランキング</h2>

			<div className="ranking-cards">
				<div className="ranking-card rank-1">
					<img
						src="/images/rank-1.png"
						alt="1st crown"
						className="rank-crown"
					/>
				</div>

				<div className="ranking-card rank-2">
					<img
						src="/images/rank-2.png"
						alt="2nd crown"
						className="rank-crown"
					/>
				</div>

				<div className="ranking-card rank-3">
					<img
						src="/images/rank-3.png"
						alt="3rd crown"
						className="rank-crown"
					/>
				</div>
			</div>
		</section>
	);
}
