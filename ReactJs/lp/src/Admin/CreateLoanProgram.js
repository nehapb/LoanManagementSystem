import React, { useState } from 'react'  
import axios from 'axios';  
import { Link } from 'react-router-dom'; 

function CreateLoanProgram(props) {  
  const [data, setdata] = useState({ Id:'',LoanType:'',Interest:'',Description:''});  
  const apiUrl = "https://localhost:44354/api/loan/CreateLoanProgram";  
  const Registration = (e) => {  
    e.preventDefault(); 

    debugger;  
    const data1 = {Id:data.Id,LoanType:data.LoanType,Interest:data.Interest,Description:data.Description };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
           //props.history.push("/LoanProgram")  
          alert("Loan program is created successfully")
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  return (  
    <div class="container">  
      <div class="row">   
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h3 class="h4 text-gray-900 mb-4">Create Loan Program</h3>  
                </div>  
                <form onSubmit={Registration} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="LoanType" onChange={onChange} value={data.LoanType} class="form-control" id="exampleFirstName" required  placeholder="LoanName" />  
                    </div> 
                    <div class="col-sm-6">  
                      <input type="text" name="Interest" onChange={onChange} value={data.Interest} class="form-control" id="exampleLastName"   required placeholder="Interest" />  
                    </div>  
                  </div>  
                  <div class="form-group row">  
                    <div class="col-sm-6  offset-sm-3  mb-3 mb-sm-0">  
                      <textarea rows={2} type="text" name="Description" onChange={onChange} value={data.Description}  min="5" max="15"   required class="form-control" id="exampleRepeatPassword" placeholder="Description" />  
                    </div>  
                   </div>
                   <hr /> 
                   <div class="col-sm-12  mb-3 mb-sm-0">  <button type="submit" class="btn btn-info  btn-block">  
                  Add Loan Program
                </button>  
                </div>

                  <hr />  
                  <div class="col-sm-12  mb-3 mb-sm-0">  <button type="submit" class="btn btn-info  btn-block">  
                  <div>
                <Link to={'/LoanList'} className="nav-link" style={{color:"white"}}>View Loan Programs</Link>
                </div>
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
  )  
}  
  
export default CreateLoanProgram;