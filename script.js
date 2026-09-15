document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuButton = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileLinks = document.querySelectorAll(".mobile-nav a");

    if (menuButton && mobileNav) {

        menuButton.addEventListener("click", () => {

            const isOpen = mobileNav.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

    }


    /* =========================
       CLOSE MOBILE MENU
    ========================= */

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("open");

            if (menuButton) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    });


    /* =========================
       PROJECT REVEAL
    ========================= */

    const projects = document.querySelectorAll(".project");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        projects.forEach(project => {
            observer.observe(project);
        });

    } else {

        projects.forEach(project => {
            project.classList.add("visible");
        });

    }


    /* =========================
       CURRENT YEAR
    ========================= */

    const footerYear =
        document.querySelector(".copyright");

    if (footerYear) {

        footerYear.textContent =
            `© ${new Date().getFullYear()} Fort Manuel`;

    }

});
