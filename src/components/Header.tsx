import { Link } from "react-router-dom";
import "../assets/styles/Header.scss";
import { connect } from "react-redux";
import { toggleSidebarMenu } from "../redux/ActionCreators";

function Header(props: any) {
  return (
    <>
      <div id="navbar" role="navbar">
        <Link to="/">
          <h1 id="title-container">CRYPTO INFO</h1>
        </Link>

        <div
          className={`${
            props.sidebarMenuShowing
              ? "burger-container"
              : "shrunken-burger-container"
          }`}
          onClick={(e) => props.toggleSidebarMenu(props.sidebarMenuShowing)}
        >
          <div
            className={`${props.sidebarMenuShowing ? "bar1" : "shrunken-bar1"}`}
          ></div>
          <div
            className={`${props.sidebarMenuShowing ? "bar2" : "shrunken-bar2"}`}
          ></div>
          <div
            className={`${props.sidebarMenuShowing ? "bar3" : "shrunken-bar3"}`}
          ></div>
        </div>

        <ul
          className={` ${
            props.sidebarMenuShowing ? "links-container" : "show-mobile-menu"
          }`}
        >
          <li>
            <Link to="/specific-coin" className="link">
              Specific Coin
            </Link>
          </li>
          <li>
            <Link to="/all-coins" className="link">
              Top 50 Coins
            </Link>
          </li>
          <li>
            <Link to="/crypto-history" className="link">
              Blockchain History
            </Link>
          </li>
        </ul>
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
