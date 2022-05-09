import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../styles/SpecificCoin.scss";
import NumberFormat from "react-number-format";
import Loading from "./Loading";

import { fetchSpecificCoinData } from "../redux/ActionCreators";

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

  useEffect(() => {
    props.fetchSpecificCoinData("bitcoin");
    console.log(props);
  }, []);

  const specificCoin = props.specificCoinData.coinDataRes;
  const companyHoldings = props.specificCoinData.companyHoldingsRes;

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
      {specificCoin && (
        <div id="data-container">
          <h2 id="coin-name">{specificCoin.data.name}</h2>

          <div id="image-container">
            <img
              src={specificCoin.data.image.large}
              alt={`Icon of ${specificCoin.data.id}`}
            />
          </div>
          <div id="other-data-container">
            {specificCoin.data.hashing_algorithm && (
              <>
                <div id="meta-data-container">
                  <h3>Meta Data</h3>
                  <p>
                    <span className="label"> Hashing Algorithm:</span>{" "}
                    {specificCoin.data.hashing_algorithm}
                  </p>
                  <p>
                    <span className="label"> Genesis Block Date:</span>{" "}
                    {specificCoin.data.genesis_date}
                  </p>
                  <p>
                    <span className="label">Market Cap Rank:</span>{" "}
                    {specificCoin.data.market_cap_rank} ({" "}
                    <NumberFormat
                      displayType={"text"}
                      value={specificCoin.data.market_data.market_cap.gbp}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                    )
                  </p>
                  <p>
                    <span className="label">Current Price:</span>{" "}
                    <NumberFormat
                      displayType={"text"}
                      value={specificCoin.data.market_data.current_price.gbp}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </p>
                  <p>
                    <span className="label">Alexa Rank:</span>{" "}
                    {specificCoin.data.public_interest_stats.alexa_rank}
                  </p>
                </div>
              </>
            )}

            <div id="dev-data-container">
              {specificCoin.data.developer_data && (
                <>
                  <h3>Developer Data</h3>
                  <p>
                    <span className="label">Closed Github Issues:</span>{" "}
                    {specificCoin.data.developer_data.closed_issues}
                  </p>
                  <p>
                    <span className="label">Github Forks:</span>{" "}
                    {specificCoin.data.developer_data.forks}
                  </p>
                  <p>
                    <span className="label">Github Stars:</span>{" "}
                    {specificCoin.data.developer_data.stars}
                  </p>
                  <p>
                    <span className="label">Github Pull Requests Merged:</span>{" "}
                    {specificCoin.data.developer_data.pull_requests_merged}
                  </p>
                  <p>
                    {" "}
                    <span className="label">Total Github Issues:</span>{" "}
                    {specificCoin.data.developer_data.total_issues}
                  </p>
                </>
              )}
            </div>
          </div>
          <p id="description">
            {specificCoin.data.description &&
              URLReplacer(specificCoin.data.description.en)}
          </p>
        </div>
      )}
      <br />
      {companyHoldings && (
        <table id="company-holdings-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Value of Holdings</th>
              <th>Percentage of Total Supply Held</th>
              <th>Country of Origin</th>
            </tr>
          </thead>
          {companyHoldings.data.companies.map((company: any) => (
            <>
              <tbody>
                <tr>
                  <td key={company.name}>{company.name}</td>
                  <td key={company.total_current_value_usd}>
                    {
                      <NumberFormat
                        displayType="text"
                        value={company.total_current_value_usd}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                    }
                  </td>
                  <td key={company.percentage_of_total_supply}>
                    {company.percentage_of_total_supply}
                  </td>
                  <td key={company.country}>{company.country}</td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      )}
      <br />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  specificCoinData: state.specificCoinData,
  loading: state.loading,
});

export default connect(mapStateToProps, {
  fetchSpecificCoinData,
})(SpecificCoin);
