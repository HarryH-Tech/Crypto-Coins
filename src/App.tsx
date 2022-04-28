import "./styles/App.scss";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import SpecificCoin from "./components/SpecificCoin";
import AllCoins from "./components/AllCoins";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/specific-coin" element={<SpecificCoin />} />
        <Route path="/all-coins" element={<AllCoins />} />
      </Routes>
    </Router>
  );
}

export default App;
