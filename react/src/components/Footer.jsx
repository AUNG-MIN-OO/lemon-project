export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-inner">
				{/* LEFT */}
				<div className="footer-logo-block">
					<img
						src="../images/Logo.svg"
						alt="焼き菓子3&1"
						className="footer-logo"
					/>
					<p className="footer-brand">焼き菓子3＆1</p>
				</div>

				{/* CENTER */}
				<ul className="footer-links">
					<li>
						<a href="#">3&1とは</a>
					</li>
					<li>
						<a href="#">商品のご案内</a>
					</li>
					<li>
						<a href="#">ギフトセット</a>
					</li>
					<li>
						<a href="#">お客様の声</a>
					</li>
					<li>
						<a href="#">お問い合わせ</a>
					</li>
				</ul>

				{/* RIGHT */}
				<div className="footer-sns">
					<span className="follow-label">Follow Us</span>
					<div className="sns-icons">
						<img src="../images/insta.svg" alt="Instagram" />
						<img src="../images/gmail.svg" alt="TikTok" />
					</div>
				</div>
			</div>

			<div className="footer-line"></div>
			<p className="footer-copy">
				©2025 焼き菓子3＆1. All Right Reserved.
			</p>
		</footer>
	);
}
