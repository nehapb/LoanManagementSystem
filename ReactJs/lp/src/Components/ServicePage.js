import React from 'react'  
import axios from 'axios';  
import { Link } from 'react-router-dom'; 
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';  
import DoneIcon from '@material-ui/icons/Done';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Login from './Login'
import Register from './Register'
import { Button } from '@material-ui/core';
import HomeIcon  from '@material-ui/icons/Home';
import ContactUs from './ContactUs';
import InfoPage from './InfoPage';




function ServicePage() {  
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
                <Link to={'/ServicePage'} className="nav-link">Our Service</Link>      
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
  alt="Pretoria" height="200vh" width="100%"/><div class="caption BL1">Our Services</div>
    </div>
  </div>
    <div class="row">
    <div class="col-sm-12 col-lg-12" id="card2">
        <div class="card1 card o-hidden border-0 shadow-lg my-5">
            <div class="card-body">
            <h5 style={{color:"#034d53"}}>Loan Categories</h5>
                <h6 ><DoneIcon/> Super Bike Loan:Get loans for both regular two-wheelers as well as superbikes. Get up to 90% of the value of your bike financed.</h6>
                <h6><DoneIcon/>FlexiPay: Buy Now, Pay Later: you can convert your transactions into easy installments. Make big purchases and enjoy paying back with our flexible pay back options.</h6>
                <h6><DoneIcon/> Home Loan:Get Attractive Interest Rates To Make Your Home Loans Affordable & Easier On Your Pocket. ROI Of 6.90%* p.a. Onwards For Women.</h6>
                
                <h6><DoneIcon/>Business Loan:Customised Business Loans. Low Interest Rates.Instant Online Disbursal. Business loans for all your financial needs.</h6>
            </div>
        </div>
    </div>   
</div>
<div className="animated fadeIn">  
      <Row>  
        <Col>  
          <Card id="card">  
            <CardHeader>  
              <i className="fa fa-align-justify"></i><strong>Payment Plans</strong>
              </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                  <th>Year</th>
                  <th>Opening Balance</th>
                  <th>EMI*12</th>
                  <th>Interest Paid Yearly</th>
                 <th>Principal paid yearly</th>  
                <th>Closing Balance</th>
                    
                  </tr>  
                </thead>  
                 
                     <tr> 
                        <td>1</td>   
                        <td>2,500,000</td>  
                        <td>262,249</td>  
                        <td>213,092</td>  
                        <td>49,156</td>
                        <td>2,450,844</td>                    
                      </tr>  
                    
  <tr>
  <td>2</td>	<td>2,450,844</td>	<td>262,249</td>	<td>208,694</td>	<td>53,555</td>	<td>2,397,289</td>
  </tr>
  <tr><td>3</td>	<td>2,397,289</td>	<td>262,249</td>	<td>203,903</td>	<td>58,346</td>	<td>2,338,943</td></tr>
<tr><td>4</td>	<td>2,338,943</td>	<td>262,249</td>	<td>198,682</td>	<td>63,567</td>	<td>2,275,376</td></tr>
<tr><td>5</td>	<td>2,275,376</td>	<td>262,249</td>	<td>192,995</td>	<td>69,254	</td><td>2,206,122</td></tr>
<tr><td>6</td>	<td>2,206,122</td>	<td>262,249</td>	<td>186,799	</td><td>75,450</td>	<td>2,130,672</td></tr>
              </Table>  
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
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
   
 export default ServicePage