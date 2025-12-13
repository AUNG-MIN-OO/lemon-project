import Header from "../components/Header";
import Footer from "../components/Footer";
import Curve_Body from "../components/Curve_Body";

export default function Home() {
    return (
        <>
            <Header />

            <section className="home-hero">
                <div className="home-hero-inner">

                    {/* Circle photo */}
                    <div className="hero-photo">
                        <img src="/images/eat_together-for-home.svg" alt="焼き菓子" />
                    </div>

                    {/* Gift box */}
                    <div className="hero-gift">
                        <img src="/images/giftbox-open-homepage.svg" alt="ギフトセット" />
                    </div>

                    {/* Vertical copy */}
                    <div className="hero-copy">
                        <p>家族と</p>
                        <p>ほっと一息</p>
                        <p>小さな</p>
                        <p>ごほうびを</p>
                    </div>

                    {/* Decorative lemons */}
                    <img src="/images/small-lemon-for-home.svg" className="hero-lemon lemon-1" />
                    <img src="/images/deco-lemon-right-home.png" className="hero-lemon lemon-2" />
                    <img src="/images/cookie-1.svg" className="hero-cookie cookie-1" />

                </div>

                <div className="inverse-body-curve"></div>

            </section>

            <section className="home-materials">
                <h2 className="materials-title">素材のこだわり</h2>

                <div className="materials-grid">
                    <div className="material-card">
                        <img src="/images/eggs.jpg" alt="" />
                        <p>愛知県産<br />ランニングエッグ</p>
                    </div>

                    <div className="material-card">
                        <img src="/images/lemon.png" alt="" />
                        <p>瀬戸内の<br />無農薬レモン</p>
                    </div>

                    <div className="material-card">
                        <img src="/images/flour.png" alt="" />
                        <p>国産小麦の<br />風味豊かな生地</p>
                    </div>

                    <div className="material-card">
                        <img src="/images/butter.png" alt="" />
                        <p>北海道産<br />バター</p>
                    </div>
                </div>

                <button className="btn-yellow materials-btn">
                    詳しく見る
                </button>
            </section>


            <Curve_Body />
            <Footer />
        </>
    );
}
