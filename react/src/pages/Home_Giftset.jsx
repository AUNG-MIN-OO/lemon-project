export default function Home_Giftset(){
    return (
        <section className="home-giftset" id="home-gift-set">

            <h2 className="home-giftset-title">ギフトセット</h2>

            <div className="home-giftset-inner">
                {/* LEFT IMAGE */}
                <div className="home-giftset-photo">
                    <img
                        src="/images/home-giftset-family-photo.png"
                        alt="家族で楽しむ焼き菓子"
                    />
                </div>

                {/* RIGHT CIRCLE */}
                <div className="home-giftset-circle">
                    <img
                        src="/images/home-giftset-photo.png"
                        alt="ギフトセット"
                        className="home-giftset-box"
                    />
                    <img
                        src="/images/home-giftset-inside-photo.png"
                        alt="ギフトセット"
                        className="home-giftset-box-inside"
                    />
                </div>
            </div>

            {/* CTA */}
            <a href="/gift" className="home-giftset-btn">
                <img src="/images/home-giftset-buy-btn.png" alt=""/>
            </a>

            {/* Decorations */}
            <img
                src="/images/home-giftset-lemon-top.png"
                className="home-giftset-lemon-top"
                alt=""
            />
            <img
                src="/images/home-giftset-lemon-bottom.png"
                className="home-giftset-lemon-bottom"
                alt=""
            />
            <img
                src="/images/lemon_deco.png"
                className="home-giftset-lemon1 float-lemon float-delay-1"
                alt=""
            />
            <img
                src="/images/lemon_deco.png"
                className="home-giftset-lemon2 float-lemon float-fast"
                alt=""
            />
        </section>

    )
}