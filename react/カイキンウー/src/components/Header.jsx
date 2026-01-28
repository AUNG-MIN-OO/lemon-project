import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Header() {
	const { cart } = useCart();
	const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="header">
			<div className="header-inner">
				{/* LOGO */}
				<Link to="/">
					<img
						src="/images/Logo.svg"
						alt="焼き菓子3&1"
						className="logo"
					/>
				</Link>

				{/* DESKTOP NAV */}
				<nav className="nav">
					<ul>
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
				</nav>

				{/* ICONS */}
				<div className="header-icons">
					<Link to="/cart" className="cart-icon-wrap">
						<img
							src="/images/tabler_shopping-bag.svg"
							alt="ショッピングバッグ"
							className="shopping-bag-icon"
						/>
						{totalQty > 0 && (
							<span className="cart-badge">{totalQty}</span>
						)}
					</Link>

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

					{/* HAMBURGER */}
					<button
						className={`hamburger ${menuOpen ? "open" : ""}`}
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label="menu"
					>
						<span />
						<span />
						<span />
					</button>
				</div>
			</div>

			{/* MOBILE OVERLAY */}
			{menuOpen && (
				<div
					className="mobile-overlay"
					onClick={() => setMenuOpen(false)}
				/>
			)}

			{/* MOBILE MENU */}
			<nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
				<Link onClick={() => setMenuOpen(false)} to="/#">
					3&1とは
				</Link>
				<Link onClick={() => setMenuOpen(false)} to="/#lineup">
					商品のご案内
				</Link>
				<Link onClick={() => setMenuOpen(false)} to="/#home-gift-set">
					ギフトセット
				</Link>
				<Link onClick={() => setMenuOpen(false)} to="/review">
					お客様の声
				</Link>
				<Link onClick={() => setMenuOpen(false)} to="/access">
					アクセス
				</Link>
			</nav>
		</header>
	);
}
