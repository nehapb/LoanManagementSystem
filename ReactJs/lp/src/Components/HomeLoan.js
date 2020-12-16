import React, { useState } from 'react'  
import axios from 'axios';  
import Calculator from '../EMI/Calculator';
import Header from './Header';

function HomeLoan(props) {  
  const [data, setdata] = useState({LoanId:'', Duration:'',Occupation:'',AnnualIncome:'',LoanAmount:'',Duration:'',AccountNo:'',EMI:''});  
  const apiUrl = "https://localhost:44354/api/loan/HomeLoan";  
  const HomeLoaning = (e) => {  
    e.preventDefault(); 

    debugger;  
    const data1 = {LoanId:data.LoanId,Occupation:data.Occupation,AnnualIncome:data.AnnualIncome,LoanAmount:data.LoanAmount,Duration:data.Duration,AccountNo:data.AccountNo,EMI:data.EMI};  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
        alert("Request SuccessFull");
          props.history.push('/Login')  
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  return (  
    <di>

    <Header/>
    <div class="container">  
      <div class="row">  
       
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
         
            <div class="col-lg-12">  
           
              <div class="p-5">  
              <h4>Loan Application</h4><br/>
                <form onSubmit={HomeLoaning} class="user">  
                
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="LoanId" onChange={onChange} value={data.LoanAccountNo} class="form-control" id="exampleFirstName" required  placeholder="LoanId" />  
                    </div> 
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="AccountNo" onChange={onChange} value={data.AccountNo} class="form-control"   required id="exampleRepeatPassword" placeholder="AccountNumber" />  
                    </div> 
                  </div>  
                  <div class="form-group row">  
                  
                  <div class="col-sm-6 mb-3 mb-sm-0">  
                    <input type="text" name="Occupation" onChange={onChange} value={data.Occupation} class="form-control" id="exampleInputEmail"   required placeholder="Occupation" />  
                  </div>
                
                    <div class="col-sm-6 ">  
                      <input type="text" name="AnnualIncome" onChange={onChange} value={data.AnnualIncome} class="form-control" id="exampleInputPassword" required placeholder="AnnualIncome" />  
                    </div> 
                    </div>  

                    <div class="form-group row">  
                    
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="number" name="LoanAmount" onChange={onChange} value={data.LoanAmount} class="form-control" id="exampleRepeatPassword"  required placeholder="Loan Amount" />  
                    </div>
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Duration" onChange={onChange} value={data.Duration} class="form-control"  required id="exampleRepeatPassword" placeholder="Duration" />  
                    </div> 
                    </div> 
                   
                <div class="row" id="status1" >
    <div class="col-sm-12 col-lg-12">
        <div class="card1 card o-hidden border-0 shadow-lg my-5">
            <div class="card-body" id="emi" >
            <h5 style={{color:"#034d53"}}>Estimate EMI </h5>
            <br/>
            <Calculator/>
            </div>
        </div>
    </div>
    
</div>     
                        <div class="col-sm-12  mb-3 mb-sm-0">  <button type="submit" class="btn btn-info  btn-block">  
                   Apply
                </button>  
                </div>
                  <hr />  
                </form>  
              
              </div>
       
            </div>  
          </div>  
        </div>  
      </div>  
     
    </div>  </di>
  )  
}  
  
export default HomeLoan