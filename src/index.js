import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import Home from './routes/Home';
import Users from './routes/users';
import Contact from './routes/contact';
import Login from './components/login';
import Register from './components/Register';
import { Provider } from "react-redux";
import store from './Redux/store';
import PrivateRoute from './routes/router';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

/*const Routing = (
    <Router> 
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <privateRoute path="/Users" component={Users} />
                <Route path="/Contact" component={Contact} />
            </Switch>
        </div>
    </Router>
)*/

const Routing = (
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route exact path="/Home" component={Home} />
                    <Route path="/Users" component={Users} />
                    <Route exact path="/" component={Login} />
                    <Route exact path = "/Register" component = {Register} />
                    <Route path="/Contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    </Provider>
)
ReactDOM.render(
    Routing
    , document.getElementById('root'));