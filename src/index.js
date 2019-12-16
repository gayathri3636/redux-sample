import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import Home from './routes/Home';
import Users from './routes/users';
import Contact from './routes/contact';
import { Provider } from "react-redux";
import store from './Redux/store';
import PrivateRoute from './routes/router';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

const Routing = (
    <Router> 
        <div>
            <switch>
                <Route exact path="/" component={Home} />
                <privateRoute path="/Users" component={Users} />
                <Route path="/Contact" component={Contact} />
            </switch>
        </div>
    </Router>
)

ReactDOM.render(<Provider store = {store}>
    <Routing />
</Provider>, document.getElementById('root'));