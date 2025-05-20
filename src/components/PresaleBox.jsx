/* eslint-disable react-hooks/exhaustive-deps */
import { Contract, ethers, formatEther, parseEther } from "ethers";
import { useEffect, useState } from "react";
import ICO_ContractAbi from "../abis/ico_abi.json";
import { useWalletContext } from "../context/walletContext";
import useICOData from "../hooks/icoData";
import useTokenData from "../hooks/tokenData";
import Countdown from "react-countdown";

function PresaleBox() {
  const ERC20_ABI = [
    "function balanceOf(address owner) view returns (uint256)",
  ];

  // CountDown timer render
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <>
        <div className="presale_counter">
          <h1>{days}</h1>
          <p>Days</p>
        </div>
        <div className="presale_counter">
          <h1>{hours}</h1>
          <p>Hours</p>
        </div>
        <div className="presale_counter">
          <h1>{minutes}</h1>
          <p>Minutes</p>
        </div>
        <div className="presale_counter">
          <h1>{seconds}</h1>
          <p>Second</p>
        </div>
      </>
    );
  };

  const paymentAmounts = [100, 1000, 5000, 10000, 100000];
  const [paymentTokens, setPaymentTokens] = useState([
    {
      id: 1,
      name: "BNB",
      address: "",
      balance: 0,
      minimumPurchase: 0.01,
      logo: "./assets/img/token/bnb.png",
      isDefault: true,
    },
    {
      id: 2,
      name: "USDT",
      address: process.env.REACT_APP_USDT_ADDRESS,
      balance: 0,
      minimumPurchase: 1,
      logo: "./assets/img/token/usdt.png",
      isDefault: false,
    },
    {
      id: 3,
      name: "USDC",
      address: process.env.REACT_APP_USDC_ADDRESS,
      balance: 0,
      minimumPurchase: 1,
      logo: "./assets/img/token/usdc.png",
      isDefault: false,
    },
  ]);

  const {
    contract,
    rpcProvider,
    signer,
    isConnected,
    walletAddress,
    connectWallet,
  } = useWalletContext();

  const {
    // amountRaised,
    // startTime,
    // endTime,
    // currentStage,
    // tokenPurchased,
    // purchasedLimit,
    salesStage,
    // isPaused,
    // isFinalized,
    fetchICOData,
  } = useICOData();

  const { name, symbol, fetchTokenData } = useTokenData();

  const [activePaymentTokenIndex, setActivePaymentTokenIndex] = useState(0);
  const [amountToSpend, setAmountToSpend] = useState(0.0);
  const [isLoading, setIsLoading] = useState(false);

  const [tokenBought, setTokenBought] = useState(0);
  const [fundsToBeRaised, setFundsToBeRaised] = useState(0);
  const [fundsRaised, setFundsRaised] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  // const [tokenNextPrice, setTokenNextPrice] = useState(0);
  const [errormessage, setErrorMessage] = useState(null);

  async function getPurchasedToken() {
    const amount = await contract.tokensPurchasedByAddress(walletAddress);
    setTokenBought(Number(amount));
  }

  async function calculateAmountRaised() {
    const rate = Number(salesStage?.rate);
    const maxCap = Number(salesStage?.cap);
    const sold = Number(salesStage?.sold);

    setFundsToBeRaised(maxCap / rate);
    setFundsRaised(sold / rate);
    setCurrentPrice(1 / rate);
  }

  function changePaymentToken(index) {
    setActivePaymentTokenIndex(index);
  }

  function buyWithMaxAmount() {
    setAmountToSpend(paymentTokens[activePaymentTokenIndex]?.balance);
  }

  async function getPaymentTokensBalance() {
    try {
      const updatedTokens = await Promise.all(
        paymentTokens.map(async (token, index) => {
          let balance;
          if (token.isDefault) {
            balance = await rpcProvider.getBalance(walletAddress);
          } else {
            const contract = new Contract(
              ethers.getAddress(token.address),
              ERC20_ABI,
              rpcProvider
            );
            balance = await contract.balanceOf(walletAddress);
          }

          return {
            ...token,
            balance: parseFloat(formatEther(balance)).toFixed(5),
          }; // Return updated object
        })
      );

      setPaymentTokens(updatedTokens);
    } catch (error) {
      console.error("Error fetching balances:", error);
    }
  }

  async function purchaseWithDefaultToken(amount) {
    const IcoContract = new Contract(
      process.env.REACT_APP_ICO_CONTRACT_ADRESS,
      ICO_ContractAbi,
      signer
    );

    const amountInWei = parseEther(amount.toString());

    const tx = await IcoContract.buyTokenWithNativeCoin({
      value: amountInWei,
    });

    await tx.wait();
  }
  async function purchaseWithPaymentToken(tokenAddress, amount) {}

  async function purchaseToken() {
    try {
      setIsLoading(true);
      setErrorMessage(null);

      const selectedToken = paymentTokens[activePaymentTokenIndex];
      const numericAmount = parseFloat(amountToSpend);

      // Input validation
      if (!numericAmount || numericAmount <= 0) {
        setErrorMessage("Please enter a valid amount to spend.");
        return;
      }

      // Check if below minimum purchase amount
      if (numericAmount < selectedToken?.minimumPurchase) {
        setErrorMessage(
          `The minimum amount allowed is ${selectedToken?.minimumPurchase} ${selectedToken?.name}.`
        );
        return;
      }

      // Check if user has enough balance
      if (numericAmount > selectedToken?.balance) {
        setErrorMessage(
          `You don't have enough ${selectedToken?.name}. Your balance is ${selectedToken?.balance}.`
        );
        return;
      }

      // Proceed to purchase based on selected token
      if (selectedToken?.isDefault) {
        await purchaseWithDefaultToken(numericAmount);
      } else {
        await purchaseWithPaymentToken(selectedToken?.address, numericAmount);
      }

      // === CLEANUP & REFRESH SECTION ===
      setAmountToSpend(""); // Reset input field

      // Refetch user + contract data
      await Promise.all([
        fetchICOData(),
        getPurchasedToken(),
        getPaymentTokensBalance(),
        calculateAmountRaised(),
      ]);

      // Optionally show a success toast
      // toast.success("Purchase successful!");
    } catch (error) {
      console.error("Error during token purchase:", error);
      setErrorMessage(getReadableErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }

  const getReadableErrorMessage = (error) => {
    if (!error) return "An unknown error occurred.";

    // Ethers 6 rejection (ACTION_REJECTED)
    if (error.code === "ACTION_REJECTED") {
      return "You rejected the transaction. Please approve it in your wallet to proceed.";
    }

    // Nested MetaMask rejection (error inside error)
    if (error?.error?.code === 4001) {
      return "You denied the transaction signature in MetaMask.";
    }

    // Invalid input value or underflow
    if (error.code === "INVALID_ARGUMENT") {
      return "Invalid amount or token format. Please double-check your input.";
    }

    // Gas estimation issues
    if (error.code === "UNPREDICTABLE_GAS_LIMIT") {
      return "The transaction may fail or consume too much gas. Please verify your input and try again.";
    }

    // Any other known structure
    if (typeof error.message === "string") {
      return error.message;
    }

    // Default fallback
    return "Something went wrong while processing your transaction. Please try again.";
  };

  useEffect(() => {
    if (contract) {
      fetchICOData();
      fetchTokenData();
    }
  }, [contract]);

  useEffect(() => {
    if (isConnected && walletAddress) {
      getPurchasedToken();
      getPaymentTokensBalance();
    }
  }, [isConnected, walletAddress]);

  useEffect(() => {
    if (salesStage) {
      calculateAmountRaised();
    }
  }, [salesStage]);

  return (
    <div className="hero__countdown">
      <h1 className="presale_title text-center mb-2">
        <span>Buy ${name} Token</span> <br /> In Presale Now!
      </h1>
      <div className="d-flex justify-content-center gap-4 mb-3">
        <Countdown date={1759420124} renderer={renderer}></Countdown>
      </div>

      <p className="text-center mb-3">
        Your Purchased:{" "}
        <strong className="text-white">
          {tokenBought.toLocaleString()} {symbol}
        </strong>
      </p>
      <p className="text-center mb-1">
        Raised:{" "}
        <strong className="text-white">
          ${fundsRaised.toLocaleString()} / ${fundsToBeRaised.toLocaleString()}
        </strong>
      </p>
      <div className="hero__progress mb-3">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: (fundsRaised * 100) / fundsToBeRaised + "%" }}
            aria-valuenow={(fundsRaised * 100) / fundsToBeRaised}
            aria-valuemin="0"
            aria-valuemax={fundsToBeRaised}>
            <span className="presale_progress_hint">Until Price Increase</span>
          </div>
        </div>
      </div>
      <p className="text-center mb-2">
        <strong className="text-white">
          1 {symbol} = ${currentPrice.toLocaleString()}
        </strong>
      </p>
      <p className="text-center mb-3">
        Listing Price: <strong className="text-white">$0.034</strong>
      </p>

      <div className="d-flex justify-content-center gap-4 mb-4">
        {paymentTokens.map((item, index) => {
          return (
            <p
              className={`presale_buy_token d-flex align-items-center ${
                activePaymentTokenIndex === index ? "active" : ""
              }`}
              key={index}
              onClick={() => changePaymentToken(index)}>
              <img src={item?.logo} alt={item?.name} className="me-2" />{" "}
              {item?.name}
            </p>
          );
        })}
      </div>

      <div className="d-md-flex justify-content-between align-items-end gap-4 mb-3">
        <div className="col mb-2 mb-md-0">
          <div className="d-flex justify-content-between align-items-center">
            <label htmlFor="" className="presale_label">
              Amount to spend
            </label>
            <span
              role="button"
              className="text-decoration-underline fw-bold"
              onClick={() => {
                buyWithMaxAmount();
              }}>
              Max
            </span>
          </div>
          <div className="d-flex align-items-center presale_input">
            <input
              type="number"
              name="amount"
              value={amountToSpend}
              onChange={(e) => setAmountToSpend(Number(e.target.value))}
              placeholder="0.00"
            />
            <img
              src={paymentTokens[activePaymentTokenIndex]?.logo}
              alt=""
              className=""
            />
          </div>
        </div>
        <div className="col">
          <label htmlFor="" className="presale_label">
            You Receive
          </label>
          <div className="d-flex align-items-center presale_input">
            <input type="number" name="" className="" value="0.00" readOnly />
            <img src="./assets/img/token/money.png" alt="" className="" />
          </div>
        </div>
      </div>
      <p className="text-center mb-3">
        Balance:{" "}
        <strong className="text-white">
          {paymentTokens[activePaymentTokenIndex]?.balance}{" "}
          {paymentTokens[activePaymentTokenIndex]?.name}
        </strong>
      </p>

      <div className="d-flex flex-wrap justify-content-center gap-3 mb-2">
        {paymentAmounts.map((item, index) => {
          return (
            <p
              className={`presale_price ${
                amountToSpend === item ? "active" : ""
              }`}
              key={index}
              onClick={() => setAmountToSpend(item)}>
              {item.toLocaleString()}
            </p>
          );
        })}
      </div>
      <p className="presale_error text-center">{errormessage}</p>
      <div className="d-flex justify-content-center my-4">
        {isConnected ? (
          <button
            type="button"
            className="col-10 presale_btn"
            onClick={() => {
              purchaseToken();
            }}
            disabled={isLoading}>
            {isLoading ? "Process..." : "Buy Now"}
          </button>
        ) : (
          <button
            type="button"
            className="col-10 presale_btn"
            onClick={() => {
              connectWallet();
            }}>
            Connect Wallet
          </button>
        )}
      </div>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus
        explicabo sed labore voluptates.
      </p>
    </div>
  );
}

export default PresaleBox;
