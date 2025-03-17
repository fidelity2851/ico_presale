function Header() {
    return(
        <>
        {/* <!-- header start --> */}
        <header class="site-header header--transparent ico-header">
            <div class="header__main-wrap stricky">
                <div class="container mxw_1640">
                    <div class="header__main ul_li_between">
                        <div class="header__left ul_li">
                            <div class="header__logo">
                                <a href="index.html"><img src="assets/img/logo/logo.svg" alt="" /></a>
                            </div>
                        </div>
                        <div class="main-menu__wrap ul_li navbar navbar-expand-xl">
                            <nav class="main-menu collapse navbar-collapse">
                                <ul>
                                    <li><a class="scrollspy-btn" href="#about">about</a></li>
                                    <li><a class="scrollspy-btn" href="#tokenomics">Tokenomics</a></li>
                                    <li><a class="scrollspy-btn" href="#roadmap">Roadmap</a></li>
                                    <li><a class="scrollspy-btn" href="#team">Team</a></li>
                                    <li><a class="scrollspy-btn" href="#faq">Faq</a></li>
                                    <li><a class="scrollspy-btn" href="#contact">contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="header__action ul_li">
                            <div class="d-xl-none">
                                <a class="header__bar hamburger_menu" href="/">
                                    <div class="header__bar-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </a>
                            </div>
                            <div class="header__language">
                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="assets/img/icon/us_flag.png" alt="" />ENGLISH <i
                                            class="fas fa-chevron-down"></i>
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <a class="dropdown-item" href="index.html"><img
                                                src="assets/img/icon/chn_flag.png" alt="" />China</a>
                                        <a class="dropdown-item" href="index.html"><img
                                                src="assets/img/icon/rsa_flag.png" alt="" />Russia</a>
                                        <a class="dropdown-item" href="index.html"><img
                                                src="assets/img/icon/in_flag.png" alt="" />India</a>
                                    </div>
                                </div>
                            </div>
                            <div class="header__account">
                                <a href="#!">Connect Wallet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- header end --> */}

        {/* <!-- slide bar start --> */}
        <aside class="slide-bar">
            <div class="close-mobile-menu">
                <a class="tx-close" href="/">x</a>
            </div>

            {/* <!-- side-mobile-menu start --> */}
            <nav class="side-mobile-menu">
                <a class="header__logo mb-30" href="#!">
                    <img src="assets/img/logo/logo.svg" alt="" />
                </a>
                <div class="header-mobile-search">
                    <form role="search" method="get" action="#">
                        <input type="text" placeholder="Search Keywords" />
                        <button type="submit"><i class="ti-search"></i></button>
                    </form>
                </div>
                <ul id="mobile-menu-active">
                    <li><a class="scrollspy-btn" href="#about">about</a></li>
                    <li><a class="scrollspy-btn" href="#tokenomics">Tokenomics</a></li>
                    <li><a class="scrollspy-btn" href="#roadmap">Roadmap</a></li>
                    <li><a class="scrollspy-btn" href="#team">Team</a></li>
                    <li><a class="scrollspy-btn" href="#faq">Faq</a></li>
                    <li><a class="scrollspy-btn" href="#contact">contact</a></li>
                </ul>

            </nav>
            {/* <!-- side-mobile-menu end --> */}
        </aside>

        <div class="body-overlay"></div>
        {/* <!-- slide bar end --> */}
        </>
    );
}

export default Header;