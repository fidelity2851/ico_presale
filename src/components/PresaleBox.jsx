function PresaleBox() {
  return (
    <div class="hero__countdown">
      <h1 class="presale_title text-center mb-2">
        <span>Buy $BTCBULL Token</span> <br /> In Presale Now!
      </h1>
      <div class="d-flex justify-content-center gap-4 mb-3">
        <div class="presale_counter">
          <h1>00</h1>
          <p>Days</p>
        </div>
        <div class="presale_counter">
          <h1>00</h1>
          <p>Hours</p>
        </div>
        <div class="presale_counter">
          <h1>00</h1>
          <p>Minutes</p>
        </div>
        <div class="presale_counter">
          <h1>00</h1>
          <p>Second</p>
        </div>
      </div>
      <p class="text-center mb-3">
        Your Purchased: <strong class="text-white">598760.034 TKN</strong>
      </p>
      <p class="text-center mb-1">
        Raised: <strong class="text-white">$2,902,716.72 / $3,485,277</strong>
      </p>
      <div class="hero__progress mb-3">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{ width: "75%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100">
            <span class="presale_progress_hint">Until Price Increase</span>
          </div>
        </div>
      </div>
      <p class="text-center mb-2">
        <strong class="text-white">1 $BTCBULL = $0.002385</strong>
      </p>
      <p class="text-center mb-3">
        Listing Price: <strong class="text-white">$0.034</strong>
      </p>

      <div class="d-flex justify-content-center gap-4 mb-4">
        <p class="presale_buy_token active d-flex align-items-center">
          {" "}
          <img
            src="./assets/img/token/ethereum.png"
            alt="ETH"
            class="me-2"
          />{" "}
          ETH
        </p>
        <p class="presale_buy_token d-flex align-items-center">
          {" "}
          <img src="./assets/img/token/usdt.png" alt="ETH" class="me-2" /> USDT
        </p>
        <p class="presale_buy_token d-flex align-items-center">
          {" "}
          <img src="./assets/img/token/usdc.png" alt="ETH" class="me-2" /> USDC
        </p>
      </div>

      <div class="d-md-flex justify-content-between align-items-end gap-4 mb-3">
        <div class="col mb-2 mb-md-0">
          <div class="d-flex justify-content-between align-items-center">
            <label for="" class="presale_label">
              Amount to spend
            </label>
            <span role="button" class="text-decoration-underline fw-bold">
              Max
            </span>
          </div>
          <div class="d-flex align-items-center presale_input">
            <input type="text" name="" class="" placeholder="0.00" />
            <img src="./assets/img/token/ethereum.png" alt="" class="" />
          </div>
        </div>
        <div class="col">
          <label for="" class="presale_label">
            You Receive
          </label>
          <div class="d-flex align-items-center presale_input">
            <input type="text" name="" class="" value="0.00" readonly />
            <img src="./assets/img/token/money.png" alt="" class="" />
          </div>
        </div>
      </div>
      <p class="text-center mb-3">
        Balance: <strong class="text-white">0.034 ETH</strong>
      </p>

      <div class="d-flex flex-wrap justify-content-center gap-3 mb-2">
        <p class="presale_price active">$100</p>
        <p class="presale_price">$1,000</p>
        <p class="presale_price">$10,000</p>
        <p class="presale_price">$50,000</p>
        <p class="presale_price">$100,000</p>
      </div>
      <p class="presale_error text-center">
        Amount must be greater than 104.82575862401515 POL Insufficient balance
      </p>
      <div class="d-flex justify-content-center my-4">
        <button type="button" class="col-10 presale_btn">
          Buy Now
        </button>
      </div>
      <p class="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus
        explicabo sed labore voluptates.
      </p>
    </div>
  );
}

export default PresaleBox;
