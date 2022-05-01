import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../styles/SpecificCoin.scss";
import NumberFormat from "react-number-format";
import Loading from "./Loading";

import {
  fetchSpecificCoinData,
  getCompanyHoldings,
} from "../redux/ActionCreators";

const SpecificCoin = (props: any) => {
  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.fetchSpecificCoinData(event.target.value);
    props.getCompanyHoldings(props.specificCoinData.cryptoName);
  };

  // Prevent anchor tags from appearing in text as a string of the anchor tag
  // element, rather than actual anchor tag
  const URLReplacer = (str: string) => {
    let match = str.replace(/<a\b[^>]*>/g, "").replace(/<\/a>/g, "");
    return match;
  };

  useEffect(() => {
    props.fetchSpecificCoinData("bitcoin");
    props.getCompanyHoldings("bitcoin");
    console.log(props);
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

      {props.loading && <Loading />}
      {specificCoinData && (
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
                    <span className="label">Closed Github Issues:</span>{" "}
                    {specificCoinData.data.developer_data.closed_issues}
                  </p>
                  <p>
                    <span className="label">Github Forks:</span>{" "}
                    {specificCoinData.data.developer_data.forks}
                  </p>
                  <p>
                    <span className="label">Github Stars:</span>{" "}
                    {specificCoinData.data.developer_data.stars}
                  </p>
                  <p>
                    <span className="label">Github Pull Requests Merged:</span>{" "}
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
        </div>
      )}
      <br />
      {companyHoldings && (
        <table id="company-holdings-table">
          <tr>
            <th>Company Name</th>
            <th>Value of Holdings (US $)</th>
            <th>Percentage of Total Supply Held</th>
            <th>Country of Origin</th>
          </tr>
          {companyHoldings.companies.map((company: any) => (
            <>
              <tr>
                <td>{company.name}</td>
                <td>{company.total_current_value_usd}</td>
                <td>{company.percentage_of_total_supply}</td>
                <td>{company.country}</td>
              </tr>
            </>
          ))}
        </table>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  specificCoinData: state.specificCoinData,
  companyHoldings: state.companyHoldings,
  loading: state.loading,
});

export default connect(mapStateToProps, {
  fetchSpecificCoinData,
  getCompanyHoldings,
})(SpecificCoin);
