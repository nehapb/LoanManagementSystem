import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  
import Header from './Header';


function LoanProgramList(props) {  
  const [data, setData] = useState([]);  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('https://localhost:44354/api/loan/DisplayLoanPrograms');  
      setData(result.data);  
    };  
    GetData();  
  }, []);  
  
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