import { useCart } from "../context/CartContext";
import {Link} from "react-router-dom";
export default function Header() {
    const { cart } = useCart();
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    return (
        <header className="header">
            <div className="header-inner">
                <Link to="/">
                    <img src="/images/Logo.svg" alt="焼き菓子3&1" className="logo"/>
                </Link>

                <nav className="nav">
                    <ul>
                        <li><Link to="#">3&1とは</Link></li>
                        <li><Link to="/#lineup">商品のご案内</Link></li>
                        <li><Link to="/#home-gift-set">ギフトセット</Link></li>
                        <li><Link to="/review">お客様の声</Link></li>
                        <li><Link to="/access">アクセス</Link></li>
                    </ul>
                </nav>

                <div className="header-icons">
                    {/* CART ICON */}
                    <Link to="/cart" className="cart-icon-wrap">
                        <img
                            src="/images/tabler_shopping-bag.svg"
                            alt="ショッピングバッグ"
                            className="shopping-bag-icon"
                        />

                        {totalQty > 0 && (
                            <span className="cart-badge">
                                {totalQty}
                            </span>
                        )}
                    </Link>

                    {/* INSTAGRAM ICON */}
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/images/insta.svg"
                            alt="インスタグラム"
                            className="insta-icon"
                        />
                    </a>
                </div>
            </div>
        </header>
    );
}

