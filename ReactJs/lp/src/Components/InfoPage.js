import React from 'react'  
import { Link } from 'react-router-dom'; 
import DoneIcon from '@material-ui/icons/Done';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon  from '@material-ui/icons/Home';


function InfoPage1() {  
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
                <Link to={'/ServicePage'} className="nav-link"> Our Service</Link>      
              </li>     
            
               </ul> <ul className="nav navbar-nav ml-auto "> 
             
             
               <li className="nav-item ">      
                <Link to={'/Login'} className="nav-link"><strong><AccountCircleIcon/>login</strong></Link>      
              </li>      
              <li className="nav-item ">      
                <Link to={'/Register'} className="nav-link"><AccountCircleIcon/>Register</Link>      
              </li> 
             
            </ul>      
          </div>      
        </nav> 
        <div>
          <div >
      <img src="https://www.chetu.com/img/blogs/sliderbg/benefits-loan-managment-software-banner.jpg" 
  alt="Pretoria" height="200vh" width="100%"/><div class="caption BL1">About Us</div>
    </div>
  </div>
    <h3>This is why we are so awesome</h3>
    <h5>Life is unpredictable especially when you are faced with financial difficulties, it adds on to the burdens. We at Home Credit India- Online ensure that you obtain easy cash instantly at the time of your need. Sometimes you need a loan as soon as possible and that's where we come in the picture.With Personal loan, the entire process is with minimal documentation in simple steps, so you can get an instant online approval and post KYC, the amount disbursed within a few hours.</h5>
   
   
    <div class="row">
    <div class="col-sm-4 col-lg-4">
        <div class="card card o-hidden border-0 shadow-lg my-5" id="card">
            <div class="card-body">
            <h5 style={{color:"#034d53"}}>Features</h5>
                <h6 ><DoneIcon/> Loan upto 2 Lakhs</h6>
                <h6 > <DoneIcon/> Disbursal within hours</h6>
                <h6 ><DoneIcon/> No Collateral or Guarantor Required</h6>
                <h6 > <DoneIcon/>Instant Online Approval</h6>
                <h6 > <DoneIcon/>  Minimal Documentation</h6> 
               
                
            </div>
        </div>
    </div>
    <div class="col-sm-4 col-lg-4">
        <div class="card card o-hidden border-0 shadow-lg my-5" id="card">
            <div class="card-body">
            <h5 style={{color:"#034d53"}}>Why Us?</h5>
            <h6 > <DoneIcon/>Over 10 million satisfied customers</h6>
                <h6 > <DoneIcon/> Secure online process and systems</h6>
                <h6 ><DoneIcon/> An established name</h6>
                <h6 ><DoneIcon/> Innovative products</h6>
                <h6 ><DoneIcon/> Transparent processes</h6> 
               
               
            </div>
        </div>
    </div>
    <div class="col-sm-4 col-lg-4" id="card">
        <div class="card card o-hidden border-0 shadow-lg my-5">
            <div class="card-body">
            <h5 style={{color:"#034d53"}}>How it Works?</h5>
            <h6><DoneIcon/>Fast</h6>
                <h6><DoneIcon/> Easy</h6>
                <h6><DoneIcon/> Secure</h6>
                <h6><DoneIcon/>Effective</h6>
                <h6><DoneIcon/> Transparent </h6> 
               
               
            </div>
        </div>
    </div>
    
</div>
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
   
 export default InfoPage1;