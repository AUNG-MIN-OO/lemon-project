import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Curve_Body from "../components/Curve_Body.jsx";

export default function Checkout() {
    const [payment, setPayment] = useState("cod");

    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const totalAmount = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cart.length === 0) return;

        // snapshot order BEFORE clearing
        const orderItems = [...cart];
        const orderTotal = totalAmount;

        // navigate with order data
        navigate("/receipt", {
            state: {
                orderItems,
                orderTotal
            }
        });

        // clear cart AFTER navigation
        clearCart();
    };



    return (
        <>
            <Header />

            <main>
                <div className="checkout">
                    <div className="outer-box">
                        <form className="order-form" onSubmit={handleSubmit}>

                            {/* CUSTOMER INFO */}
                            <input type="text" placeholder="姓" required />
                            <input type="text" placeholder="名" required />
                            <input type="text" placeholder="フリガナ" />
                            <input type="text" placeholder="郵便番号" required />

                            <div className="select-wrapper">
                                <select required>
                                    <option value="">都道府県</option>
                                    <option>東京都</option>
                                    <option>神奈川県</option>
                                    <option>大阪府</option>
                                </select>
                            </div>

                            <input type="text" placeholder="住所" required />
                            <input type="text" placeholder="建物名、部屋番号" />
                            <input type="text" placeholder="電話番号" required />
                            <input type="email" placeholder="メールアドレス" required />

                            <label className="checkbox">
                                <input type="checkbox" className="checkout-checkbox" />
                                次回のためにこの情報を保存する
                            </label>

                            {/* PAYMENT */}
                            <h3 className="section-title">お支払い</h3>

                            <div className="payment-option">
                                <label className="radio-box">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={payment === "cod"}
                                        onChange={() => setPayment("cod")}
                                    />
                                    <span className="radio-dot"></span>
                                    <span className="radio-label">代金引換</span>
                                </label>
                            </div>

                            <div className="payment-option">
                                <label className="radio-box">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="card"
                                        checked={payment === "card"}
                                        onChange={() => setPayment("card")}
                                    />
                                    <span className="radio-dot"></span>
                                    <span className="radio-label">クレジットカード</span>
                                </label>
                            </div>

                            {/* PAYMENT DETAILS */}
                            {payment === "cod" && (
                                <div className="detail-box">
                                    ★★★代引引換でご注文のお客様へ★★★<br /><br />
                                    商品合計とは別に代引手数料がかかります。<br />
                                    日本国内配送のみ対応しています。
                                </div>
                            )}

                            {payment === "card" && (
                                <>
                                    <p>クレジットカード情報をご入力ください：</p>
                                    <input type="text" placeholder="カード名義人" />
                                    <input type="text" placeholder="カード番号" />
                                    <div style={{ display: "flex", gap: "10px" }}>
                                        <input type="text" placeholder="MM/YY" style={{ flex: 1 }} />
                                        <input type="text" placeholder="CVC" style={{ flex: 1 }} />
                                    </div>
                                </>
                            )}

                            {/* ORDER SUMMARY */}
                            <h3 className="section-title">注文サマリー</h3>

                            {cart.length === 0 && (
                                <p>カートに商品がありません。</p>
                            )}

                            {cart.map((item) => (
                                <div className="cart-row" key={item.id}>
                                    <div className="col-name product-info">
                                        <img
                                            src={item.image}
                                            className="product-img"
                                            alt={item.name}
                                        />
                                        <div>
                                            <p className="jp">{item.name}</p>
                                            <p className="en">{item.id}</p>
                                        </div>
                                    </div>

                                    <div className="col-price">
                                        {item.price.toLocaleString()} 円
                                    </div>

                                    <div className="col-qty">
                                        {item.qty} 個
                                    </div>

                                    <div className="col-subtotal">
                                        {(item.price * item.qty).toLocaleString()} 円
                                    </div>
                                </div>
                            ))}

                            {cart.length > 0 && (
                                <>
                                    <hr className="divider" />

                                    <div className="cart-total-row">
                                        <div className="total-label">商品合計 (税込)</div>
                                        <div className="total-amount">
                                            {totalAmount.toLocaleString()} 円
                                        </div>
                                    </div>

                                    <button type="submit" className="submit-btn">
                                        ご注文完了
                                    </button>
                                </>
                            )}

                        </form>
                    </div>
                </div>
            </main>

            <Curve_Body />
            <Footer />
        </>
    );
}
