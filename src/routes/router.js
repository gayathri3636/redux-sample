import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

class privateRoute extends React.Component{
    render() {
        const loginStatus  = true;
              const { component: Component,  ...props } = this.props
              return (
                <Route
                  {...props}
                  render={props => (
                    loginStatus ?
                      <Component {...props} /> :
                      <Redirect to='/' />
                  )}
                />
              )
    }

    
}
const mapStateToProps = state => {
    return {
  }};
  export default connect(mapStateToProps)(privateRoute);