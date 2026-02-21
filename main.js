// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(
            this.getAttribute("href"),
        );
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth",
            });
        }
    });
});

// Header scroll effect
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.3)";
        header.style.backgroundColor = "rgba(10, 10, 10, 0.95)";
    } else {
        header.style.boxShadow = "none";
        header.style.backgroundColor = "var(--darker-bg)";
    }
});

// Simple counter animation for stats
const counters = document.querySelectorAll(".stat-number");
const speed = 200;

const startCounting = () => {
    counters.forEach((counter) => {
        const updateCount = () => {
            const target =
                +counter.getAttribute("data-target") ||
                +counter.innerText.replace("+", "");
            const count = +counter.innerText.replace("+", "");
            const increment = target / speed;

            if (count < target) {
                counter.innerText =
                    Math.ceil(count + increment) + "+";
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCount();
    });
};

// Start counting when section is in view
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCounting();
                observer.disconnect();
            }
        });
    },
    { threshold: 0.5 },
);

observer.observe(document.querySelector(".download"));