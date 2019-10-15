import React from 'react';
import {connect} from "react-redux";
import './App.css';
//import 'antd/dist/antd.css/';
import {Form, Input, Button } from "antd";
import {loginUser} from './Redux/actions/index';

const ErrorValidationLabel = ({ txtLbl }) => (    
  <label htmlFor="" style={{ color: "red", display:"block" }}></label>
);
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username : "",
      password:  "",
      errorText : "",
      isValid : true
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
   CheckForm(form) {
    const{username,password} = this.state;
    if(form.username.value = "") {
      alert("Error: username cannot be blank")
      form.username.focus()
      return false
    }
    var re = /^\w+$/;
    if(!re.test(form.username.value)) {
      alert("Error: Username must contain only letters, numbers and underscores!");
      form.username.focus();
      return false;
    }
    if(form.password.value.length < 8 && form.password.value.length > 18) {
      alert("Error: Password must contain at least eight characters and not greater than 18 characters!");
      form.password.focus();
      return false;
    }
    if(form.password.value === form.username.value){
      alert("Error: username and password must be different")
      form.password.focus();
      return false;
    }else {
      alert("Error: Please check that you've entered and confirmed your password!");
      form.password.focus();
      return false;
    }alert("You entered a valid password: " + form.password.value);
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

  static getDerivedStateFromProps(newProps, prevState) {
    console.log(newProps.result);

    return null;
  }
  render() {

    const { username, password, errorText, isValid } = this.state;
    const renderValidationError = isValid ? "" : <ErrorValidationLabel txtLbl={errorText} />;
    return(
      <body>
      <div id = "parent">
      
        <Form id = "form-inside-input" onSubmit = {this.CheckForm}>
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
          {renderValidationError}
        </Form>
      
      </div>
      </body>
    )
  }
}

const mapStateToProps = state => {
  return {
      result: state.login.result
  };
};
export default connect(mapStateToProps)(App);
