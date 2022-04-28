import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../styles/SpecificCoin.scss";
import NumberFormat from "react-number-format";

import {
  fetchSpecificCoinData,
  getCompanyHoldings,
} from "../redux/ActionCreators";

const SpecificCoin = (props: any) => {
  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.fetchSpecificCoinData(event.target.value);
  };

  // Prevent anchor tags from appearing in text as a string of the anchor tag
  // element, rather than actual anchor tag
  const URLReplacer = (str: string) => {
    let match = str.replace(/<a\b[^>]*>/g, "").replace(/<\/a>/g, "");
    return match;
  };

  const handleGetCompanyHoldings = () => {
    props.getCompanyHoldings(props.specificCoinData.cryptoName);
  };

  useEffect(() => {
    props.fetchSpecificCoinData("bitcoin");
  }, []);

  const specificCoinData = props.specificCoinData;
  const companyHoldings = props.companyHoldings;
  return (
    <>
      <div id="select-box-container">
        <select onChange={handleSelection} id="select-element">
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="ripple">XRP</option>
          <option value="tether">Tether</option>
          <option value="cardano">Cardano</option>
          <option value="polkadot">Polkadot</option>
          <option value="stellar">Stellar</option>
          <option value="dogecoin">Dogecoin</option>
          <option value="solana">Solana</option>
        </select>
      </div>
      {specificCoinData ? (
        <div id="data-container">
          <h2 id="coin-name">{specificCoinData.data.name}</h2>

          <div id="image-container">
            <img
              src={specificCoinData.data.image.large}
              alt={`Icon of ${specificCoinData.data.id}`}
            />
          </div>
          <div id="other-data-container">
            {specificCoinData.data.hashing_algorithm && (
              <>
                <div id="meta-data-container">
                  <h3>Meta Data</h3>
                  <p>
                    <span className="label"> Hashing Algorithm:</span>{" "}
                    {specificCoinData.data.hashing_algorithm}
                  </p>
                  <p>
                    <span className="label"> Genesis Block Date:</span>{" "}
                    {specificCoinData.data.genesis_date}
                  </p>
                  <p>
                    <span className="label">Market Cap Rank:</span>{" "}
                    {specificCoinData.data.market_cap_rank} ({" "}
                    <NumberFormat
                      displayType={"text"}
                      value={specificCoinData.data.market_data.market_cap.gbp}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                    )
                  </p>
                  <p>
                    <span className="label">Current Price:</span>{" "}
                    <NumberFormat
                      displayType={"text"}
                      value={
                        specificCoinData.data.market_data.current_price.gbp
                      }
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </p>
                  <p>
                    <span className="label">Alexa Rank:</span>{" "}
                    {specificCoinData.data.public_interest_stats.alexa_rank}
                  </p>
                </div>
              </>
            )}

            <div id="dev-data-container">
              {specificCoinData.data.developer_data && (
                <>
                  <h3>Developer Data</h3>
                  <p>
                    {" "}
                    <span className="label">Closed Github Issues:</span>{" "}
                    {specificCoinData.data.developer_data.closed_issues}
                  </p>
                  <p>
                    {" "}
                    <span className="label">Github Forks:</span>{" "}
                    {specificCoinData.data.developer_data.forks}
                  </p>
                  <p>
                    {" "}
                    <span className="label">Github Stars:</span>{" "}
                    {specificCoinData.data.developer_data.stars}
                  </p>
                  <p>
                    {" "}
                    <span className="label">
                      Github Pull Requests Merged:
                    </span>{" "}
                    {specificCoinData.data.developer_data.pull_requests_merged}
                  </p>
                  <p>
                    {" "}
                    <span className="label">Total Github Issues:</span>{" "}
                    {specificCoinData.data.developer_data.total_issues}
                  </p>
                </>
              )}
            </div>
          </div>
          <p id="description">
            {specificCoinData.data.description &&
              URLReplacer(specificCoinData.data.description.en)}
          </p>
          <div id="companies-button-container">
            <button id="companies-button" onClick={handleGetCompanyHoldings}>
              See Which Companies hold{" "}
              {specificCoinData.cryptoName.charAt(0).toUpperCase() +
                specificCoinData.cryptoName.slice(1)}
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {companyHoldings && (
        <div id="company-holdings-container">
          {companyHoldings.companies.map((company: any) => (
            <>
              <div id="company-container">
                <h3>{company.name}</h3>
                <p>
                  <span className="label">Holding Value: </span> $
                  {company.total_current_value_usd}
                </p>
                <p>
                  <span className="label"> Country:</span> {company.country}
                </p>
              </div>
            </>
          ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  specificCoinData: state.specificCoinData,
  companyHoldings: state.companyHoldings,
});

export default connect(mapStateToProps, {
  fetchSpecificCoinData,
  getCompanyHoldings,
})(SpecificCoin);
