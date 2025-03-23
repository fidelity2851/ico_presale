import { Contract } from "ethers";
import { useEffect, useState } from "react";
import ICO_ContractAbi from "../abis/ico_abi.json";
import { useWalletContext } from "../context/walletContext";
import useICOData from "../hooks/icoData";
import useTokenData from "../hooks/tokenData";

function PresaleBox() {
  const { isConnected, rpcProvider, walletAddress } = useWalletContext();
  const {
    amountRaised,
    startTime,
    endTime,
    currentStage,
    tokenPurchased,
    purchasedLimit,
    salesStage,
    isPaused,
    isFinalized,
  } = useICOData();
  const { name, symbol, decimals } = useTokenData();

  const [contract, setContract] = useState(null);
  const [tokenBought, setTokenBought] = useState(0);

  useEffect(() => {
    const icoContract = new Contract(
      process.env.REACT_APP_ICO_CONTRACT_ADRESS,
      ICO_ContractAbi,
      rpcProvider
    );
    setContract(icoContract);
  }, []);

  useEffect(() => {
    if (isConnected) {
      getPurchasedToken();
    }
  }, [isConnected]);

  async function getPurchasedToken() {
    const amount = await contract.tokensPurchasedByAddress(walletAddress);
    setTokenBought(Number(amount));
  }

  return (
    <div className="hero__countdown">
      <h1 className="presale_title text-center mb-2">
        <span>Buy ${name} Token</span> <br /> In Presale Now!
      </h1>
      <div className="d-flex justify-content-center gap-4 mb-3">
        <div className="presale_counter">
          <h1>00</h1>
          <p>Days</p>
        </div>
        <div className="presale_counter">
          <h1>00</h1>
          <p>Hours</p>
        </div>
        <div className="presale_counter">
          <h1>00</h1>
          <p>Minutes</p>
        </div>
        <div className="presale_counter">
          <h1>00</h1>
          <p>Second</p>
        </div>
      </div>
      <p className="text-center mb-3">
        Your Purchased:{" "}
        <strong className="text-white">
          {tokenBought.toLocaleString()} {symbol}
        </strong>
      </p>
      <p className="text-center mb-1">
        Raised:{" "}
        <strong className="text-white">$2,902,716.72 / $3,485,277</strong>
      </p>
      <div className="hero__progress mb-3">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "75%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100">
            <span className="presale_progress_hint">Until Price Increase</span>
          </div>
        </div>
      </div>
      <p className="text-center mb-2">
        <strong className="text-white">1 ${symbol} = $0.002385</strong>
      </p>
      <p className="text-center mb-3">
        Listing Price: <strong className="text-white">$0.034</strong>
      </p>

      <div className="d-flex justify-content-center gap-4 mb-4">
        <p className="presale_buy_token active d-flex align-items-center">
          {" "}
          <img
            src="./assets/img/token/ethereum.png"
            alt="ETH"
            className="me-2"
          />{" "}
          ETH
        </p>
        <p className="presale_buy_token d-flex align-items-center">
          {" "}
          <img
            src="./assets/img/token/usdt.png"
            alt="ETH"
            className="me-2"
          />{" "}
          USDT
        </p>
        <p className="presale_buy_token d-flex align-items-center">
          {" "}
          <img
            src="./assets/img/token/usdc.png"
            alt="ETH"
            className="me-2"
          />{" "}
          USDC
        </p>
      </div>

      <div className="d-md-flex justify-content-between align-items-end gap-4 mb-3">
        <div className="col mb-2 mb-md-0">
          <div className="d-flex justify-content-between align-items-center">
            <label htmlFor="" className="presale_label">
              Amount to spend
            </label>
            <span role="button" className="text-decoration-underline fw-bold">
              Max
            </span>
          </div>
          <div className="d-flex align-items-center presale_input">
            <input type="text" name="" className="" placeholder="0.00" />
            <img src="./assets/img/token/ethereum.png" alt="" className="" />
          </div>
        </div>
        <div className="col">
          <label htmlFor="" className="presale_label">
            You Receive
          </label>
          <div className="d-flex align-items-center presale_input">
            <input type="text" name="" className="" value="0.00" readOnly />
            <img src="./assets/img/token/money.png" alt="" className="" />
          </div>
        </div>
      </div>
      <p className="text-center mb-3">
        Balance: <strong className="text-white">0.034 ETH</strong>
      </p>

      <div className="d-flex flex-wrap justify-content-center gap-3 mb-2">
        <p className="presale_price active">$100</p>
        <p className="presale_price">$1,000</p>
        <p className="presale_price">$10,000</p>
        <p className="presale_price">$50,000</p>
        <p className="presale_price">$100,000</p>
      </div>
      <p className="presale_error text-center">
        Amount must be greater than 104.82575862401515 POL Insufficient balance
      </p>
      <div className="d-flex justify-content-center my-4">
        <button type="button" className="col-10 presale_btn" onClick={() => {}}>
          Buy Now
        </button>
      </div>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus
        explicabo sed labore voluptates.
      </p>
    </div>
  );
}

export default PresaleBox;
