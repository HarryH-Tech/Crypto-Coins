import { Link } from "react-router-dom";
import "../assets/styles/Header.scss";
import { connect } from "react-redux";
import { toggleSidebarMenu } from "../redux/ActionCreators";

function Header(props: any) {
  console.log(props);
  return (
    <>
      <div id="navbar" role="navbar">
        <Link to="/">
          <h1 id="title-container">CRYPTO INFO</h1>
        </Link>

        <div
          className="burger-container"
          onClick={(e) => props.toggleSidebarMenu(props.sidebarMenuShowing)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        {props.sidebarMenuShowing && (
          <ul className="links-container">
            <li>
              <Link
                to="/specific-coin"
                className="link"
                role="specific-coin-link"
              >
                Specific Coin
              </Link>
            </li>
            <li>
              <Link to="/all-coins" className="link" role="all-coins-link">
                Top 50 Coins
              </Link>
            </li>
            <li>
              <Link
                to="/crypto-history"
                className="link"
                role="crypto-history-link"
              >
                Crypto History
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  sidebarMenuShowing: state.sidebarMenuShowing,
});

export default connect(mapStateToProps, {
  toggleSidebarMenu,
})(Header);
