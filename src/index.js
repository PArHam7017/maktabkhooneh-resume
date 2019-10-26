import React from 'react';
import ReactDOM from 'react-dom';


import './assets/bootstrap-4.3.1-dist/css/bootstrap.min.css';
import './style/reset.css';
import './style/style.css';
import './index.css';

import Resume from "./components/Resume/Resume";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Resume />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
