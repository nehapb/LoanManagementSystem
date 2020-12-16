import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import Header from '../Components/Header';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
function FinalVerification(props) {  
        const [user, setuser]= useState({LoanAccountNo:'',LoanId:'',PlotAddress:'',Occupation:'',AnnualIncome: '', MonthlyExpenditure:'',LoanAmount:'',Duration: '', AccountNo: '', EMI:'',InterviewDate:'',Status:'',FinalStatus:''});
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
          alert("Are you sure ?");
          e.preventDefault();  
          const data = {LoanAccountNo:props.match.params.id,LoanId:user.LoanId,PlotAddress:user.PlotAddress,Occupation:user.Occupation, AnnualIncome:user.AnnualIncome,MonthlyExpenditure:user.MonthlyExpenditure,LoanAmount:user.LoanAmount, Duration: user.Duration, AccountNo: user.AccountNo,EMI:user.EMI,InterviewDate:user.InterviewDate,Status: user.Status,FinalStatus:user.FinalStatus};  
         console.log(data);
          axios.post('https://localhost:44354/api/client/FinalVerification', data)  
            .then((result) => {  
                console.log(result.data);
              props.history.push('/ClientStatusView')  
            }) 
        }    
        const onChange = (e) => {  
          e.persist();  
          setuser({...user, [e.target.name]: e.target.value});  
        }  

        const Back=()=>{
          props.history.push('/ClientStatusView');
        } ;

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
                            <h3>Final Verification</h3>  
                         
                             <InputGroup className="mb-3">  

                              <Input type="datetime" placeholder="Inda" name="InterviewDate" id="Inda"  value={user.InterviewDate} readOnly />  
                            </InputGroup>  
                            <InputGroup className="mb-3">  

<Input type="text" placeholder="LoanAmount" name="LoanAmount" id="Duration"  value={user.LoanAmount} readOnly />  
</InputGroup>  
                         
                            <InputGroup className="mb-3">  

<Input type="text" placeholder="Duration" name="Duration" id="Duration"  value={user.Duration} readOnly />  
</InputGroup>  
                            <InputGroup className="mb-3">  
                            <input type="checkbox" id="1" name="1" value="expenditure"></input>
                    <label for="1"> Satisfies expenditure records submitted by client</label><br></br>
                            </InputGroup>    
                            <InputGroup className="mb-3">  
                            <input type="checkbox" id="2" name="2" value="land"></input>
                    <label for="2">Satisfies all the primary verification conditions</label><br></br>
                            </InputGroup>  
                            <InputGroup className="mb-3"> 
                            <input type="checkbox" id="3" name="3" value="income"></input>
                    <label for="3">Satisfies repayable conditions</label><br></br>
                            </InputGroup>   

                            <InputGroup className="mb-3">  

                          <Input type="text" placeholder="Final Status" name="FinalStatus" id="FinalStatus"  value={user.FinalStatus} onChange={ onChange } required />  
                            </InputGroup>                         
                      <CardFooter className="p-4">  
                          <Row>  
                              
                            <Col xs="12" sm="6">  
                              <Button type="submit" className="btn btn-info mb-1" ><span>Save</span></Button>  
                            </Col>  
                            <Col xs="12" sm="6">  
                              <Button className="btn btn-info mb-1" onClick={Back}>Cancel  </Button>  
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
  
export default FinalVerification;