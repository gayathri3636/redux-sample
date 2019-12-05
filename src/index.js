import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import Home from './Home';
import Users from './routes/users';
import Contact from './routes/contact';
import { Provider } from "react-redux";
import store from './Redux/store';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

const Routing = (
    <Router> 
        <div>
            <ul>
                <li>
                    <Link to = "/Home">Home</Link>
                </li>
                <li>
                    <Link to = "/Users">Users</Link>
                </li>
                <li>
                    <Link to = "/Contact">Contact</Link>
                </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/Users" component={Users} />
            <Route path="/Contact" component={Contact} />
        </div>
    </Router>
)

ReactDOM.render(<Provider store={store}>
        <App />
        <Home />
        <Users />
        <Contact />
    </Provider>, document.getElementById('root'));