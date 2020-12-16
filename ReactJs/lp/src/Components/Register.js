import React, { useState } from 'react'  
import axios from 'axios';  
import { Link } from 'react-router-dom'; 
import {useForm} from 'react-hook-form';
import HomeIcon  from '@material-ui/icons/Home';
import "../styles/Calculator.css";


function Register(props) {  
  const [data, setdata] = useState({ AccountNo:'',Name:'',DOB:'',PAN:'',PermanentAddress:'',Phone:'',Email:'',Password:''});  
  const apiUrl = "https://localhost:44354/api/login/Register";
  const Registration = (e) => {  
    //e.preventDefault(); 
    debugger;  
    const data1 = {AccountNo:data.AccountNo,Name:data.Name,DOB:data.DOB,PAN:data.PAN,PermanentAddress:data.PermanentAddress,Phone:data.Phone,Email:data.Email,Password:data.Password };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid' )  
        {
            alert('Invalid User'); 
        }
        else  
          props.history.push('/Login')  
      })  
  }  


  const onChange = (e) => {  
     e.persist();  
     debugger;  
    setdata({ ...data, [e.target.name]: e.target.value }); 
  }  
  const { register, handleSubmit, errors } = useForm();
  return (  
<div>

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


  <div className="bg1">
    <div class="container">  
      <div class="row">  
       
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h1 class="h4 text-gray-900 mb-4">Join Us!</h1>  
                  
                </div>  
                <form onSubmit={handleSubmit(Registration)} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="AccountNo" onChange={onChange}  value={data.AccountNo} class="form-control" id="exampleFirstName"   placeholder="AccountNo" 
                      ref={register({ required: true, maxLength: 18, minLength: 9})}/> 
                      {errors.AccountNo && errors.AccountNo.type === "required" && ( <p style={{color:"red"}}>This is required</p>)} 
                      {errors.AccountNo && errors.AccountNo.type === "minLength" && ( <p style={{color:"red"}}>Min length is 9</p>)} 
                      {errors.AccountNo && errors.AccountNo.type === "maxLength" && ( <p style={{color:"red"}}>max Length is 18</p>)}
                   
                    </div> 
                   
                  </div>  
                  <div class="form-group row">  
                  <div class="col-sm-6">  
                      <input type="text" name="Name" onChange={onChange}  value={data.Name} class="form-control" id="exampleLastName"  placeholder="Name"  
                      ref={register({ required: true, minLength: 2, pattern: /^[A-Za-z]+$/i })}/> 
                      {errors.Name && errors.Name.type === "required" && ( <p style={{color:"red"}} >This is required</p>)} 
                      {errors.Name && errors.Name.type === "minLength" && ( <p style={{color:"red"}}>Min length is 2</p>)} 
            
                      {errors.Name && errors.Name.type === "pattern" && ( <p style={{color:"red"}}>Only letters can be inserted</p>)}
   
                   </div>  
                  <div class="col-sm-6 mb-3 mb-sm-0">  
                    <input type="date" name="DOB" onChange={onChange} value={data.DOB} class="form-control" id="exampleInputEmail"  placeholder="DOB" required />  
                  </div>
                
                 
                    </div>  

                    <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="PAN" onChange={onChange} value={data.PAN} class="form-control" id="exampleRepeatPassword"  placeholder="PAN"   
                      ref={register({ required: true, maxLength: 10, minLength: 10,pattern:/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i})}/> 
                      {errors.PAN && errors.PAN.type === "required" && ( <p style={{color:"red"}}>This is required</p>)} 
                      {errors.PAN && errors.PAN.type === "minLength" && ( <p style={{color:"red"}}>Please enter valid  PAN No.</p>)} 
                      {errors.PAN && errors.PAN.type === "maxLength" && ( <p style={{color:"red"}}>Please enter valid  PAN No.</p>)}
                      {errors.PAN && errors.PAN.type === "pattern" && ( <p style={{color:"red"}}>Please enter valid  PAN No. </p>)}
                   
                    </div>
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                    <input type="password" name="Password" onChange={onChange} value={data.Password}  class="form-control" id="exampleRepeatPassword" placeholder="Password" required
                                  
                                  ref={register({ required: true, maxLength: 10, minLength: 2})}/> 
                    {errors.Password && errors.Password.type === "required" && ( <p style={{color:"red"}}>This is required</p>)} 
                    {errors.Password && errors.Password.type === "minLength" && ( <p style={{color:"red"}}>Min length is 2</p>)} 
                    {errors.Password && errors.Password.type === "maxLength" && ( <p style={{color:"red"}}>max Length is 10</p>)}
                    </div>  
                    </div>
                    <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Phone" onChange={onChange} value={data.Phone} class="form-control" id="exampleRepeatPassword" placeholder="Phone"   
                               
                                ref={register({ required: true, maxLength: 10, minLength: 10 })}/> 
                      {errors.Phone && errors.Phone.type === "required" && ( <p style={{color:"red"}}>This is required</p>)} 
                      {errors.Phone && errors.Phone.type === "minLength" && ( <p style={{color:"red"}}>please enter valid phone number</p>)} 
                      {errors.Phone && errors.Phone.type === "maxLength" && ( <p style={{color:"red"}}>please enter valid phone number</p>)}
   
                    </div>  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="email" name="Email" onChange={onChange} value={data.Email}
   
                      class="form-control" id="exampleRepeatPassword"  placeholder="Email" 
                      ref={register({ required: true, pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/i })} /> 
                     {errors.Email && errors.Email.type === "required" && ( <p style={{color:"red"}}>This is required</p>)}
                     {errors.Email && errors.Email.type === "pattern" && ( <p style={{color:"red"}}>Enter valid Email</p>)} 
                    </div>  
                    </div>
                    <div class="form-group row">  

                    <div class="col-sm-6  offset-sm-3  mb-3 mb-sm-0">  
                    <textarea rows={2}  type="text" name="PermanentAddress" onChange={onChange} value={data.PermanentAddress} class="form-control"  id="exampleRepeatPassword" placeholder="PermanentAddress" required />  
                     
                    </div>  
                   </div>
                   <div class="col-sm-12  mb-3 mb-sm-0">  <button type="submit" class="btn btn-info  btn-block">  
                   Register
                </button>  
                </div>
                  <hr />  
                </form>  
               
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
  
export default Register