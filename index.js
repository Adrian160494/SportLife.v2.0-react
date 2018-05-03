import React from 'react';
import ReactDOM from 'react-dom';
import Container from './React/Container.js';
import {store} from './Redux/reducers/reducers.js';
import {Provider} from 'react-redux';

ReactDOM.render(<Provider store={store} ><Container/></Provider>,document.getElementById('app'));