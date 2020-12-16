import React, { useState, useEffect } from 'react'   
import axios from 'axios';  
import HomeIcon  from '@material-ui/icons/Home';
import "../styles/Calculator.css";
import { Link } from 'react-router-dom'; 

function Login(props) {  
    const [user, setuser] = useState({ Name: '', Password: ''});  
    const apiUrl = "https://localhost:44354/api/login/loginuser";    
    const Login = (e) => {  
    
            e.preventDefault();    
            debugger;   
            const data = { Name:user.Name, Password: user.Password };    
            axios.post(apiUrl, data)    
            .then((result) => {    
                debugger;  
                console.log(result);

                console.log(result.data);   
                const serializedState = JSON.stringify(result.data.UserDetails);  
               const user =result.data.UserDetails;  
            
                if (result.data.status == '201')  {
                  
              
                  props.history.push("/Admin") 

                } else if (result.data.status == '204')  {
             
                 props.history.push('/User'+'?id='+result.data.UserDetails.AccountNo+'&Name='+result.data.UserDetails.Name)   
                  
                    
                } else if (result.data.status == '202')  {
               console.log(serializedState.Id);
          
                    props.history.push('/ClientManager'+'?id='+result.data.UserDetails.Id+'&Name='+result.data.UserDetails.Name)   
                } 
                

                else    
                alert('Invalid');    
            })        
          };    
          
          const onChange = (e) => {    
                e.persist();    
                debugger;    
                setuser({...user, [e.target.name]: e.target.value});    
              }    
    return ( 
      
      <div >

<nav className="navbar navbar-expand-lg navbar-dark bg-info ">      
          <div className="collapse navbar-collapse" > 
  <ul className="nav navbar-nav  ">  
            <li className="nav-item nav-right ">      
                <Link to={'/'} className="nav-link"><strong><HomeIcon/>EASY LOAN</strong></Link>      
              </li>       
               
               
              <li className="nav-item ">      
                <Link to={'/InfoPage'} className="nav-link">About Us</Link>      
              </li>   
              <li className="nav-item ">      
                <Link to={'/ContactUs'} className="nav-link">Contact Us</Link>      
              </li>  
              <li className="nav-item ">      
                <Link to={'/ServicePage'} className="nav-link">Our Services</Link>      
              </li>  
             
            </ul>      
          </div>      
        </nav> 
        <div class="bg" >

        <div class="container" >  
        <div class="row justify-content-center">  
          <div class="col-xl-10 col-lg-11 col-md-9">  
            <div class="card o-hidden border-0 shadow-lg my-5">  
              <div class="card-body p-0">  
                <div class="row">  
                
                  <div class="col-lg-12">  
                    <div class="p-5">  
                      <div class="text-center">  
                        <h1 class="h4 text-gray-900 mb-4">Please login to continue!</h1>  
                      </div>  
                      <form onSubmit={Login} class="user" >  
                        <div class="form-group" > 
                        <div class="col-sm-12   mb-3 mb-sm-0"> 
                         
                          <input type="text" class="form-control" value={user.Name} onChange={ onChange }  required name="Name" id="Name" placeholder="Enter Name"/>  
                        </div>
                        
                        </div>  
                        <div class="form-group">  
                        <div class="col-sm-12  mb-3 mb-sm-0"> 
                          <input type="password" class="form-control" value={user.Password} required onChange={ onChange }  name="Password" id="DepPasswordartment" placeholder="Enter Password"/>  
                         </div>
                        </div>  
        <hr/>
                        <div class="col-sm-12  mb-3 mb-sm-0">  <button type="submit" class="btn btn-info  btn-block">  
                   Login  
                </button>  
                </div>
                   
                        <hr/>  
                        <div class="col-sm-12  mb-3 mb-sm-0"><p style={{color:"blue"}}>Are you a new user?</p> </div>
                        <div class="col-sm-12  mb-3 mb-sm-0">  <button type="submit" class="btn btn-info  btn-block">  
                        <Link   to={'/Register'} className="nav-link" style={{textAlign:"center",color:"white",height:"5vh"}} >Register</Link>
                </button>  
                </div>
                  
                        
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
       
        
        
        <div  class="footer">
    <nav class="navbar navbar-dark bg-dark">
    <p style={{color: "white"}}>
    <br/>   Copyright © 2020 EasyLoan.com - All rights Reserved    </p>
   <a href="#" style={{textAlign:"center",color:"white"}}><br/><br/>Back to top</a>
</nav>
        
        </div> 
        
        </div>
    )  
}  
  
export default Login