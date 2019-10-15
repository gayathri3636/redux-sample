import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/store';
import {Provider} from 'react-redux';
import 'antd/dist/antd.css';
import combineReducers from './Redux/reducers/index';


ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
