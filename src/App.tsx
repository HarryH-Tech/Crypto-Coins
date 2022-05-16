import "./assets/styles/App.scss";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";

import SpecificCoin from "./components/SpecificCoin";
import AllCoins from "./components/AllCoins";
import History from "./components/History";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/*" element={<Home />} />

        <Route path="/specific-coin" element={<SpecificCoin />} />
        <Route path="/all-coins" element={<AllCoins />} />
        <Route path="/crypto-history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
