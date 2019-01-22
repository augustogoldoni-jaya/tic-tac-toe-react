import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import Game from './components/game';
import BlueGame from './components/blue_game';
import './index.css';

const Index = () => <h2>Home</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/game/">Game</Link>
          </li>
          <li>
            <Link to="/blue-game/">Blue Game</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/game/" component={Game} />
      <Route path="/blue-game/" component={BlueGame} />
    </div>
  </Router>
);

export default AppRouter;

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
