import Header from "../components/Header";
import Footer from "../components/Footer";
import Curve_Body from "../components/Curve_Body";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

export default function Access() {
    return (
        <>
            <Header/>

            <main>
                <div className="access-section">

                    <h2 className="access-title">アクセス</h2>

                    <div className="access-container">

                        <div className="access-wrapper">

                            {/*-- LEFT --*/}
                            <div className="access-info">
                                <p className="access-lead">やってみたい！を叶える</p>
                                <p className="access-name"><span>レンタルシェアキッチン BENCH</span></p>

                                <p className="access-green">(橋本造園敷地内)</p>

                                <p className="access-address">
                                    〒442-0824<br/>
                                    愛知県豊川市宿町水入48番地<br/>
                                    メール：yakigashi3and1@gmail.com
                                </p>

                                <a href="#" className="btn-yellow">来場方法</a>

                                <p className="walk-text">名鉄・伊奈駅から徒歩15分</p>

                                <a href="#" className="btn-yellow">お問い合わせ</a>

                                <p className="note">
                                    お問い合わせはメール または Instagram（DM）にて受け付けております。<br/>
                                    メールのご返信にはお時間を要する場合がございます。
                                </p>

                                <span><img src="../images/instagram-outline.svg" alt="instagram"/></span>
                                <span><img src="../images/gmail-outline.svg" alt="instagram"/></span>
                            </div>

                            {/*-- RIGHT --*/}
                            <div className="access-map">
                                <div className="map-circle">
                                    <img src="../images/map.svg" alt=""/>
                                </div>
                                <p className="map-link">Google Map ↗</p>
                            </div>

                        </div>

                    </div>

                </div>
            </main>

            <Curve_Body/>

            <ScrollToTopButton/>

            <Footer/>
        </>
    );
}
