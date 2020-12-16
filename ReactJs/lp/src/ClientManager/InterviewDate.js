import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import Header from '../Components/Header';

import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function InterviewDate(props) {  
        const [user, setuser]= useState({LoanAccountNo:'',LoanId:'',Occupation:'',AnnualIncome: '', LoanAmount:'',Duration: '', AccountNo: '', EMI:'',InterviewDate:'',Status:''});
        console.log(props.match.params.id);  
        const Url = "https://localhost:44354/api/client/HomeLoanDetailsbyID?id=" + props.match.params.id;  
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setuser(result.data);  
          };     
          GetData();  
        }, []);  
        const UpdateAsset = (e) => {  
          e.preventDefault();  
          const data = {LoanAccountNo:props.match.params.id,LoanId:user.LoanId,Occupation:user.Occupation, AnnualIncome:user.AnnualIncome,LoanAmount:user.LoanAmount, Duration: user.Duration, AccountNo: user.AccountNo,EMI:user.EMI,InterviewDate:user.InterviewDate,Status: user.Status};  
         console.log(data);
          axios.post('https://localhost:44354/api/client/interviewdate', data)  
            .then((result) => { 

                console.log(result.data);
              props.history.push('/Manager')  
            }) 
        }    
        const onChange = (e) => {  
          e.persist();  
          setuser({...user, [e.target.name]: e.target.value});  
        }  

        return (  

          <div>
          

        <Header/>


                <div className="app flex-row align-items-center">  
                <Container>  
                  <Row className="justify-content-center">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={UpdateAsset}>  
                            <h3>Online Request Status</h3>  
                                               
                            
                            <InputGroup className="mb-3">  
                              <Input type="text" placeholder="Status" name="Status" id="Status"  value={user.Status} onChange={ onChange }  />  
                            </InputGroup>    
                            <InputGroup className="mb-3">  
                              <Input type="date" placeholder="InterviewDate" name="InterviewDate" id="Inda"  value={user.InterviewDate} onChange={ onChange }  />  
                            </InputGroup>    
                                                     
                      <CardFooter className="p-4">  
                          <Row>  
                              
                            <Col xs="12" sm="6">  
                              <Button type="submit" className="btn btn-info mb-1" ><span>Update</span></Button>  
                            </Col>  
                            <Col xs="12" sm="6">  
                              <Button className="btn btn-info mb-1"><span>Cancel</span></Button>  
                            </Col>  
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
  
export default InterviewDate;