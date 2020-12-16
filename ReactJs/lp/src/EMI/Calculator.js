import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "../styles/Calculator.css";
import "react-input-range/lib/css/index.css";

class Calculator extends Component {
  state = {
    amountValue: 5000,
    yearsValue: 1,
    interestValue: 10
  };

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleYearChange = value => {
    this.setState({ yearsValue: value });
  };
  handleInterestChange = value => {
    this.setState({ interestValue: value });
  };

  render() {
    const { amountValue, yearsValue ,interestValue } = this.state;

    return (
      <div className="App">


<form >  
                   
                  <div class="form-group row">  
                  <div class="col-sm-6">  
                     
                  <p><strong>I want to borrow Rs {amountValue}</strong></p>
 
                   </div>  
                  <div class="col-sm-6 mb-3 mb-sm-0">  
                  <InputRange
          step={100}
          maxValue={2000000}
          minValue={200000}
          value={amountValue}
          onChange={this.handleAmountChange}
        />
                  </div>
                
                 
                    </div>  

                    <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <p><strong> Over {yearsValue} year{yearsValue > 1 && "s"}</strong></p>
                    </div>
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                    <InputRange
          step={0.5}
          maxValue={15}
          minValue={10}
          value={yearsValue}
          onChange={this.handleYearChange}
        />
                    </div>  
                    </div>

                    <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <p><strong>Over {interestValue} </strong></p>
                    </div>  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                    <InputRange
          step={0.5}
          maxValue={15}
          minValue={10}
          value={interestValue}
          onChange={this.handleInterestChange}
        />
                    </div>  
                    </div>
             
                    <div class="form-group row">  
                    <div class="col-sm-6  offset-sm-3  mb-3 mb-sm-0">  
                    <Display years={yearsValue} amount={amountValue} interest={interestValue} />
                    </div>  
                   </div>
                 
                  <hr />  
                </form>  





      </div>
    );
  }
}

export default Calculator;
