import { useEffect } from "react";
import "../styles/AllCoins.scss";
import { connect } from "react-redux";
import { getAllCryptos } from "../redux/ActionCreators";
import NumberFormat from "react-number-format";

import Pagination from "./Pagination";

function AllCoins(props: any) {
  useEffect(() => {
    props.getAllCryptos();
  }, []);

  function Post(props: any) {
    const { id, name } = props.data;
    return (
      <div className="post">
        <small>{id}</small>
        <h1>{name}</h1>
      </div>
    );
  }

  return (
    <>
      <h1 id="title">All Coins</h1>
      <Pagination
        data={props.allCryptos}
        RenderComponent={Post}
        title="Posts"
        pageLimit={5}
        dataLimit={10}
      />

      <table
        summary="Information about the top 20 most valuable cryptos"
        id="all-coins-table"
      >
        <caption>
          All prices below are in British Pounds and the coins are listed by
          market cap in descending order.
        </caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>All Time High</th>
            <th>Current Price</th>
            <th>
              Max Supply <br />
              (if applicable)
            </th>
            <th>Market Cap</th>
            <th>Fully Diluted Valuation</th>
          </tr>
        </thead>
        {props.allCryptos &&
          props.allCryptos.map((crypto: any) => (
            <tr>
              <td>{crypto.name}</td>
              <td>
                <NumberFormat
                  value={crypto.ath}
                  displayType="text"
                  thousandSeparator={true}
                />
              </td>
              <td>
                {" "}
                <NumberFormat
                  value={crypto.current_price}
                  displayType="text"
                  thousandSeparator={true}
                />
              </td>
              <td>
                {crypto.max_supply ? (
                  <NumberFormat
                    value={crypto.max_supply}
                    displayType="text"
                    thousandSeparator={true}
                  />
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                {" "}
                <NumberFormat
                  value={crypto.market_cap}
                  displayType="text"
                  thousandSeparator={true}
                />
              </td>
              <td>
                {crypto.fully_diluted_valuation ? (
                  <NumberFormat
                    value={crypto.fully_diluted_valuation}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                ) : (
                  "N/A"
                )}
              </td>
            </tr>
          ))}
      </table>
      <br />
    </>
  );
}

const mapStateToProps = (state: any) => ({
  allCryptos: state.allCryptos,
});

export default connect(mapStateToProps, {
  getAllCryptos,
})(AllCoins);
