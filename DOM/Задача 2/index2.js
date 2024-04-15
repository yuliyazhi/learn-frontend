const ROOT = document.querySelector(".root");
const headerElem = document.createElement("header");
ROOT.insertAdjacentHTML("beforeend", headerNav);

const headerNav = document.createElement("nav")
headerNav.innerHTML = `<div class="header__menu>
            <div class="header__logo" >
            <img src="./assets/images/logo.svg" alt="logo">
        </div>
        <div class="header_general">
            <div class="header_nav">
                <a class="nav link" href="">Features</a>
                <a class="nav link" href="">Pricing</a>
                <a class="nav link" href="">Resources</a>
            </div>

            <div class="header__user">
                <a class="user__login link" href="">Log in</a>
                <a class="user__demo link_black" href="">Try for free</a>

            </div>
        </div>`
headerElem.insertAdjacentElement("afterbegin", headerNav);

const mainElem = document.createElement("main");
const mainTPL = `<div class="main">
    <aside class="main__nav menu">
        <a class="main__menu link" href="">Dishboard</a>
        <a class="main__menu link"  href="">Flows</a>
        <a class="main__menu link"  href="">Temptlates</a>
        <a class="main__menu link" href="">Apps</a>
        <a class="main__menu link" href="">Experts</a>
        <a class="main__menu link" href="">Account settings</a>
        <a class="main__menu link" href="">Help center</a>
        <a class="main__menu link" href="">Log out</a>
    </aside>
    <div class="services">
        <h1>How to forecast business <br>
            finances with gini</h1>
        <div class="services__menu">

            <article class="services__exposition">
                <img src="./assets/images/pic1.png" alt="">
                <h3>Run Instant Analysis</h3>
                <p>Quick sync your accounting software to experience fast-track automation that produces
                    power-packed
                    financial reports. Select parameters to run forecasts and access relevant metrics</p>
            </article>
            <article class="services__exposition">
                <img src="./assets/images/pic2.png" alt="">
                <h3>Design and Forecast</h3>
                <p>Find all of your data in a flexible spreadsheet for easy viewing and custom modeling.
                    Study
                    real-time
                    reports and quickly forecast with simplified tools that put you in charge.</p>
            </article>
            <article class="services__exposition">
                <img src="./assets/images/pic3.png" alt="">
                <h3>Collaborate with Purpose</h3>
                <p>Enjoy one-click sharing with interactive capabilities that bring your entire team to the
                    same
                    page.
                    Collaboratively map out financial plans with the purpose-driven data you need to make
                    big
                    decisions.
                </p>
            </article>
        </div>
    </div>
    </div>`
mainElem.innerHTML = mainTPL;

const footerElem = document.createElement("footer");
const footerNav = `
<footer class="footer">
<nav class="footer__nav">
    <div class="footer__info">
        <img src="./assets/images/logo_white.svg" alt="logo">
        <p class="footer__right">Copyright © 2023 gini</p>
        <div class="footer__contact">
            <a class="contact_logo" href=""><img src="./assets/images/in.png" alt="in"></a>
            <a class="contact_logo" href=""><img src="./assets/images/fb.png" alt=""></a>.
            <a class="contact_logo twitter" href=""><img src="./assets/images/twitter.png" alt=""></a>
        </div>

    </div>
    <div class="footer__info">
        <a class="learn top" href="">Learn</a>
        <a class="learn__link link_black" href="">Pricing</a>
        <a class="learn__link link_black" href="">Blog</a>
        <a class="learn__link link_black" href="">Schedule a demo</a>
        <a class="learn__link link_black" href="">Help Center</a>
    </div>

    <div class="footer__info">
        <a class="learn top" href="">Our company</a>
        <a class="learn__link link_black" href="">Privacy Policy</a>
        <a class="learn__link link_black" href="">User Term</a>
        <a class="learn__link link_black" href="">Careers</a>

    </div>
    <div class="footer__info">
        <a class="learn top" href="">Get in touch</a>
        <a class="learn__link" >Contact us</a>
        <a class="learn__link" >US: +1 512 3801008</a>
        <a class="learn__link" >AU: +61 037 0368558</a>
        <a class="learn__link" >NZ: +64 9 8888606</a>
        <a class="learn__link" >predict.help@gini.co
        </a>
    </div>
</nav>
</footer>`
footerElem.innerHTML = footerNav;

ROOT.insertAdjacentElement("beforeend", headerElem);
ROOT.insertAdjacentElement("beforeend", mainElem);
ROOT.insertAdjacentElement("beforeend", footerElem);