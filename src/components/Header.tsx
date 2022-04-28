import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

function Header() {
  return (
    <>
      <div id="links-container" role="links-container">
        <Link to="/specific-coin" className="link" role="specific-coin-link">
          Specific Coin
        </Link>

        <Link to="/all-coins" className="link" role="all-coins-link">
          All Coins
        </Link>

        <Link to="/crypto-history" className="link" role="crypto-history-link">
          {" "}
          Crypto History
        </Link>
      </div>
    </>
  );
}

export default Header;
