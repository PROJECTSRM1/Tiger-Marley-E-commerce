import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Home from "./components/Home";
import Sale from "./components/Sale";
import Festive from "./components/Festive";
import MartingaleCollection from "./components/MartingaleCollection";
import Bags from "./components/Bags";
import Accessories from "./components/Accessories";
import CorporateGifts from "./components/Corporategifts";
import TotesPage from "./pages/TotesPage";
import HandbagsPage from "./pages/HandbagsPage";
import CrossbodyPage from "./pages/CrossbodyPage";
import MinibagsPage from "./pages/MinibagsPage";
import LaptopBagsPage from "./pages/LaptopBagsPage";
import BackpacksPage from "./pages/BackpacksPage";
import DuffleBagsPage from "./pages/DuffleBagsPage";
import LuggageBagsPage from "./pages/LuggageBagsPage";

import JewelleryPage from "./pages/JewelleryPage";
import WalletsPage from "./pages/WalletsPage";
import CardHolderPage from "./pages/CardHolderPage";
import PassportHolderPage from "./pages/PassportHolderPage";
import DiariesPage from "./pages/DiariesPage";
import BeltsPage from "./pages/BeltsPage";
import CharmsPage from "./pages/CharmsPage";
import LaptopSleevePage from "./pages/LaptopSleevePage";
import KeychainsPage from "./pages/KeychainsPage";





function App() {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/festive" element={<Festive />} />
        <Route path="/martingale" element={<MartingaleCollection />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/bags/totes" element={<TotesPage />} />
        <Route path="/bags/handbags" element={<HandbagsPage />} />
        <Route path="/bags/crossbody" element={<CrossbodyPage />} />
        <Route path="/bags/minibags" element={<MinibagsPage />} />
        <Route path="/bags/laptopbags" element={<LaptopBagsPage />} />
        <Route path="/bags/backpacks" element={<BackpacksPage />} />
        <Route path="/bags/dufflebags" element={<DuffleBagsPage />} />
        <Route path="/bags/luggagebags" element={<LuggageBagsPage />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/accessories/jewellery" element={<JewelleryPage />} />
        <Route path="/accessories/wallets" element={<WalletsPage />} />
        <Route path="/accessories/cardholder" element={<CardHolderPage/>} />
        <Route path="/accessories/passportholder" element={<PassportHolderPage />} />
        <Route path="/accessories/dairies" element={<DiariesPage />} />
        <Route path="/accessories/belts" element={<BeltsPage />} />
        <Route path="/accessories/charms" element={<CharmsPage />} />
        <Route path="/accessories/laptopsleeve" element={<LaptopSleevePage />} />
        <Route path="/accessories/keychains" element={<KeychainsPage/>} />
        <Route path="/corporategifts" element={<CorporateGifts />} />
      </Routes>
    </Router>
  );
}

export default App;
