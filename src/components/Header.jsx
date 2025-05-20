import { useWalletContext } from "../context/walletContext";

function Header() {
  const { isConnected, walletAddress, connectWallet, disconnectWallet } =
    useWalletContext();

  return (
    <>
      {/* <!-- header start --> */}
      <header className="site-header header--transparent ico-header">
        <div className="header__main-wrap stricky">
          <div className="container mxw_1640">
            <div className="header__main ul_li_between">
              <div className="header__left ul_li">
                <div className="header__logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo.svg" alt="Logo" width={200} />
                  </a>
                </div>
              </div>
              <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
                <nav className="main-menu collapse navbar-collapse">
                  <ul>
                    <li>
                      <a className="scrollspy-btn" href="#about">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="scrollspy-btn" href="#tokenomics">
                        Tokenomics
                      </a>
                    </li>
                    <li>
                      <a className="scrollspy-btn" href="#roadmap">
                        Roadmap
                      </a>
                    </li>
                    <li>
                      <a className="scrollspy-btn" href="#team">
                        Team
                      </a>
                    </li>
                    <li>
                      <a className="scrollspy-btn" href="#faq">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a className="scrollspy-btn" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header__action ul_li">
                <div className="d-xl-none">
                  <a className="header__bar hamburger_menu" href="/">
                    <div className="header__bar-icon">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </a>
                </div>
                <div className="header__language">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <img src="assets/img/icon/us_flag.png" alt="" />
                      ENGLISH <i className="fas fa-chevron-down"></i>
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1">
                      <a className="dropdown-item" href="index.html">
                        <img src="assets/img/icon/chn_flag.png" alt="" /> China
                      </a>
                      <a className="dropdown-item" href="index.html">
                        <img src="assets/img/icon/rsa_flag.png" alt="" /> Russia
                      </a>
                      <a className="dropdown-item" href="index.html">
                        <img src="assets/img/icon/in_flag.png" alt="" /> India
                      </a>
                    </div>
                  </div>
                </div>
                <div className="header__account">
                  {isConnected ? (
                    <button
                      className="presale_btn"
                      type="button"
                      onClick={disconnectWallet}>
                      {walletAddress.slice(0, 10)}...
                    </button>
                  ) : (
                    <button
                      className="presale_btn"
                      type="button"
                      onClick={connectWallet}>
                      Connect Wallet
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header end --> */}

      {/* <!-- slide bar start --> */}
      <aside className="slide-bar">
        <div className="close-mobile-menu">
          <a className="tx-close" href="/">
            x
          </a>
        </div>

        {/* <!-- side-mobile-menu start --> */}
        <nav className="side-mobile-menu">
          <a className="header__logo mb-30" href="#!">
            <img src="assets/img/logo/logo.svg" alt="Logo" />
          </a>
          <div className="header-mobile-search">
            <form role="search" method="get" action="#">
              <input type="text" placeholder="Search Keywords" />
              <button type="submit">
                <i className="ti-search"></i>
              </button>
            </form>
          </div>
          <ul id="mobile-menu-active">
            <li>
              <a className="scrollspy-btn" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="scrollspy-btn" href="#tokenomics">
                Tokenomics
              </a>
            </li>
            <li>
              <a className="scrollspy-btn" href="#roadmap">
                Roadmap
              </a>
            </li>
            <li>
              <a className="scrollspy-btn" href="#team">
                Team
              </a>
            </li>
            <li>
              <a className="scrollspy-btn" href="#faq">
                FAQ
              </a>
            </li>
            <li>
              <a className="scrollspy-btn" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* <!-- side-mobile-menu end --> */}
      </aside>

      <div className="body-overlay"></div>
      {/* <!-- slide bar end --> */}
    </>
  );
}

export default Header;
