import { useEffect } from "react";
import { connect } from "react-redux";
import "../assets/styles/SpecificCoin.scss";
import NumberFormat from "react-number-format";
import { v4 as uuid } from "uuid";
import Loading from "./Loading";
import { fetchSpecificCoinData } from "../redux/ActionCreators";

const id: string = uuid();

const SpecificCoin = (props: any) => {
  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.fetchSpecificCoinData(event.target.value);
    console.log(props);
  };

  // Prevent anchor tags from appearing in text as a string of the anchor tag
  // element, rather than actual anchor tag
  const URLReplacer = (str: string) => {
    let match = str.replace(/<a\b[^>]*>/g, "").replace(/<\/a>/g, "");
    return match;
  };

  useEffect(() => {
    props.fetchSpecificCoinData("bitcoin");
  }, []);

  const specificCoin = props.specificCoinData.coinDataRes;
  const companyHoldings = props.specificCoinData.companyHoldingsRes;

  return (
    <>
      <div id="select-box-container">
        <select onChange={handleSelection} id="select-element">
          <option key={uuid()} value="bitcoin">
            Bitcoin
          </option>
          <option key={uuid()} value="ethereum">
            Ethereum
          </option>
          <option key={uuid()} value="ripple">
            XRP
          </option>
          <option key={uuid()} value="tether">
            Tether
          </option>
          <option key={uuid()} value="cardano">
            Cardano
          </option>
          <option key={uuid()} value="polkadot">
            Polkadot
          </option>
          <option key={uuid()} value="stellar">
            Stellar
          </option>
          <option key={uuid()} value="dogecoin">
            Dogecoin
          </option>
          <option key={uuid()} value="solana">
            Solana
          </option>
        </select>
      </div>

      {props.loading ? <Loading /> : null}
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
      {props.error ? <div className="error">{props.error}</div> : null}
      {companyHoldings ? (
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
              <tbody key={id}>
                <tr>
                  <td key={uuid()}>{company.name}</td>
                  <td key={uuid()}>
                    {
                      <NumberFormat
                        displayType="text"
                        value={company.total_current_value_usd}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                    }
                  </td>
                  <td key={uuid()}>{company.percentage_of_total_supply}</td>
                  <td key={uuid()}>{company.country}</td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      ) : null}
      <br />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  specificCoinData: state.specificCoinData,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, {
  fetchSpecificCoinData,
})(SpecificCoin);
