import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Header.scss";
import { connect } from "react-redux";
import { toggleSidebarMenu } from "../redux/ActionCreators";

function Header(props: any) {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  }, []);

  // if (window.innerWidth < 500) {
  //   props.toggleSidebarMenu(props.sidebarMenuShowing);
  // }
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
