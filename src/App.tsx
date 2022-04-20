import './styles/App.sass';
import {BrowserRouter as Router, Link} from "react-router-dom";


function App() {
  return (
    <Router>
    <div id="links-container" role="links-container">
      <Link to="/specific-coin" className="link" role="specific-coin-container">
      Search A Specific Coin
      </Link>
      
      <div className="link" >
        All Coins
      </div>

      <div className="link">
        History
      </div>
    </div>
    </Router>

  );
}

export default App;
