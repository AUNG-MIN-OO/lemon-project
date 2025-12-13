import { useCart } from "../context/CartContext";
import {Link} from "react-router-dom";
export default function Header() {
    const { cart } = useCart();
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    return (
        <header className="header">
            <div className="header-inner">
                <img src="../images/Logo.svg" alt="焼き菓子3&1" className="logo"/>

                <nav className="nav">
                    <ul>
                        <li><a href="#">3&1とは</a></li>
                        <li><a href="#">商品のご案内</a></li>
                        <li><a href="#">ギフトセット</a></li>
                        <li><a href="#">お客様の声</a></li>
                        <li><a href="#">アクセス</a></li>
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

