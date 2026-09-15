document.addEventListener("DOMContentLoaded", () => {

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


    /*
     * Fecha o menu mobile depois
     * de clicar numa secção.
     */

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


    /*
     * Pequeno efeito de aparecimento
     * dos projetos quando entram no ecrã.
     */

    const projects = document.querySelectorAll(".project");

    const observer = new IntersectionObserver(
        (entries) => {

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


    /*
     * Atualiza automaticamente o ano
     * do footer.
     */

    const footerYear = document.querySelector(".footer p:last-child");

    if (footerYear) {

        footerYear.textContent =
            `© ${new Date().getFullYear()} Fort Manuel`;

    }

});
