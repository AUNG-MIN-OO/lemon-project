import Header from "../components/Header";
import Footer from "../components/Footer";
import Curve_Body from "../components/Curve_Body";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

export default function Review() {
    return (
        <>
            <Header/>

            <main>
                <div className="voice-box">
                    <div className="voice-wrapper">

                        {/*-- LEFT IMAGE --*/}
                        <div className="voice-img">
                            <img src="/images/woman.png" alt="お客様の声"/>
                        </div>

                        {/*-- RIGHT TEXT --*/}
                        <div className="voice-text">
                            <p>
                                私にとって頑張った時、とっておきのお菓子はやっぱり3&1のおやつ！<br/>
                                甘すぎないちょうどいいおやつに、エナジーチャージされて、「よ〜し、またがんばろう！」と<br/>
                                明るく優しい気持ちに戻ってこれる！
                            </p>

                            <p>
                                こどもたちの「一口ちょうだい！」「もう一口！」が止まらなくて全部食べられちゃうことも（笑）<br/>
                                季節にぴったりのいろんな味がうれしい！私の元気の源です。
                            </p>
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
