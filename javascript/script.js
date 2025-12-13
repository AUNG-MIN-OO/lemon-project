//checkout selection
document.querySelectorAll('input[name="payment"]').forEach((radio) => {
	radio.addEventListener("change", function () {
		const cod = document.getElementById("cod-details");
		const card = document.getElementById("card-details");

		cod.addEventListener("click", () => {
			console.log("hi");
		});

		if (this.value === "cod") {
			cod.style.display = "block";
			card.style.display = "none";
		} else {
			cod.style.display = "none";
			card.style.display = "block";
		}
	});
});

// const hamburger = document.getElementById("hamburger");
// const mobileMenu = document.getElementById("mobileMenu");
// const overlay = document.getElementById("overlay");
//
// hamburger.addEventListener("click", () => {
// 	// Toggle menu
// 	mobileMenu.classList.toggle("open");
// 	overlay.classList.toggle("show");
//
// 	// Change icon
// 	if (mobileMenu.classList.contains("open")) {
// 		hamburger.setAttribute("icon", "mdi:close"); // X icon
// 	} else {
// 		hamburger.setAttribute("icon", "mdi:menu"); // Hamburger icon
// 	}
// });
//
// overlay.addEventListener("click", () => {
// 	mobileMenu.classList.remove("open");
// 	overlay.classList.remove("show");
//
// 	// Back to hamburger icon
// 	hamburger.setAttribute("icon", "mdi:menu");
// });
