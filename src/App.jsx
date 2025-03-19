import { Provider } from "react-redux";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { WalletProvider } from "./context/walletContext";

function App() {
  return (
    <>
      <WalletProvider>
        <Header />
        <HomePage />
        <Footer />
      </WalletProvider>
    </>
  );
}

export default App;
