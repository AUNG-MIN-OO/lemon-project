import { Link, useLocation } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Curve_Body from "../components/Curve_Body.jsx";

export default function Receipt() {
    const { state } = useLocation();

    // Protect direct access / refresh
    if (!state || !state.orderItems) {
        return (
            <>
                <Header />
                <main>
                    <div className="receipt">
                        <div className="cart-container">
                            <h1 className="cart-title">注文情報が見つかりません</h1>
                            <p style={{ textAlign: "center", padding: "40px" }}>
                                注文完了後に表示されるページです。
                            </p>

                            <div className="cart-buttons">
                                <Link to="/" className="btn-yellow">
                                    ホームページに戻る
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    const { orderItems, orderTotal } = state;

    return (
        <>
            <Header />

            <main>
                <div className="receipt">
                    <div className="cart-container">
                        <h1 className="cart-title">ご注文ありがとうございました</h1>

                        <div className="cart-box">
                            <h3 className="cart-box-title">レシート</h3>

                            {/* TABLE HEADER */}
                            <div className="cart-row cart-header">
                                <div className="col-name">商品名</div>
                                <div className="col-price">単価(税込)</div>
                                <div className="col-qty">数量</div>
                                <div className="col-subtotal">小計(税込)</div>
                            </div>

                            {/* ORDER ITEMS */}
                            {orderItems.map((item) => (
                                <div className="cart-row" key={item.id}>
                                    <div className="col-name product-info">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="product-img"
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

                            <hr className="divider" />

                            {/* TOTAL */}
                            <div className="cart-total-row">
                                <div className="total-label">商品合計 (税込)</div>
                                <div className="total-amount">
                                    {orderTotal.toLocaleString()} 円
                                </div>
                            </div>
                        </div>

                        {/* BUTTON */}
                        <div className="cart-buttons">
                            <Link to="/" className="btn-yellow">
                                ホームページに戻る
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Curve_Body />
            <Footer />
        </>
    );
}
