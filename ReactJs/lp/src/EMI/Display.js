import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChils";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Display extends Component {


  calculateMonthlyRepayment = () => {
    const { amount, years ,interest } = this.props;

   
    const totalOwed = interest * amount;
    const monthlyRepayment = totalOwed / (years * 12);

    return <p>Rs{Math.round(monthlyRepayment)}</p>;
  };

  

  render() {
    return (
      <div className="flex" >
       
        <DisplayChild
          func={this.calculateMonthlyRepayment()}
          text=" monthly repayment"
        />
      </div>
    );
  }
}

Display.propTypes = {
  years: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default Display;
