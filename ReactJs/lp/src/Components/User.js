import React, { useState} from 'react'   
import axios from 'axios';  
import{useLocation} from'react-router-dom'
import { Link } from 'react-router-dom'; 
import Header from './Header';

function User(props) {  
    const search=useLocation().search;
    const valuess=new URLSearchParams(search).get('id');

    const Name=new URLSearchParams(search).get('Name');
    const [user] = useState({ LoanAccountNo:'',FinalStatus:'',InterviewDate:'' ,LoanAmount:''}); 
    const [users, setusers] = useState({ LoanAccountNo:'', FinalStatus:'',InterviewDate:''}); 
  
    const Login = (e) => {  
    
            e.preventDefault();    
            debugger;   
            const data = {LoanAccountNo:user.LoanAccountNo, FinalStatus:user.FinalStatus ,InterviewDate:user.InterviewDate,LoanAmount:user.LoanAmount};    
            console.log(data.FinalStatus);
            console.log(data.FinalStatus);
            axios.get('https://localhost:44354/api/loan/Homeloanbyusermessage?id=' + valuess)    

            .then((result) => {    
                debugger;  
                console.log(result);
                console.log(result.data);   
                setusers( { LoanAccountNo:result.data.LoanAccountNo,FinalStatus:result.data.FinalStatus,InterviewDate:result.data.InterviewDate,LoanAmount:result.data.LoanAmount})
               console.log(result.data.FinalStatus);
               console.log(result.data.LoanAmount);
              if(result.data.FinalStatus=="Accepted  " && result.data.LoanAmount>0){
                console.log(result.data.FinalStatus);
                document.getElementById("pay").style.display="block"
              }
              else if(result.data.LoanAmount<=0){
                alert("Congratulations for completion of loan");
              }   
            })        
          };    
          
    return (    
      <di>

      <Header/>
        <div class="container" > 
   
 <div class="card o-hidden border-0  my-5" style={{ "marginTop": "5rem!important;" }}>  
   <div class="card-body p-0">  
     <div class="row">  
       <div class="col-lg-12">  
         <div class="p-5">  
         
           <form  class="user" id="user">  
         <h4>Hello {Name} ! Please select your action.</h4>
           <br/>
             <div class="form-group row">  
            

               <div class="col-sm-3 mb-3 mb-sm-0">  
               <button type="submit" class="btn btn-info">  
               <Link to={'/HomeLoan' +'?id='+valuess} className="nav-link"  style={{color:"white"}}>Make Loan</Link>  
                 </button>
               </div> 
               <div class="col-sm-3 mb-3 mb-sm-0">  
               <button type="submit" class="btn btn-info">  
               <Link to={'/Edit/' +valuess } className="nav-link" style={{color:"white"}}>Update Profile</Link>  
                 </button>
               </div> 
               
               <div class="col-sm-3 mb-3 mb-sm-0">  
               <button type="submit" class="btn btn-info">  
               <Link to={'/UserLoanProgram'} className="nav-link" style={{color:"white"}}>LoanPrograms</Link>  
                 </button>
               </div> 
               <div class="col-sm-3  mb-3 mb-sm-0">  
              
               <Link   id="pay" to={'/Balance' +'?id=' +valuess} className="nav-link" style={{display:"none"}} ><strong>Pay Loan</strong></Link>   
                 
               </div> 
               
 
             </div>  
          
            
           </form>  
           
         </div>
       </div>  
     </div>  
   </div>  
 </div>  
        <div class="row justify-content-center" id="c1">  
          <div class="col-xl-10 col-lg-12 col-md-9">  
            <div class="card o-hidden border-0 shadow-lg my-5">  
              <div class="card-body p-0">  
                <div class="row">  
               
                  <div class="col-lg-10">  
                    <div class="p-5">  
                      <div class="text-center">  
                        <h4 class="h4 text-gray-900 mb-4">Get Status</h4>  
                      </div>  
                     <p>LoanID : {users.LoanAccountNo}</p>
                     <p>Status : {users.FinalStatus}</p>
                     <p>InterviewDate : {users.InterviewDate}</p>
                     
                            
                      <form onSubmit={Login} class="user" > 

                       <hr/>
                        <button type="submit" className="btn btn-info mb-1" style={{textAlign:"center"}}><span>LoanStatus</span></button>    
                        <hr/>  
                         
                     
                            
           
                      </form>  
                      
                    </div>  
                  </div>  
                </div>  
              </div>  
            </div>  
           </div>  
          </div>  
        </div>  </di>
    )  
}  
  
export default User;