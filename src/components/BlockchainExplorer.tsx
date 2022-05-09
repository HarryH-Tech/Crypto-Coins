import { useEffect } from "react";
import { connect } from "react-redux";
import { exploreBlockchain } from "../redux/ActionCreators";

function ExploreBlockchain(props: any) {
  useEffect(() => {
    props.exploreBlockchain();
    console.log(props);
  }, []);

  return <div>HISOTRY</div>;
}

const mapStateToProps = (state: any) => ({
  blockchainInfo: state.blockchainInfo,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, {
  exploreBlockchain,
})(ExploreBlockchain);
