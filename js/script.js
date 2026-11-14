
// =================================
// DAY SKY / NIGHT UNIVERSE TOGGLE
// =================================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {

        const isNight = document.body.classList.toggle("night-theme");

        if (isNight) {
            themeToggle.textContent = "☀️ Day Sky";
            themeToggle.setAttribute("aria-label", "Switch to Day Sky");
        } else {
            themeToggle.textContent = "🌙 Night Universe";
            themeToggle.setAttribute("aria-label", "Switch to Night Universe");
        }

    });
}

