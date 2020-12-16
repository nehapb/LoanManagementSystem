import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import Header from '../Components/Header';

function EditProfile(props) {  

const [user, setuser] = useState({AccountNo:'',Name:'',DOB:'',PAN:'',PermanentAddress:'',Phone:'',Email:'',Password:'' })  
console.log(props.match.params.id);  
        const Url = "https://localhost:44354/api/Login/UserDetails?id=" + props.match.params.id;  
        console.log(Url);
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setuser(result.data);  
            console.log(result.data);
          };     
          GetData();  
        }, []);  
        const Editprofile= (e) => {  
          e.preventDefault();  
          const data = {AccountNo:props.match.params.id, Name:user.Name, DOB:user.DOB,PAN:user.PAN,PermanentAddress:user.PermanentAddress,Phone:user.Phone,Email:user.Email,Password:user.Password};  
         console.log(data);
          axios.post('https://localhost:44354/api/login/UpdateUserDetails', data)  
            .then((result) => {  
                console.log(result.data);
              props.history.push('/User')  
            }) 
        }    
        const onChange = (e) => {  
          e.persist();  
          setuser({...user, [e.target.name]: e.target.value});  
        }

        return ( 

          <div>
          
<Header/>


          <div class="container">  
           <div class="row"> 
                </div>  
              <div class="card o-hidden border-0 shadow-lg my-5  col-md-12" style={{ "marginTop": "5rem!important;" }}>  
                <div class="card-body p-0">  
                   <div class="row">  
                     <div class="col-lg-12">  
                       <div class="p-5">  
                       <div class="text-center">  
                          {/* <p class=" text-white mb-4 p-2" style={{background:"#056397"}} >Update Profile</p>   */}
                         
                         <h3>Update Profile</h3><br/>
                         </div>
                          <form onSubmit={Editprofile} class="user">
                           
                          <div class="form-group row">  
                            
                           <div class="col-sm-6 mb-3 mb-sm-0"> 
                                <input type="number" name="AccountNo" class="form-control" id="AccountNo"   value={user.AccountNo}  readOnly placeholder="AccountNo" /> 
                                </div>  
          
                          
          
                            <div class="col-sm-6 "> 
                              <input type="text" name="Name"  onChange={onChange}  value={user.Name} class="form-control" id="Name" placeholder="Name" />   
                             </div>  
                           </div>
                              
                     <div class="form-group row"> 
                               <div class="col-sm-6 mb-3 mb-sm-0"> 
                               <input type="date" name="DOB" onChange={onChange} value={user.DOB} class="form-control" id="DOB" placeholder="DOB" />  
                             </div>
                              
                             <div class="col-sm-6 mb-3"> 
                              <input type="text" name="PAN" onChange={onChange} value={user.PAN} class="form-control" id="PAN" placeholder="PAN" />  
                          </div>
                            <br/>
                           
                           </div>
          
                         <div class="form-group row"> 
                          <div class="col-sm-6 mb-3 mb-sm-0"> 
                           
                               <input type="text" name="PermanentAddress" onChange={onChange} value={user.PermanentAddress} class="form-control" id="PermanentAddress" placeholder="Permanent Address" />  
                            
                            </div>
                            
                            <div class="col-sm-6"> 
                           <input type="number" name="Phone" onChange={onChange} value={user.Phone} class="form-control" id="Phone" placeholder="Phone" />  
                          </div>
                             
                          </div> 
          
                                <div class="form-group row">
                             <div class="col-sm-6 mb-3 mb-sm-0"> 
                               <input type="email" name="Email" onChange={onChange} value={user.Email} class="form-control" id="Email" placeholder="Email" />  
                          </div>
                           <div class="col-sm-6 "> 
                             <input type="password" name="Password" onChange={onChange} value={user.Password} class="form-control" id="Password" placeholder="Password" />  
                        </div>
                             
                          </div>  
                          <button type="submit" class="btn btn-danger mb-1" >  
                            Update 
                    </button>  
                          
                        </form>  
                        
                     </div>  
                   </div>  
                   </div>  
               </div>  
              </div>  
              </div>  </div> 
        
        )  
}  
  
export default EditProfile