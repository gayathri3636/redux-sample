import React from 'react';
import './App.css';
//import 'antd/dist/antd.css/';
import {Form, Input, Button } from "antd";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username : "",
      password:  "",
      errorText : ""
    }
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //const {name, value} = e.target;
    this.setState((prevState, prevProps) => {
      return {[name] : value}
    });
  }

  validateForm() {
    const{username,password} = this.state;
    if(username.length === 0 || password.length === 0){
      this.setState({errorText : "Enter username and password before hitting submit button"});
      return false;
    }
    if(username.indexOf('gmail.com') !== -1 || username.indexOf('@rsrit.com')) {
      this.setState({errorText : 'should be an email from gmail or Rsrit'});
      return false;
    }
    return true;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("The entered username is :" +this.state.username);
    console.log("The entered password is :" +this.state.password);
    e.preventDefault();
    if(this.validateForm()){
      console.log("username : " +this.state.username);
      console.log("password: " + this.state.password);
    }
  };
  render() {
    return(
      <div className = "login">
      
        <Form className = "form-inside-input"onSubmit = {this.handleSubmit}>
          username:<br/>
          <Input className =  "user"
            type = "text"
            placeholder = "Enter username"
            value = {this.state.username}
            onChange = {this.handleChange}
            name = "username"
            required />
          <br />
          password:<br />
          <Input className = "password"
            type = "password"
            placeholder = "Enter password"
            //value = {this.state.password}
            onChange = {this.handleChange}
            name = "psw" 
            required />
          <br />
          <Button className = "button" type ="primary">Login</Button>
        </Form>
      
      </div>
    )
  }
}

export default App;
