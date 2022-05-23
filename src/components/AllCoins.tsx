import { useEffect, FC } from "react";
import { connect } from "react-redux";
import { getAllCryptos } from "../redux/ActionCreators";
import NumberFormat from "react-number-format";

import Pagination from "./Pagination";
import Loading from "./Loading";

interface AllCoinProps {
  allCryptos: [];
  getAllCryptos: Function;
}

interface CoinComponentProps {
  data: {
    name: string;
    ath: string;
    current_price: string;
    max_supply: string;
    market_cap: string;
    fully_diluted_valuation: string;
  };
}

const AllCoins: FC<AllCoinProps> = (props: AllCoinProps) => {
  useEffect(() => {
    props.getAllCryptos();
  }, []);

  const coin: FC<CoinComponentProps> = (props: CoinComponentProps) => {
    const {
      name,
      ath,
      current_price,
      max_supply,
      market_cap,
      fully_diluted_valuation,
    } = props.data;

    return (
      <>
        <tr>
          <td>{name}</td>
          <td>
            <NumberFormat
              value={ath}
              displayType="text"
              thousandSeparator={true}
            />
          </td>
          <td>
            <NumberFormat
              value={current_price}
              displayType="text"
              thousandSeparator={true}
            />
          </td>
          <td>
            {max_supply ? (
              <NumberFormat
                value={max_supply}
                displayType="text"
                thousandSeparator={true}
              />
            ) : (
              "N/A"
            )}
          </td>
          <td>
            <NumberFormat
              value={market_cap}
              displayType="text"
              thousandSeparator={true}
            />
          </td>
          <td>
            {fully_diluted_valuation ? (
              <NumberFormat
                value={fully_diluted_valuation}
                displayType={"text"}
                thousandSeparator={true}
              />
            ) : (
              "N/A"
            )}
          </td>
        </tr>
      </>
    );
  };

  return (
    <>
      {props.allCryptos ? (
        <>
          <h1 id="title">All Coins</h1>

          <div id="table-container">
            <Pagination
              data={props.allCryptos}
              TableRow={coin}
              title="Coins"
              pageLimit={5}
              dataLimit={10}
            />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  allCryptos: state.allCryptos,
});

export default connect(mapStateToProps, {
  getAllCryptos,
})(AllCoins);
