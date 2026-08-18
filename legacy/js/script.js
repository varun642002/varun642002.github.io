/* =========================================================
   VARUN S. — PORTFOLIO INTERACTIONS
   Mobile navigation, active links, scroll reveal
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       1. ELEMENT REFERENCES
       ----------------------------------------------------- */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navItems = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("main section[id]");


    /* -----------------------------------------------------
       2. MOBILE NAVIGATION
       ----------------------------------------------------- */

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("open");

            menuToggle.textContent = isOpen ? "✕" : "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

    }


    /* -----------------------------------------------------
       3. CLOSE MOBILE MENU AFTER CLICKING A LINK
       ----------------------------------------------------- */

    navItems.forEach((link) => {

        link.addEventListener("click", () => {

            if (navLinks) {
                navLinks.classList.remove("open");
            }

            if (menuToggle) {
                menuToggle.textContent = "☰";

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    });


    /* -----------------------------------------------------
       4. CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
       ----------------------------------------------------- */

    document.addEventListener("click", (event) => {

        if (!menuToggle || !navLinks) return;

        const clickedInsideMenu = navLinks.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedToggle &&
            navLinks.classList.contains("open")
        ) {

            navLinks.classList.remove("open");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    /* -----------------------------------------------------
       5. ACTIVE NAVIGATION LINK ON SCROLL
       ----------------------------------------------------- */

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >=
                sectionTop - sectionHeight * 0.3
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navItems.forEach((link) => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    /* -----------------------------------------------------
       6. SCROLL REVEAL ANIMATIONS
       ----------------------------------------------------- */

    const revealElements = document.querySelectorAll(
        `
        .section-label,
        .section-title,
        .section-description,
        .skill-card,
        .project-card,
        .timeline-item,
        .achievement-card,
        .contact-content h2,
        .contact-content > p,
        .contact-actions
        `
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });


    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("visible");
        });

    }


    /* -----------------------------------------------------
       7. STAGGERED CARD ANIMATIONS
       ----------------------------------------------------- */

    const cardGroups = [
        document.querySelectorAll(".skill-card"),
        document.querySelectorAll(".project-card"),
        document.querySelectorAll(".achievement-card")
    ];

    cardGroups.forEach((group) => {

        group.forEach((card, index) => {

            card.style.transitionDelay =
                `${Math.min(index * 80, 320)}ms`;

        });

    });


    /* -----------------------------------------------------
       8. RESET TRANSITION DELAY AFTER REVEAL
       ----------------------------------------------------- */

    setTimeout(() => {

        document
            .querySelectorAll(
                ".skill-card, .project-card, .achievement-card"
            )
            .forEach((card) => {

                card.style.transitionDelay = "0ms";

            });

    }, 1800);


    /* -----------------------------------------------------
       9. ESCAPE KEY CLOSES MOBILE MENU
       ----------------------------------------------------- */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            navLinks &&
            navLinks.classList.contains("open")
        ) {

            navLinks.classList.remove("open");

            if (menuToggle) {

                menuToggle.textContent = "☰";

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.focus();

            }

        }

    });


    /* -----------------------------------------------------
       10. AUTOMATIC FOOTER YEAR
       ----------------------------------------------------- */

    const footerText = document.querySelector(
        ".footer-content p"
    );

    if (footerText) {

        const currentYear = new Date().getFullYear();

        footerText.innerHTML =
            `© ${currentYear} Varun S. Built with HTML, CSS & JavaScript.`;

    }

/* -----------------------------------------------------
   11. PROJECT FILTERING
   ----------------------------------------------------- */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(
    ".project-showcase-card"
);

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedFilter =
            button.getAttribute("data-filter");

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach((card) => {

            const category =
                card.getAttribute("data-category");

            if (
                selectedFilter === "all" ||
                category === selectedFilter
            ) {

                card.classList.remove("hidden-project");

            } else {

                card.classList.add("hidden-project");

            }

        });

    });

});
});
