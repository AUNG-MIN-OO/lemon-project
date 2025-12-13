import { useCart } from "../context/CartContext";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import products from "../data/products.json";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Curve_Body from "../components/Curve_Body.jsx";

export default function ProductDetail() {
    const { id } = useParams();          // ← URL: /product/:id
    const product = products[id];       // ← JSON lookup
    const [qty, setQty] = useState(1);

    if (!product || product.type !== "product") {
        return <p>商品が見つかりません</p>;
    }

    const totalPrice = product.price * qty;

    const { addToCart } = useCart();

    return (
        <>
            <Header />

            <main className="product-wrapper">
                {/* LEFT COLUMN */}
                <div className="product-left">
                    <div className="product-main-image">
                        <img
                            src={product.images.main}
                            alt={product.name}
                        />
                    </div>

                    {product.images.thumbnails.length > 0 && (
                        <div className="product-thumbnails">
                            {product.images.thumbnails.map((img, index) => (
                                <img key={index} src={img} alt="" />
                            ))}
                        </div>
                    )}
                </div>

                {/* RIGHT COLUMN */}
                <div className="product-right">
                    <h1 className="product-title-jp">{product.name}</h1>
                    <h2 className="product-title-en">{product.nameEn}</h2>

                    <p className="product-price">
            <span className="price-amount">
              {product.price}円
            </span>
                        <span className="price-tax">(税込み)</span>
                    </p>

                    <p className="product-desc">{product.description}</p>

                    {/* QUANTITY + CART */}
                    <div className="cart-section">
                        <label className="qty-label">数量</label>

                        <div className="qty-box">
                            <button
                                className="qty-btn"
                                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                            >
                                −
                            </button>

                            <span className="qty-number">{qty}</span>

                            <button
                                className="qty-btn"
                                onClick={() => setQty(qty + 1)}
                            >
                                ＋
                            </button>
                        </div>

                        <p className="total-price">
                            合計：<strong>{totalPrice.toLocaleString()}円</strong>
                        </p>

                        <button
                            className="btn-add-cart"
                            onClick={() => addToCart(product, qty)}
                        >
                            🛒 カートに入れる
                        </button>

                    </div>

                    {/* INGREDIENTS */}
                    <section className="product-section">
                        <h3>原材料名</h3>
                        <p>{product.ingredients}</p>
                    </section>

                    {/* STORAGE */}
                    <section className="product-section">
                        <h3>保存方法</h3>
                        <p>{product.storage}</p>
                    </section>

                    {/* ALLERGY */}
                    <section className="product-section">
                        <h3>アレルギー情報</h3>
                        <p>
                            {product.allergy}
                            <br />
                            アレルギーをお持ちの方はご注意ください。
                        </p>
                    </section>

                    {/* RETURN */}
                    <Link to="/" className="btn-back-product">
                        <span className="back-icon">←</span>
                        商品一覧に戻る
                    </Link>
                </div>
            </main>

            <Curve_Body />
            <Footer />
        </>
    );
}
