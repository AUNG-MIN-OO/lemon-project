import { useEffect } from "react";

export default function useScrollReveal() {
	useEffect(() => {
		const elements = document.querySelectorAll(".scroll-section");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						observer.unobserve(entry.target); // ← important
					}
				});
			},
			{
				threshold: 0.2,
			}
		);

		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);
}
