import "../assets/styles/Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content-container">
        <div className="content">
          <Link className="home-link" to="specific-coin">
            Specific Coin
          </Link>
          <p>Search for information about a specific cryptocurrency.</p>
        </div>

        <div className="content">
          <Link className="home-link" to="all-coins">
            Top 50 Coins
          </Link>
          <p>
            See information about the top 50 cryptocurrencies by market cap
            including their all time high, current price and max supply.
          </p>
        </div>

        <div className="content">
          <Link className="home-link" to="crypto-history">
            Blockchain History
          </Link>
          <p>
            Find out more about the history of blockchains, their development
            and their potential impact in the future.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
