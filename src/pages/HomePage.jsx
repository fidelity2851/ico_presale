import PresaleBox from "../components/PresaleBox";

function HomePage() {
  return (
    <div>
      {/* <!-- hero start --> */}
      <section id="buy_now" class="hero hero__ico pos-rel">
        <div
          class="hero__bg"
          style={{ backgroundImage: "assets/img/bg/hero_bg.png" }}></div>
        <div class="container mxw_1640">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-6 mb-5">
              <div class="hero__content">
                <h1 class="title mb-45">
                  Participate in the <span>Ongoing ICO Token</span> Sale{" "}
                </h1>
                <h3 class="mb-5">
                  Step into the golden era of memes, where adventurer Pepe has
                  unearthed the ultimate treasure: a revolutionary Layer 2
                  blockchain.
                </h3>
                <div class="btns mb-5">
                  <a class="thm-btn" href="#!">
                    How TO Buy
                  </a>
                  <a class="thm-btn thm-btn--dark" href="#!">
                    WHITEPAPPER
                  </a>
                </div>

                <p class="mb-3">Truted and Audited by</p>
                <div class="d-flex gap-3 overflow-auto">
                  <img
                    src="./assets/img/logo/audit1.svg"
                    alt=""
                    class="presale_audit_img"
                  />
                  <img
                    src="./assets/img/logo/audit2.png"
                    alt=""
                    class="presale_audit_img"
                  />
                  <img
                    src="./assets/img/logo/audit3.svg"
                    alt=""
                    class="presale_audit_img"
                  />
                </div>
              </div>
            </div>
            <div class="col col-xl-4 presale_box mx-auto mb-5">
              <PresaleBox></PresaleBox>
            </div>
          </div>
        </div>
        <div class="hero__shape">
          <div class="shape shape--1">
            <img src="assets/img/shape/h_shape.png" alt="" />
          </div>
          <div class="shape shape--2">
            <img src="assets/img/shape/h_shape2.png" alt="" />
          </div>
          <div class="shape shape--3">
            <img src="assets/img/shape/h_shape3.png" alt="" />
          </div>
        </div>
        {/* <div class="hero__coin">
          <div class="coin coin--1">
            <img src="assets/img/icon/coin1.png" alt="" />
          </div>
          <div class="coin coin--2">
            <img src="assets/img/icon/coin2.png" alt="" />
          </div>
          <div class="coin coin--3">
            <img src="assets/img/icon/coin3.png" alt="" />
          </div>
          <div class="coin coin--4">
            <img src="assets/img/icon/coin4.png" alt="" />
          </div>
          <div class="coin coin--5">
            <img src="assets/img/icon/coin5.png" alt="" />
          </div>
          <div class="coin coin--6">
            <img src="assets/img/icon/coin6.png" alt="" />
          </div>
        </div> */}
      </section>
      {/* <!-- hero end --> */}

      {/* <!-- about start --> */}
      <section id="about" class="about pos-rel pt-50 pb-140">
        <div class="container mxw_1640">
          <div class="row align-items-center mt-none-30">
            <div class="col-lg-6 mt-30">
              <div class="about__img pos-rel wow fadeInLeft">
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/cwK2NS0yfAk"
                  title="ICO, IDO, IEO: Types of Crypto Crowdfunding EXPLAINED"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen></iframe>
                <div class="about__shape">
                  <img src="assets/img/shape/about_shape.png" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 mt-30">
              <div
                class="about__content wow fadeInRight"
                data-wow-delay="100ms">
                <div class="sec-title mb-35">
                  <h5 class="sec-title__subtitle">WHAT IS ICO CRYPTO</h5>
                  <h2 class="sec-title__title mb-25">
                    Invest in our popular ICO and become part of the future of
                    digital finance.
                  </h2>
                  <p>
                    In an ICO, a project or startup issues a new digital token,
                    typically based on a blockchain platform such as Ethereum.
                    These tokens serve a specific purpose within the project's
                    ecosystem, such as accessing services
                  </p>
                </div>
                <ul class="about__list ul_li">
                  <li>
                    <img src="assets/img/icon/a_arrow.svg" alt="" />
                    Decentralized Platform
                  </li>
                  <li>
                    <img src="assets/img/icon/a_arrow.svg" alt="" />
                    Rewards Meachanism
                  </li>
                  <li>
                    <img src="assets/img/icon/a_arrow.svg" alt="" />
                    Crowd Wisdom
                  </li>
                  <li>
                    <img src="assets/img/icon/a_arrow.svg" alt="" />
                    Investor Protection
                  </li>
                  <li>
                    <img src="assets/img/icon/a_arrow.svg" alt="" />
                    Token Sale Phases
                  </li>
                  <li>
                    <img src="assets/img/icon/a_arrow.svg" alt="" />
                    Exchange Listing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="about__sec-shape">
          <img src="assets/img/shape/s_shape2.png" alt="" />
        </div>
      </section>
      {/* <!-- about end --> */}

      {/* <!-- features start --> */}
      <section class="features pos-rel pb-150 ">
        <div class="container ">
          <div class="sec-title text-center mb-95">
            <h5 class="sec-title__subtitle">WHAY CHOOSE US</h5>
            <h2 class="sec-title__title mb-25">Why choose our token?</h2>
          </div>
          <div class="feature__wrap pos-rel ul_li_between">
            <div class="feature__item text-center">
              <div class="icon">
                <img src="assets/img/icon/f_01.svg" alt="" />
              </div>
              <h4>
                Mobile payment <br /> make easy
              </h4>
            </div>
            <div class="feature__item text-center">
              <div class="icon">
                <img src="assets/img/icon/f_02.svg" alt="" />
              </div>
              <h4>
                Investment <br /> Projects
              </h4>
            </div>
            <div class="feature__item text-center">
              <div class="icon">
                <img src="assets/img/icon/f_03.svg" alt="" />
              </div>
              <h4>
                Lifetime free <br /> transaction
              </h4>
            </div>
            <div class="feature__item text-center">
              <div class="icon">
                <img src="assets/img/icon/f_04.svg" alt="" />
              </div>
              <h4>
                Protect the <br /> identity
              </h4>
            </div>
            <div class="feature__item text-center">
              <div class="icon">
                <img src="assets/img/icon/f_05.svg" alt="" />
              </div>
              <h4>
                Security your <br /> money
              </h4>
            </div>
            <div class="feature__line-shape">
              <img src="assets/img/shape/f_shape.png" alt="" />
            </div>
          </div>
        </div>
        <div class="feature__sec-shape">
          <img src="assets/img/shape/s_shape1.png" alt="" />
        </div>
      </section>
      {/* <!-- features end --> */}

      {/* <!-- token info start --> */}
      <section id="tokenomics" class="token-info pos-rel pt-150 pb-100">
        <div class="container mxw_1640">
          <div class="row">
            <div class="col">
              <div class="token-info__title sec-title mb-95 text-center ps-0">
                <h5 class="sec-title__subtitle">ICO coindox Token</h5>
                <h2 class="sec-title__title">
                  ICO Tokens <br /> Details and Sale
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="token-info__img">
                <img src="assets/img/token/t_info_img.png" alt="" />
              </div>
            </div>
            <div class="col-lg-8">
              <div class="token-info--info-wrap ul_li">
                <ul class="token-info__list token-info--start">
                  <li>
                    <h4>Start</h4>
                    <span>June 8, 2023 (9:00AM GMT)</span>
                  </li>
                  <li>
                    <h4>Number of Tokens for Sale</h4>
                    <span>1.000.000 Tokens</span>
                  </li>
                  <li>
                    <h4>Minimal Transaction</h4>
                    <span>10 Tokens / Transaction</span>
                  </li>
                  <li>
                    <h4>Minimal Transaction</h4>
                    <span>10 Tokens / Transaction</span>
                  </li>
                </ul>
                <ul class="token-info__list token-info--end">
                  <li>
                    <h4>End</h4>
                    <span>June 8, 2024 (9:00AM GMT)</span>
                  </li>
                  <li>
                    <h4>Tokens exchange rate</h4>
                    <span>1 ETH = 650 ICC, 1 BTC = 1940 ICC</span>
                  </li>
                  <li>
                    <h4>Acceptable currencies</h4>
                    <span>ETH, BTC, LTC</span>
                  </li>
                  <li>
                    <h4>Acceptable currencies</h4>
                    <span>ETH, BTC, LTC</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="token-info__shape">
          <div class="shape shape--1">
            <img src="assets/img/shape/ti_shape.png" alt="" />
          </div>
          <div class="shape shape--2">
            <img src="assets/img/shape/ti_shape2.png" alt="" />
          </div>
        </div>
      </section>
      {/* <!-- token info end --> */}

      {/* <!-- token start --> */}
      <section class="token pt-md-125">
        <div class="container mxw_1640">
          <div class="row align-items-center mt-none-30">
            <div class="col-lg-5 mt-30">
              <div class="token__content wow fadeInLeft">
                <div class="sec-title mb-20">
                  <h5 class="sec-title__subtitle">Tokenomics</h5>
                  <h2 class="sec-title__title">
                    Token allocation & funds distribution
                  </h2>
                </div>
                <ul class="nav nav-tabs token__tab" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true">
                      Funding Allocation
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false">
                      Token Allocation
                    </button>
                  </li>
                </ul>
                <div class="token__info mt-40">
                  <h2>1 CNL = 0.0013 BTC</h2>
                  <p>
                    A portion of the total token supply is often allocated as
                    reserved <br /> tokens. These tokens are set aside for the
                    development{" "}
                  </p>
                  <div class="token-btn mt-40">
                    <a class="thm-btn" href="#buy_now">
                      buy now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7 mt-30">
              <div
                class="tab-content wow fadeInRight"
                data-wow-delay="100ms"
                id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab">
                  <div class="token__img">
                    <img src="assets/img/token/token_chart.png" alt="" />
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab">
                  <div class="token__img">
                    <img src="assets/img/token/token_chart2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- token end --> */}

      {/* <!-- roadmap start --> */}
      <section id="roadmap" class="roadmap pt-lg-80 pb-lg-100 pt-145 pos-rel ">
        <div class="container">
          <div class="sec-title style2 text-center mb-60">
            <h5 class="sec-title__subtitle">Road map</h5>
            <h2 class="sec-title__title ">Our project plan</h2>
            <p>blockchain a Solid Infrastructure for Growth</p>
          </div>
          <div class="roadmap__list pos-rel">
            <div class="roadmap__list-box">
              <div class="roadmap__list-inner">
                <div class="icon">
                  <img src="assets/img/icon/rm_icon.png" alt="" />
                </div>
                <h3>
                  Stage 1 <br /> Q1 - 2023
                </h3>
                <ul class="list-unstyled">
                  <li>Ideation</li>
                  <li>Proof of Concept</li>
                  <li>Business Deck</li>
                  <li>Security Audit</li>
                  <li>Token on BEP 20</li>
                </ul>
              </div>
            </div>
            <div class="roadmap__list-box">
              <div class="roadmap__list-inner">
                <div class="icon">
                  <img src="assets/img/icon/rm_icon.png" alt="" />
                </div>
                <h3>
                  Stage 2 <br /> Q2 - 2023
                </h3>
                <ul class="list-unstyled">
                  <li>Mainnet Launch</li>
                  <li>Smart Contract Upgrade</li>
                  <li>Cross-Chain Interoperability</li>
                  <li>Governance Model Implementation</li>
                  <li>Whitepaper Release</li>
                </ul>
              </div>
            </div>
            <div class="roadmap__list-box">
              <div class="roadmap__list-inner">
                <div class="icon">
                  <img src="assets/img/icon/rm_icon.png" alt="" />
                </div>
                <h3>
                  Stage 3 <br /> Q3 - 2023
                </h3>
                <ul class="list-unstyled">
                  <li>Decentralized Finance Expansion</li>
                  <li>Proof of Concept</li>
                  <li>Privacy Enhancements</li>
                  <li>Developer Grants Program</li>
                  <li>BCL Mobile App</li>
                </ul>
              </div>
            </div>
            <div class="roadmap__list-box">
              <div class="roadmap__list-inner">
                <div class="icon">
                  <img src="assets/img/icon/rm_icon.png" alt="" />
                </div>
                <h3>
                  Stage 4 <br /> Q4 - 2023
                </h3>
                <ul class="list-unstyled">
                  <li>Builder NFT Airdrop</li>
                  <li>Website Launch</li>
                  <li>Legal Opinion</li>
                  <li>NFT Marketplace Launch</li>
                  <li>Whitepaper Release</li>
                </ul>
              </div>
            </div>
            <div class="roadmap__list-box">
              <div class="roadmap__list-inner">
                <div class="icon">
                  <img src="assets/img/icon/rm_icon.png" alt="" />
                </div>
                <h3>
                  Stage 5 <br /> Q5 - 2024
                </h3>
                <ul class="list-unstyled">
                  <li>Scalability Improvements</li>
                  <li>Real-World Integration</li>
                  <li>User-Friendly Wallet</li>
                  <li>Sustainable Blockchain</li>
                  <li>Global Community Expansion</li>
                </ul>
              </div>
            </div>
            <div class="roadmap__list-box">
              <div class="roadmap__list-inner">
                <div class="icon">
                  <img src="assets/img/icon/rm_icon.png" alt="" />
                </div>
                <h3>
                  Stage 6 <br /> Q6 - 2024
                </h3>
                <ul class="list-unstyled">
                  <li>Citizenship and land parcel</li>
                  <li>Meta Event Arena Launch</li>
                  <li>First Planet Phase 1 Launch</li>
                  <li>NFT Artist Onboarding Release</li>
                  <li>Initial Metaverse Offering Launce</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- roadmap end --> */}

      {/* <!-- team start --> */}
      <section id="team" class="team pos-rel pos-rel pt-150">
        <div class="container mxw_1640">
          <div class="sec-title text-center mb-70">
            <h5 class="sec-title__subtitle">Our Team</h5>
            <h2 class="sec-title__title">Meet our skilld team</h2>
          </div>
          <div class="team__wrap ul_li">
            <div class="team__item">
              <div class="avatar">
                <img src="assets/img/team/img_01.png" alt="" />
              </div>
              <div class="team__info text-center mb-20">
                <h3>Michael Johnson</h3>
                <span>Developer</span>
              </div>
              <div class="team__social ul_li_center">
                <ul class="team__social-link link-left ul_li">
                  <li>
                    <a href="#!">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                </ul>
                <span class="h-icon">
                  <i class="far fa-plus"></i>
                </span>
                <ul class="team__social-link link-right ul_li">
                  <li>
                    <a href="#!">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="team__item">
              <div class="avatar">
                <img src="assets/img/team/img_02.png" alt="" />
              </div>
              <div class="team__info text-center mb-20">
                <h3>Nathaniel Lewis</h3>
                <span>Founder & CO</span>
              </div>
              <div class="team__social ul_li_center">
                <ul class="team__social-link link-left ul_li">
                  <li>
                    <a href="#!">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                </ul>
                <span class="h-icon">
                  <i class="far fa-plus"></i>
                </span>
                <ul class="team__social-link link-right ul_li">
                  <li>
                    <a href="#!">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="team__item">
              <div class="avatar">
                <img src="assets/img/team/img_03.png" alt="" />
              </div>
              <div class="team__info text-center mb-20">
                <h3>Timothy Young</h3>
                <span>Designer</span>
              </div>
              <div class="team__social ul_li_center">
                <ul class="team__social-link link-left ul_li">
                  <li>
                    <a href="#!">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                </ul>
                <span class="h-icon">
                  <i class="far fa-plus"></i>
                </span>
                <ul class="team__social-link link-right ul_li">
                  <li>
                    <a href="#!">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="team__item">
              <div class="avatar">
                <img src="assets/img/team/img_04.png" alt="" />
              </div>
              <div class="team__info text-center mb-20">
                <h3>David Williams</h3>
                <span>Consultant</span>
              </div>
              <div class="team__social ul_li_center">
                <ul class="team__social-link link-left ul_li">
                  <li>
                    <a href="#!">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                </ul>
                <span class="h-icon">
                  <i class="far fa-plus"></i>
                </span>
                <ul class="team__social-link link-right ul_li">
                  <li>
                    <a href="#!">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="team__shape">
          <div class="shape shape--1">
            <img src="assets/img/shape/t_shape1.png" alt="" />
          </div>
          <div class="shape shape--2">
            <img src="assets/img/shape/t_shape2.png" alt="" />
          </div>
        </div>
      </section>
      {/* <!-- team end --> */}

      {/* <!-- faq start --> */}
      <section id="faq" class="faq pos-rel pt-140 pb-105">
        <div class="container">
          <div class="sec-title text-center mb-35">
            <h5 class="sec-title__subtitle">FAQ</h5>
            <h2 class="sec-title__title">Frequently asked questions</h2>
          </div>
          <div class="faq__wrap">
            <ul class="accordion_box clearfix">
              <li class="accordion block active-block">
                <div class="acc-btn">
                  <span>QA : 01</span>
                  How is the ICO project different from other blockchain
                  ventures?
                </div>
                <div class="acc_body current">
                  <div class="content">
                    <p>
                      The cost of artificial intelligence in software
                      development is determined by many factors:
                    </p>
                    <ul>
                      <li>Scale of the project</li>
                      <li>Set of technologies involved</li>
                      <li>Number of development hours</li>
                    </ul>
                    <p>
                      Our team assists you in every possible way, balancing the
                      cost and quality of your product for maximum satisfaction.{" "}
                      <br />
                      To get a concrete assessment of your future AI solution,{" "}
                      <a href="#!">Contact us</a> and we will quickly provide
                      you with all the information you need.
                    </p>
                  </div>
                </div>
              </li>
              <li class="accordion block">
                <div class="acc-btn">
                  <span>QA : 02</span>
                  What security measures are in place to protect ICO
                  participants' investments <br /> an participate in the ICO?
                </div>
                <div class="acc_body">
                  <div class="content">
                    <p>
                      The cost of artificial intelligence in software
                      development is determined by many factors:
                    </p>
                    <ul>
                      <li>Scale of the project</li>
                      <li>Set of technologies involved</li>
                      <li>Number of development hours</li>
                    </ul>
                    <p>
                      Our team assists you in every possible way, balancing the
                      cost and quality of your product for maximum satisfaction.{" "}
                      <br />
                      To get a concrete assessment of your future AI solution,{" "}
                      <a href="#!">Contact us</a> and we will quickly provide
                      you with all the information you need.
                    </p>
                  </div>
                </div>
              </li>
              <li class="accordion block">
                <div class="acc-btn">
                  <span>QA : 03</span>
                  What is the purpose and vision behind this ICO project?
                </div>
                <div class="acc_body">
                  <div class="content">
                    <p>
                      The cost of artificial intelligence in software
                      development is determined by many factors:
                    </p>
                    <ul>
                      <li>Scale of the project</li>
                      <li>Set of technologies involved</li>
                      <li>Number of development hours</li>
                    </ul>
                    <p>
                      Our team assists you in every possible way, balancing the
                      cost and quality of your product for maximum satisfaction.{" "}
                      <br />
                      To get a concrete assessment of your future AI solution,{" "}
                      <a href="#!">Contact us</a> and we will quickly provide
                      you with all the information you need.
                    </p>
                  </div>
                </div>
              </li>
              <li class="accordion block">
                <div class="acc-btn">
                  <span>QA : 04</span>
                  What security measures are in place to protect ICO
                  participants' investments <br /> an participate in the ICO?
                </div>
                <div class="acc_body">
                  <div class="content">
                    <p>
                      The cost of artificial intelligence in software
                      development is determined by many factors:
                    </p>
                    <ul>
                      <li>Scale of the project</li>
                      <li>Set of technologies involved</li>
                      <li>Number of development hours</li>
                    </ul>
                    <p>
                      Our team assists you in every possible way, balancing the
                      cost and quality of your product for maximum satisfaction.{" "}
                      <br />
                      To get a concrete assessment of your future AI solution,{" "}
                      <a href="#!">Contact us</a> and we will quickly provide
                      you with all the information you need.
                    </p>
                  </div>
                </div>
              </li>
              <li class="accordion block">
                <div class="acc-btn">
                  <span>QA : 05</span>
                  How can I secure and store my purchased ICO tokens?
                </div>
                <div class="acc_body">
                  <div class="content">
                    <p>
                      The cost of artificial intelligence in software
                      development is determined by many factors:
                    </p>
                    <ul>
                      <li>Scale of the project</li>
                      <li>Set of technologies involved</li>
                      <li>Number of development hours</li>
                    </ul>
                    <p>
                      Our team assists you in every possible way, balancing the
                      cost and quality of your product for maximum satisfaction.{" "}
                      <br />
                      To get a concrete assessment of your future AI solution,{" "}
                      <a href="#!">Contact us</a> and we will quickly provide
                      you with all the information you need.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="faq__sec-shape">
          <div class="shape shape--1">
            <img src="assets/img/shape/s_shape1.png" alt="" />
          </div>
          <div class="shape shape--2">
            <img src="assets/img/shape/s_shape2.png" alt="" />
          </div>
        </div>
      </section>
      {/* <!-- faq end --> */}

      {/* <!-- brand start --> */}
      <section class="brand pb-150">
        <div class="container">
          <div class="sec-title text-center mb-65">
            <h5 class="sec-title__subtitle">trusted by 10,0000+ teams</h5>
          </div>
        </div>
        <div class="brand__marquee">
          <div class="brand__item">
            <img src="assets/img/brand/img_01.png" alt="" />
          </div>
          <div class="brand__item">
            <img src="assets/img/brand/img_02.png" alt="" />
          </div>
          <div class="brand__item">
            <img src="assets/img/brand/img_03.png" alt="" />
          </div>
          <div class="brand__item">
            <img src="assets/img/brand/img_04.png" alt="" />
          </div>
          <div class="brand__item">
            <img src="assets/img/brand/img_05.png" alt="" />
          </div>
          <div class="brand__item">
            <img src="assets/img/brand/img_06.png" alt="" />
          </div>
          <div class="brand__item">
            <img src="assets/img/brand/img_07.png" alt="" />
          </div>
          <div class="brand__item">
            <img src="assets/img/brand/img_08.png" alt="" />
          </div>
        </div>
      </section>
      {/* <!-- brand end --> */}

      {/* <!-- contact start --> */}
      <section id="contact" class="ico-contact pos-rel">
        <div class="container">
          <div class="ico-contact__wrap">
            <h2 class="title">Contact with coindox</h2>
            <form action="#!">
              <div class="row">
                <div class="col-lg-6">
                  <input type="text" placeholder="Enter Name" />
                </div>
                <div class="col-lg-6">
                  <input type="email" placeholder="Enter Mail" />
                </div>
                <div class="col-lg-12">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Enter your message..."></textarea>
                </div>
                <div class="ico-contact__btn text-center mt-10">
                  <button class="thm-btn" type="submit">
                    send message
                  </button>
                </div>
              </div>
            </form>
            <div class="ico-contact__shape-img">
              <div class="shape shape--1">
                <div data-parallax='{"y" : -50}'>
                  <img src="assets/img/shape/c_shape1.png" alt="" />
                </div>
              </div>
              <div class="shape shape--2">
                <div data-parallax='{"y" : 60}'>
                  <img src="assets/img/shape/c_shape2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ico-contact__shape">
          <div class="shape shape--1">
            <img src="assets/img/shape/f_shape1.png" alt="" />
          </div>
          <div class="shape shape--2">
            <img src="assets/img/shape/f_shape2.png" alt="" />
          </div>
          <div class="shape shape--3">
            <img src="assets/img/shape/f_shape3.png" alt="" />
          </div>
        </div>
      </section>
      {/* <!-- contact end --> */}
    </div>
  );
}

export default HomePage;
