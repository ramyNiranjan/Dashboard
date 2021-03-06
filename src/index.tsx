import React from 'react';
import ReactDOM from 'react-dom';
import { Grommet } from 'grommet';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import mainTheme from './theme';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Grommet theme={mainTheme}>
        <App />
      </Grommet>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
