import "./styles/App.scss";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import SpecificCoin from "./components/SpecificCoin";

function App() {
  return (
    <Router>
      <div id="links-container" role="links-container">
        <Link
          to="/specific-coin"
          className="link"
          role="specific-coin-container"
        >
          Search A Specific Coin
        </Link>

        <div className="link" role="all-coins-container">
          All Coins
        </div>

        <div className="link" role="history-container">
          History
        </div>
      </div>
      <hr />
      <Routes>
        <Route path="/specific-coin" element={<SpecificCoin />} />
      </Routes>
    </Router>
  );
}

export default App;
