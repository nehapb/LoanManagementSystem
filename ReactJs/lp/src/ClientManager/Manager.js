import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  
import Header from '../Components/Header';
import DeleteIcon from '@material-ui/icons/Delete';
import { green } from '@material-ui/core/colors';

function Manager(props) {  
  const [data, setData] = useState([]);  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('https://localhost:44354/api/client/Homeloandetails');  
     
      setData(result.data);  
    };  
    GetData();  
  }, []);  
  const deletestatus = (id) => {  
    debugger;  
    
    axios.delete('https://localhost:44354/api/client/HomeloanReject?id=' + id)  
      .then((result) => {  
        props.history.push('/Manager')  
      });  
  };  
  const editstatus = (id) => {  
    console.log(id);
    props.history.push({  
      pathname: '/InterviewDate/'+ id
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
              <i className="fa fa-align-justify"></i> Loan Request List
              </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                  <th>LoanAccountNo</th>
                    <th>LoanId</th>  
                    <th>Occupation</th>  
                    <th>AnnualIncome(Rs.)</th>
                    <th>LoanAmount(Rs.)</th>
                    <th>Duration</th>
                    <th>AccountNo</th>
                    <th>InterviewDate</th>
                    <th>Status</th>
                       
                  </tr>  
                </thead>  
                <tbody>  
                  
                  {  
                    data.map((item, idx) => {  
                     
                      return <tr> 
                        <td>{item.LoanAccountNo}</td>   
                        <td>{item.LoanId}</td>  
                        <td>{item.Occupation}</td>  
                        <td>{item.AnnualIncome}</td>
                        <td>{item.LoanAmount}</td>
                        <td>{item.Duration}</td>
                        <td>{item.AccountNo}</td>
                        <td>{item.InterviewDate}</td>
                        <td  >{item.Status}</td>   
                        <td>  
                          
                          
                        <div class="btn-group">  
                            <button className="btn btn-info" onClick={() => { editstatus(item.LoanAccountNo) }} >Edit</button>  
                            <button className="btn1 btn-danger" onClick={() => { deletestatus(item.LoanAccountNo) }}><DeleteIcon/></button>  
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
  
export default Manager;