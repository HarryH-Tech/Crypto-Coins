import "../styles/Home.scss";
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
          <p>Search for information about a specific cryptocurrency</p>
        </div>

        <div className="content">
          <Link className="home-link" to="all-coins">
            Top 50 Coins
          </Link>
          <p>Search for information about a specific cryptocurrency</p>
        </div>

        <div className="content">
          <Link className="home-link" to="crypto-history">
            Crypto History
          </Link>
          <p>Search for information about a specific cryptocurrency</p>
        </div>
      </div>
    </>
  );
}

export default Home;
