import React from 'react';
import ReactDOM from 'react-dom';
import Apps from './main-app';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.hydrate(<Apps />, document.getElementById('root'));

serviceWorkerRegistration.register();

// if(module.hot){
//   module.hot.accept('@apps/main.js', () => {
//     const NextApp = require('@apps/main.js').default;
//     ReactDOM.hydrate(<NextApp renderFrom={"browser"} />, document.getElementById('root'));
//   })
// }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
