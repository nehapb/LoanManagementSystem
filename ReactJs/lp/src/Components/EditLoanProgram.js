import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import Header from '../Components/Header';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  

function EditLoanProgram(props) {  
        const [user, setuser]= useState({Id:'',LoanType: '', Interest: '', Description: ''});
        console.log(props.match.params.id);  
        const Url = "https://localhost:44354/api/loan/LoanProgramdetails?id=" + props.match.params.id;  
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setuser(result.data);  
          };     
          GetData();  
        }, []);  
        const UpdateLoanProgram = (e) => {  
          e.preventDefault();  
          const data = {Id:props.match.params.id, LoanType:user.LoanType, Interest: user.Interest, Description: user.Description};  
         console.log(data);
          axios.post('https://localhost:44354/api/loan/UpdateLoanProgram', data)  
            .then((result) => {  
                console.log(result.data);
              props.history.push('/LoanList')  
            }) 
        }    
        const onChange = (e) => {  
          e.persist();  
          setuser({...user, [e.target.name]: e.target.value});  
        }  


        return (  
          <div>
          <Header/>

                <div className="app flex-row align-items-center  ">  
                <Container>  
                  <Row className="justify-content-center ">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={UpdateLoanProgram}>    
                            <h3 class="  mb-4  p-2 " >Update Loan Program</h3>       
                            <InputGroup className="mb-3">  
                              <Input type="text" name="LoanType" id="Name" placeholder="LoanType" value={user.LoanType} onChange={ onChange }  />  
                            </InputGroup>  
                             <InputGroup className="mb-3">  
                              <Input type="number" placeholder="Interset" name="Interest" id="Interest" value={user.Interest} onChange={ onChange }/>  
                            </InputGroup>  
                            <InputGroup className="mb-3">  
                              <Input type="text" placeholder="Description" name="Description" id="Description"  value={user.Description} onChange={ onChange }  />  
                            </InputGroup>                                
                      <CardFooter className="p-4">  
                          <Row>  
                              
                            <div className="col">
                              <Button type="submit" className="btn btn-info mb-1 " ><span>Update</span></Button>  
                              </div>
                              <div className="col">
                              <Button className="btn btn-danger mb-1"><span>Cancel</span></Button>  
                              </div>
                          </Row>  
                        </CardFooter>  
                          </Form>  
                        </CardBody>                 
                      </Card>  
                    </Col>  
                  </Row>  
                </Container>  
              </div>  </div>
        )  
}  
  
export default EditLoanProgram