import React, { useState } from 'react'  
import axios from 'axios';  
import{useLocation} from'react-router-dom'

function CreateLoanProgram(props) {  
  const search=useLocation().search;
  const Loanid=new URLSearchParams(search).get('id');
  console.log(Loanid);
  const [data, setdata] = useState({Id:Loanid, LoanType: '', Interest: '',Description: ''})  
  const apiUrl = "https://localhost:44354/api/loan/CreateLoanProgram";  
  const AddLoanProgram = (e) => {  
    e.preventDefault();  
    debugger;  
    const data1 = { Id:Loanid,  LoanType:data.LoanType, Interest:data.Interest, Description:data.Description};  
    axios.put(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid information');  
        else  
         props.history.push('/LoanProgram')  
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
                  <h1 class="h4 text-gray-900 mb-4">Add a loan Program</h1>  
                </div>
                <form onSubmit={AddLoanProgram} class="user">  
                  <div class="form-group">  
                  <formgroup row>
                    <div>  
                    <label><strong>LoanId:</strong></label>
                      <input type="text" name="LoanId"    class="form-control" id="exampleName"  readOnly placeholder={Loanid} />   
                    </div>  
                    <div>  
                    <label><strong>LoanType:</strong></label>
                      <input type="text" name="LoanType" onChange={onChange} value={data.LoanType} class="form-control" id="exampleName" placeholder="Loan Type" />   
                    </div>  
                    </formgroup>
                           <br/>
                    <div>
                    <label><strong>Interest</strong></label>  
                      <input type="number" name="Interest" onChange={onChange} value={data.Interest} class="form-control" id="exampleQuantity" placeholder="Interest" />  
                    </div>  
                    <br/>
                  </div>  
                  <label><strong>Description</strong></label> 
                    <input type="text" name="Description" onChange={onChange} value={data.Description} class="form-control" id="exampleInputMobile" placeholder="Description" />  
                  <div>  
                    <br/>
                  </div>  
                  <button type="submit" class="btn btn-info mb-1">  
                    Add  
                </button>  
                  <hr />  
                </form>  
                <hr />  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default CreateLoanProgram


