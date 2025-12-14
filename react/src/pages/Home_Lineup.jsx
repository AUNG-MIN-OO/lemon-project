import { useState } from "react";
import data from "../data/products.json";

const CARD_WIDTH = 360; // width + gap

export default function Lineup() {
    const products = Object.values(data).filter(
        (item) => item.type === "product"
    );

    const [index, setIndex] = useState(0);

    const maxIndex = products.length - 3;

    const next = () => {
        setIndex((prev) =>
            prev >= maxIndex ? 0 : prev + 1
        );
    };

    const prev = () => {
        setIndex((prev) =>
            prev <= 0 ? maxIndex : prev - 1
        );
    };

    const progress =
        maxIndex > 0 ? (index / maxIndex) * 100 : 0;

    return (
        <section className="lineup">
            <h2 className="lineup-title">ラインアップ</h2>

            {/* Slider */}
            <div className="lineup-viewport">
                <div
                    className="lineup-track"
                    style={{
                        transform: `translateX(-${index * CARD_WIDTH}px)`,
                    }}
                >
                    {products.map((p) => (
                        <div className="lineup-card" key={p.id}>
                            <div className="lineup-card-img">
                                <img src={p.images.main} alt={p.name} />
                            </div>

                            <p className="jp">{p.name}</p>
                            <p className="en">{p.nameEn}</p>
                            <p className="price">{p.price}円（税込）</p>

                            <hr className="lineup-divider"/>

                            <div className="lineup-card-info">
                                <p className="description">{p.description}</p>
                            </div>

                            <button className="buy-btn">BUY NOW</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lineup-pagination">
                {/* Scroll line on the LEFT */}
                <div className="scroll-line">
                    <span
                        className="scroll-thumb"
                        style={{ left: `${progress}%` }}
                    />
                </div>

                {/* Buttons on the RIGHT */}
                <div className="pagination-buttons">
                    <span onClick={prev}>
                        <img src="/images/left-arrow.png" alt=""/>
                    </span>
                    <span onClick={next}>
                        <img src="/images/right-arrow.png" alt=""/>
                    </span>
                </div>
            </div>

        </section>
    );
}
