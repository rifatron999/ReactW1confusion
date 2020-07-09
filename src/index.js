import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //for bootstrap
import './index.css'; //my custom css file should be imported after bootstrap so for i can user them into my custom css file 
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(//?ReactDOM.render()
  <React.StrictMode>
    <App />
  </React.StrictMode>,//?<React.StrictMode
  document.getElementById('root')//?root last e keno
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
