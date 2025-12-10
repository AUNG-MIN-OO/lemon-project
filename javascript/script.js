//checkout selection
document.querySelectorAll('input[name="payment"]').forEach((radio) => {
        radio.addEventListener('change', function () {
                const cod = document.getElementById('cod-details');
                const card = document.getElementById('card-details');

                if (!cod || !card) {
                        return;
                }

                if (this.value === "cod") {
                        cod.style.display = "block";
                        card.style.display = "none";
                } else {
                        cod.style.display = "none";
                        card.style.display = "block";
                }
        });
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

if (hamburger && mobileMenu && overlay) {
        const toggleMenu = () => {
                mobileMenu.classList.toggle("open");
                overlay.classList.toggle("show");

                hamburger.setAttribute(
                        "icon",
                        mobileMenu.classList.contains("open") ? "mdi:close" : "mdi:menu"
                );
        };

        hamburger.addEventListener("click", toggleMenu);

        overlay.addEventListener("click", () => {
                mobileMenu.classList.remove("open");
                overlay.classList.remove("show");
                hamburger.setAttribute("icon", "mdi:menu");
        });
}
