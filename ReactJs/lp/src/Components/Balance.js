import React, { useState, useEffect } from 'react'   
import axios from 'axios';  
import{useLocation} from'react-router-dom'
import Header from './Header';

function PayLoan(props) {  
    const search=useLocation().search;
    const valuess=new URLSearchParams(search).get('id');
    const [user, setuser] = useState({ LoanAccountNo:'',LoanAmount:''}); 
    const [users, setusers] = useState({ LoanAccountNo:'',LoanAmount:''});  
  
    const EMIPAY= (e) => {  
    
            e.preventDefault();    
            debugger;   
            const data = {LoanAccountNo:user.LoanAccountNo, LoanAmount:user.LoanAmount};    
            console.log(user.LoanAccountNo);
            console.log(data.LoanAmount);
            axios.put( 'https://localhost:44354/api/loan/Homeloanbyusermessage?id='+valuess+'&amount='+user.LoanAmount)    

            .then((result) => {    
                debugger;  
                console.log(user.amount)
                console.log(result);
                setusers({LoanAccountNo:result.data.AccountNo,LoanAmount:result.data.LoanAmount})
                console.log(result.data.LoanAmount); 
                console.log(users)

                
                })        
          };    
          
          const onChange = (e) => {  
            e.persist();  
            debugger;  
            setuser({ ...user, [e.target.name]: e.target.value });  
          }     
    return (  


      
    <div>
          
<Header/>

 
        
        <div class="container">  
        
        <div class="row justify-content-center">  
          <div class="col-xl-4 col-lg-12 col-md-9">  
            <div class="card o-hidden border-0 shadow-lg my-5 ">  
              <div class="card-body p-0">  
                <div class="row">  
                  
                  <div class="col-lg-12">  
                    <div class="p-5">  
                      <div class="text-center">  
                        <h2 class="h4 text-gray-900 mb-4">Available Balance</h2>  
                      </div>  
                     
                       <h1>{users.LoanAmount}</h1>
                            
                      <form onSubmit={EMIPAY} class="user" > 
                      <div class="col-sm-12 mb-3">  
                      <input type="number" name="LoanAmount" onChange={onChange} value={user.LoanAmount} class="form-control  pl-1 mb-3" id="exampleFirstName" required  placeholder="Amount in RS" />  
                    </div> 
                    <hr/>  
                        <button type="submit" className="btn btn-info mb-1 btn-block" style={{textAlign:"center"}}><span>Pay</span></button>    
                      </form>  
                      <hr/>  
                    </div>  
                  </div>  
                </div>  
              </div>  
            </div>  
           </div>  
          </div>  
        </div>  </div>
    )  
}  
  
export default PayLoan