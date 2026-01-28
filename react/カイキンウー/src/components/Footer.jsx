import { Link } from "react-router-dom";

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
						<Link to="/about">3&1とは</Link>
					</li>
					<li>
						<Link to="/#lineup">商品のご案内</Link>
					</li>
					<li>
						<Link to="/#home-gift-set">ギフトセット</Link>
					</li>
					<li>
						<Link to="/review">お客様の声</Link>
					</li>
					<li>
						<Link to="/access">アクセス</Link>
					</li>
				</ul>

				{/* RIGHT */}
				<div className="footer-sns">
					<span className="follow-label">Follow Us</span>
					<div className="sns-icons">
						<a
							href="https://www.instagram.com/3and1_yakigashi?igsh=YXZoMHE4YXB6d2p1"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/images/insta.svg"
								alt="インスタグラム"
								className="insta-icon"
							/>
						</a>
						<a
							href="mailto:yakigashi3and1@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src="../images/gmail.svg" alt="Gmail" />
						</a>
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
