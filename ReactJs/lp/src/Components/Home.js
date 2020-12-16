import React, { useState } from 'react'  
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon  from '@material-ui/icons/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 

function Home() {  
return (  
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-info ">      
          <div className="collapse navbar-collapse" > 
  <ul className="nav navbar-nav ">  
            <li className="nav-item nav-right " >      
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
               <ul className="nav navbar-nav  ml-auto  ">  
               <li className="nav-item ">      
                <Link to={'/Login'} className="nav-link"><AccountCircleIcon/>login</Link>      
              </li>    
              <li className="nav-item ">      
                <Link to={'/Register'} className="nav-link"><AccountCircleIcon/>Register</Link>      
              </li>  
            </ul>      
          </div>      
        </nav> 
<div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
    <li 
  data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
  <div class="carousel-item active">
      <img src="https://www.indusind.com/iblogs/wp-content/uploads/Getting-a-Personal-Loan.jpg" 
  alt="Soweto" height="400vh" width="100%"/>
    </div>
    <div 
  class="carousel-item">
      <img src="https://www.chetu.com/img/blogs/sliderbg/benefits-loan-managment-software-banner.jpg" 
  alt="Joburg" height="400vh" width="100%"/><div class="caption BL">Get Instant Loan Approval
  Personal Loan upto  Rs.2 Lakhs
  with Small Processing Fees</div>
  <div class="col-sm-12  mb-3 mb-sm-0" id="bt">  <button  class="btn btn-info">  
                        <Link   to={'/Register'} className="nav-link" style={{textAlign:"center",color:"white"}} >Apply Now!</Link>
                </button>  
                </div>
    </div>
    <div 
  class="carousel-item">
      <img src="https://www.skygeneration.ca/wp-content/uploads/2019/06/mortgage-brokers-768x512.jpg" 
  alt="Pretoria" height="400vh" width="100%"/><div class="caption BL"><strong>Your Dream Home is just a call away!</strong></div>
    </div>
  </div>
  <a class="carousel-control-prev" 
  href="#demo" data-slide="prev">
    <span 
  class="carousel-control-prev-icon"></span>
  </a>
  <a 
  class="carousel-control-next" href="#demo" data-slide="next">
    
  <span class="carousel-control-next-icon"></span>
  </a>

</div>
<div class="row">
    <div class="col-sm-4 col-lg-4">
        <div class="card card o-hidden border-0 shadow-lg my-5" id="card" >
            <div class="card-body">
            <h5 style={{color:"rgb(70, 5, 66)"}}>DISTANCE SHOULD NOT BE A BARRIER</h5>
                <img src="https://th.bing.com/th/id/OIP.ctZky18-xTJXS9jkWKKpCQHaDZ?pid=Api&rs=1" height="100" width="200"  />
                
                <p style={{color:"rgb(70, 5, 66)"}}>You can now easily receive loan by applying online and we will let you know the further verification.</p> 
            </div>
        </div>
    </div>
    <div class="col-sm-4 col-lg-4">
        <div class="card card o-hidden border-0 shadow-lg my-5" id="card">
            <div class="card-body">
            <h5 style={{color:"rgb(70, 5, 66)"}}>GET YOUR CASH WITHIN MINUTES TO YOUR LINKED ACCOUNT</h5>
                <img src="https://s-i.huffpost.com/gen/1576250/images/o-ONLINE-BANKING-facebook.jpg" height="100" width="200"  />
                
               <p style={{color:"rgb(70, 5, 66)"}}>Sort out urgent cash needs with Fast Cash. Get a loan of up to N100,000 loan in minutes just by dialing *329#</p>
               
               
            </div>
        </div>
    </div>
    <div class="col-sm-4 col-lg-4">
        <div class="card card o-hidden border-0 shadow-lg my-5" id="card">
            <div class="card-body">
            <h5 style={{color:"rgb(70, 5, 66)"}}> CORONAVIRUS: USEFUL INFORMATION</h5>
                <img src="https://www.fcmb.com/sites/default/files/FCMB-coronavirus.jpg" height="100" width="200" />
               
                <p  style={{color:"rgb(70, 5, 66)"}}> The world is witnessing an unprecedented health situation with Covid-19. Here’s some information to help you.</p>
               
                
            </div>
        </div>
    </div>
</div>
      <div><hr/></div>      
   <div>
     <h3  style={{color:"#034d53"}}>Easy To Apply . Simple as 1,2,3</h3>
     <h5  style={{color:"#034d53"}}>Apply online in just ten minutes, by following these 3 easy steps:</h5></div>
    

       <div class="row">
    <div class="col-sm-4 col-lg-4">
        <div class="card card o-hidden border-0 shadow-lg my-5" id="card">
            <div class="card-body">
            <h5 style={{color:"#034d53"}}>Get started </h5>
                <img src="https://mk0mouladthsbpn2q69.kinstacdn.com/wp-content/uploads/2018/01/Business-Loan-Details.svg" height="100" width="200"  />
                
                <p style={{color:"#034d53"}}>Complete basic personal information to get started.
</p>   
            </div>
        </div>
    </div>
    <div class="col-sm-4 col-lg-4">
        <div class="card card o-hidden border-0 shadow-lg my-5" id="card">
            <div class="card-body">
            <h5 style={{color:"#034d53"}}>Link your data</h5>
                <img src="https://mk0mouladthsbpn2q69.kinstacdn.com/wp-content/uploads/2018/01/Link-Business-Loan-Data.svg" height="100" width="200"  />
                
               <p style={{color:"#034d53"}}>Link your online banking or accounting data, and we’ll determine how much we can lend.</p>
               
               
            </div>
        </div>
    </div>
    <div class="col-sm-4 col-lg-4">
        <div class="card card o-hidden border-0 shadow-lg my-5" id="card">
            <div class="card-body">
            <h5 style={{color:"#034d53"}}> Get loan fast</h5>
                <img src="https://mk0mouladthsbpn2q69.kinstacdn.com/wp-content/uploads/2018/01/Get-Business-Funds.svg" height="100" width="200" />
               
                <p  style={{color:"#034d53"}}> Once approved, get your loan fast to your preferred bank account.</p>
               
                
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
      
    export default Home;