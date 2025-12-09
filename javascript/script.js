const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
	// Toggle menu
	mobileMenu.classList.toggle("open");
	overlay.classList.toggle("show");

	// Change icon
	if (mobileMenu.classList.contains("open")) {
		hamburger.setAttribute("icon", "mdi:close"); // X icon
	} else {
		hamburger.setAttribute("icon", "mdi:menu"); // Hamburger icon
	}
});

overlay.addEventListener("click", () => {
	mobileMenu.classList.remove("open");
	overlay.classList.remove("show");

	// Back to hamburger icon
	hamburger.setAttribute("icon", "mdi:menu");
});
