import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import DeleteIcon from '@material-ui/icons/Delete';
import { useState, useEffect } from 'react' 
import HomeIcon  from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'; 
import Header from '../Components/Header';

function LoanProgramList(props) {  
  const [data, setData] = useState([]);  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('https://localhost:44354/api/loan/DisplayLoanPrograms');  
      setData(result.data);  
    };  
    GetData();  
  }, []);  
  const deleteLoanProgram = (Id) => {  
    debugger;  
    
    axios.delete('https://localhost:44354/api/loan/DeleteLoanProgram?id=' + Id)  
      .then((result) => {  
        props.history.push('/Loanlist')  
      });  
  };  
  const editLoanProgram = (Id) => {  
    console.log(Id);
  
    props.history.push({  
      pathname: '/EditLoanProgram/'+ Id 
    });  
  };  
  return (  
    <div>

    <Header/>

    <div className="animated fadeIn">  
      <Row>  
        <Col>  
          <Card>  
            <CardHeader>  
              <i className="fa fa-align-justify"></i> Loan Program List  
              </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                  <th>Loan ID</th>
                    <th>Loan Type</th>  
                    <th>Interest</th>  
                    <th>Description</th>  
                    
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      return <tr> 
                        <td>{item.Id}</td>   
                        <td>{item.LoanType}</td>  
                        <td>{item.Interest}</td>  
                        <td>{item.Description}</td>  
                        
                        <td>  
                          <div class="btn-group">  
                            <button className="btn btn-warning" onClick={() => { editLoanProgram(item.Id) }} style={{color:"white"}}>Edit</button>  
                            <button className="btn1 btn-danger" onClick={() => { deleteLoanProgram(item.Id) }}><DeleteIcon/></button>  
                          </div>  
                        </td>  
                      </tr>  
                    })}  
                </tbody>  
              </Table>  
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
    </div>  </div>
  )  
}  
  
export default LoanProgramList