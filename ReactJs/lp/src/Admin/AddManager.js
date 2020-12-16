import React, { useState } from 'react'  
import axios from 'axios';  
import {useForm} from 'react-hook-form';

function AddManager(props) {  
  const [data, setdata] = useState({ Id:'',Name:'',DOB:'',Address:'',Phone:'',Email:'',Password:''});  
  const apiUrl = "https://localhost:44354/api/admin/ClientManager";  
  const Registration = (e) => {  
    e.preventDefault(); 

    debugger;  
    const data1 = {Id:data.Id,Name:data.Name,DOB:data.DOB,Address:data.Address,Phone:data.Phone,Email:data.Email,Password:data.Password };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
       
        alert("manager added successfully!")
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  const { register, handleSubmit, errors } = useForm();
  return ( 
    <div class="container" >  
      <div class="row">  
       
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h1 class="h4 text-gray-900 mb-4">Add Staff</h1>  
                </div>  
                <form onSubmit={Registration} class="user">  
                  <div class="form-group row">  
                  
                    <div class="col-sm-6">  
                      <input type="text" name="Name" onChange={onChange} value={data.Name} class="form-control" id="exampleLastName"   required placeholder="Name" />  
                    </div>  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                    <input type="date" name="DOB" onChange={onChange} value={data.DOB} class="form-control" id="exampleInputEmail"   required placeholder="DOB" />  
                  </div>
                  </div>  

                    <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <textarea rows={2} type="text" name="Address" onChange={onChange} value={data.Address} class="form-control"  required id="exampleRepeatPassword" placeholder="Address" />  
                    </div> 
                   
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="Phone" onChange={onChange} value={data.Phone} class="form-control"  required id="exampleRepeatPassword" placeholder="Phone"/>
                    
                     
                    </div> 
                    </div>
                    <div class="form-group row">  
                     
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="email" name="Email" onChange={onChange} value={data.Email} class="form-control" required id="exampleRepeatPassword"  placeholder="Email"/> 
                   
                      
                   
                    </div> 
                    <div class="col-sm-6 mb-3 mb-sm-0"> 
                      <input type="password" name="Password" onChange={onChange} value={data.Password}  class="form-control" id="exampleRepeatPassword" placeholder="Password"
                     
                      ref={register({ required: true, maxLength: 10, minLength: 2})}/> 
                    {errors.Password && errors.Password.type === "required" && ( <p style={{color:"red"}}>This is required</p>)} 
                    {errors.Password && errors.Password.type === "minLength" && ( <p style={{color:"red"}}>Min length is 2</p>)} 
                    {errors.Password && errors.Password.type === "maxLength" && ( <p style={{color:"red"}}>max Length is 10</p>)}
                    </div>  
                    </div>
                   <hr/>
                   <div class="col-sm-12  mb-3 mb-sm-0">  <button type="submit" class="btn btn-info  btn-block">  
                   Add Staff
                </button>  
                </div>
                  <hr />  
                </form>  
              </div>
            </div>  
          </div>  
        </div>  
      </div>  
    </div>
  )  
}  
  
export default AddManager;