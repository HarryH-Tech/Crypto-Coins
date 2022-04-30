import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

function Header() {
  return (
    <>
      <div id="navbar" role="navbar">
        <h1 id="title-container">CRYPTO INFO</h1>

        <ul className="links-container">
          <li>
            <Link
              to="/specific-coin"
              className="link"
              role="specific-coin-link"
            >
              Specific Coin
            </Link>
          </li>
          <li>
            <Link to="/all-coins" className="link" role="all-coins-link">
              All Coins
            </Link>
          </li>
          <li>
            <Link
              to="/crypto-history"
              className="link"
              role="crypto-history-link"
            >
              Crypto History
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
