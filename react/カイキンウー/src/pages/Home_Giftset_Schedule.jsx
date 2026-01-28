export default function Home_Giftset_Schedule() {
	return (
		<section className="home-giftset-schedule scroll-section">
			<h2 className="schedule-title">ギフトセット販売スケジュール</h2>

			<div className="schedule-box">
				<div className="schedule-scroll">
					<div className="schedule-timeline">
						<div className="schedule-year">
							<p>2025</p>
							<p>12</p>
						</div>

						<div className="schedule-line"></div>

						<div className="schedule-items">
							<div className="schedule-item">
								<div className="schedule-date">12/22</div>
								<img
									src="/images/home-giftset-schedule-parcel.png"
									alt="parcel"
									className="schedule-parcel"
								/>
								<div className="schedule-day">(月)</div>
							</div>

							<div className="schedule-item">
								<div className="schedule-date">12/25</div>
								<img
									src="/images/home-giftset-schedule-parcel.png"
									alt="parcel"
									className="schedule-parcel"
								/>
								<div className="schedule-day">(木)</div>
							</div>

							<div className="schedule-item">
								<div className="schedule-date">12/25</div>
								<img
									src="/images/home-giftset-schedule-parcel.png"
									alt="parcel"
									className="schedule-parcel"
								/>
								<div className="schedule-day">(木)</div>
							</div>

							<div className="schedule-item">
								<div className="schedule-date">12/30</div>
								<img
									src="/images/home-giftset-schedule-parcel.png"
									alt="parcel"
									className="schedule-parcel"
								/>
								<div className="schedule-day">(火)</div>
							</div>

							<div className="schedule-item">
								<div className="schedule-date">12/31</div>
								<img
									src="/images/home-giftset-schedule-parcel.png"
									alt="parcel"
									className="schedule-parcel"
								/>
								<div className="schedule-day">(水)</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
