/*
 *
 * Home
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectHome from './selectors';
import styles from './styles.css';

export class Home extends React.Component { 
  constructor(props){
    super(props)

    this.emailInput = this.emailInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
    this.signup = this.signup.bind(this);
  }

  emailInput(e){
    console.log(e.target.value);
  }

  passwordInput(){

  }

  signup(){
    
  }

  render() {
    return (
      <div className={styles.home}>
      Welcome! Please sign up.
        <form onSubmit={this.signup}>
          <input type="text" onChange={this.emailInput} placeholder="Email"/>
          <input type="password" onChange={this.passwordInput} placeholder="password" />
          <button type="submit">Sign Up!</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = selectHome();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
