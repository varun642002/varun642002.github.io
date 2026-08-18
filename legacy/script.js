/* =========================================================
   VARUN S. — PORTFOLIO JAVASCRIPT
   Features:
   - Mobile navigation
   - Project filtering
   - Active navigation links
   - Scroll reveal animations
   - Navbar scroll effect
   - Close mobile menu automatically
   ========================================================= */


document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. MOBILE NAVIGATION
       ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navItems = document.querySelectorAll(".nav-links a");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";

        });


        /* Close mobile menu after clicking a navigation link */

        navItems.forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";

            });

        });


        /* Close menu when clicking outside */

        document.addEventListener("click", (event) => {

            const clickedInsideMenu = navLinks.contains(event.target);

            const clickedMenuButton = menuToggle.contains(event.target);

            if (
                !clickedInsideMenu &&
                !clickedMenuButton &&
                navLinks.classList.contains("open")
            ) {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";

            }

        });


        /* Close mobile menu when resizing to desktop */

        window.addEventListener("resize", () => {

            if (window.innerWidth > 800) {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";

            }

        });

    }


    /* =====================================================
       2. PROJECT FILTERING
       ===================================================== */

    const filterButtons = document.querySelectorAll(".filter-btn");

    const projectCards = document.querySelectorAll(".project-card");


    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const selectedFilter = button.dataset.filter;


            /* Update active button */

            filterButtons.forEach((btn) => {

                btn.classList.remove("active");

            });

            button.classList.add("active");


            /* Filter projects */

            projectCards.forEach((card) => {

                const category = card.dataset.category;

                const shouldShow =
                    selectedFilter === "all" ||
                    category === selectedFilter;


                if (shouldShow) {

                    card.classList.remove("hidden-project");

                    card.animate(
                        [
                            {
                                opacity: 0,
                                transform: "translateY(20px)"
                            },
                            {
                                opacity: 1,
                                transform: "translateY(0)"
                            }
                        ],
                        {
                            duration: 350,
                            easing: "ease-out"
                        }
                    );

                } else {

                    card.classList.add("hidden-project");

                }

            });

        });

    });


    /* =====================================================
       3. ACTIVE NAVIGATION ON SCROLL
       ===================================================== */

    const sections = document.querySelectorAll("section[id]");


    function updateActiveNavigation() {

        const scrollPosition = window.scrollY + 160;


        sections.forEach((section) => {

            const sectionTop = section.offsetTop;

            const sectionHeight = section.offsetHeight;

            const sectionId = section.getAttribute("id");


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                navItems.forEach((link) => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${sectionId}`
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    /* =====================================================
       4. SCROLL REVEAL ANIMATIONS
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".skill-card, " +
        ".project-card, " +
        ".timeline-item, " +
        ".achievement-card, " +
        ".education-card"
    );


    /* Respect reduced-motion accessibility preference */

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    if (!prefersReducedMotion && "IntersectionObserver" in window) {

        revealElements.forEach((element) => {

            element.classList.add("reveal");

        });


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


    /* =====================================================
       5. NAVBAR SCROLL EFFECT
       ===================================================== */

    const navbar = document.querySelector(".navbar");


    function updateNavbar() {

        if (!navbar) return;


        if (window.scrollY > 30) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* =====================================================
       6. SMOOTH SCROLLING
       ===================================================== */

    const internalLinks = document.querySelectorAll(
        'a[href^="#"]'
    );


    internalLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");


            if (!targetId || targetId === "#") return;


            const targetSection = document.querySelector(targetId);


            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({

                    behavior: prefersReducedMotion
                        ? "auto"
                        : "smooth",

                    block: "start"

                });

            }

        });

    });


    /* =====================================================
       7. KEYBOARD SUPPORT FOR ESCAPE KEY
       ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            navLinks &&
            navLinks.classList.contains("open")
        ) {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

            menuToggle.focus();

        }

    });


    /* =====================================================
       8. CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "%c Varun S. Portfolio ",
        "background: #38bdf8; color: #070b14; font-weight: bold; padding: 6px 10px; border-radius: 4px;"
    );

});
