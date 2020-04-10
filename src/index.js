import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//DON'T CHANGE ANYTHING IN THIS FILE

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Tells HTML to render everything in App.js to the page */}
  </React.StrictMode>,
  document.getElementById('root') //Render App in html div with id of root. 
);


serviceWorker.unregister();
