import React from 'react'
import {Link} from 'react-router-dom'
import{useLocation} from'react-router-dom'
import Header from '../Components/Header';

function ClientManager() {
const search=useLocation().search;
const id=new URLSearchParams(search).get('id');
const Name=new URLSearchParams(search).get('Name');
console.log(id);
    return (
        <div>
          

<Header/>
          
      
<div class="container">  

<div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
  <div class="card-body p-0">  
    <div class="row">  
      <div class="col-lg-12">  
        <div class="p-5">  
        
          <form  class="user">  
        <h4>Hello {Name}! Please select your action.</h4>
          <br/>
            <div class="form-group row">  
              <div class="col-sm-6 mb-3 mb-sm-0">  
              <button type="submit" class="btn btn-info">  
              <Link to={'/Manager'} className="nav-link" style={{color:"white"}}>View Applicants</Link>  
                </button>
              </div> 
              <div class="col-sm-6 mb-3 mb-sm-0">  
              <button type="submit" class="btn btn-info">  
              <Link to={'/UserLoanProgram'} className="nav-link" style={{color:"white"}}>LoanPrograms</Link>   
                </button>
              </div> 
              

            </div>  
            <div class="form-group row">  
            
            <div class="col-sm-12  mb-3 mb-sm-0">  <button type="submit" class="btn btn-info">  
              <Link to={'/ClientStatusView'} className="nav-link" style={{color:"white"}}>Clients list for Final Verification</Link>
               
                
                </button>

                </div>
               
            </div>
           
          </form>  
          
        </div>
      </div>  
    </div>  
  </div>  
</div>  
</div>


</div>

    )
}

export default ClientManager