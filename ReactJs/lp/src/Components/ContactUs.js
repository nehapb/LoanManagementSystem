import React from 'react'  
import { Link } from 'react-router-dom'; 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon  from '@material-ui/icons/Home';

function ContactUs1() {  
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
           </ul> 
              <ul className="nav navbar-nav ml-auto "> 
              
              
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
  alt="Pretoria" height="200vh" width="100%"/><div class="caption BL1">Contact Us</div>
    </div>
  </div>
   
    
   
   
    <div class="row">
    <div class="col-sm-6 col-lg-6">
        <div class="card card o-hidden border-0 shadow-lg my-5" id="card">
            <div class="card-body">
            <h5 style={{color:"#034d53"}}>Corporate office</h5>
                <h6 > EASY lOAN INDIA FINANCE PRIVATE LIMITED
Third floor, Tower C, DLF Infinity Towers, 
City Phase-II, Gurgaon, Haryana - 122002</h6>   
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-lg-6" id="card">
        <div class="card card o-hidden border-0 shadow-lg my-5" id="card">
            <div class="card-body">
            <h5 style={{color:"#034d53"}}>Call us : 0124-662-8811 </h5>
            <h6>
           (Between 9:00 AM - 6:00 PM, Monday - Sunday)
Email us: onlineloan@easyloan.co.in</h6>  
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
   
 export default ContactUs1;