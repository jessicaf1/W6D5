import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock.jsx';
import Tabs from './frontend/tabs.jsx';
import App from './frontend/app.jsx'

document.addEventListener('DOMContentLoaded', () => {
  // debugger
  const root = document.getElementById('root');
  //const widg = React.createElement("div", null, [""]);
 // const widg = <h1>Clockity Click Clock</h1>
  ReactDOM.render(<App/>, root);
})