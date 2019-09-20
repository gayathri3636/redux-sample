import React from 'react';
import './App.css';
import 'antd/dist/antd.css/';
//import {Form, Input, Button } from "antd";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username : "",
      password:  ""
    }
  }
  render() {
    return(
      <div className = "login">
        <form>
          username:<br/>
          <input className = "user"
          size = "large"
          type = "text"
          name = "username"/>
          <br />
          password:<br />
          <input className = "password"
          size ="large"
          type = "password"
          name = "psw" />
          <br />
          <button className = "button" type ="primary">Login</button>
        </form>
      
      </div>
    )
  }
}

export default App;
