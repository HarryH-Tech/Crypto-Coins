import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchSpecificCoinData } from "../redux/ActionCreators";

class SpecificCoin extends React.Component<any, any> {
  handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.fetchSpecificCoinData(event.target.value);
  };

  render() {
    const specificCoinData = this.props.specificCoinData;
    console.log(specificCoinData);
    return (
      <>
        <select onChange={this.handleSelection}>
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

        {specificCoinData ? <div>{specificCoinData.name}</div> : "not found"}
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  specificCoinData: state.specificCoinData,
});

export default connect(mapStateToProps, { fetchSpecificCoinData })(
  SpecificCoin
);
