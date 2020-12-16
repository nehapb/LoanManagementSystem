import React from 'react'  
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  

function AdminClient(props) {  
  const [data, setData] = useState([]);  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('https://localhost:44354/api/client/statusdetails');  
      setData(result.data);  
    };  
    GetData();  
  }, []);  

  return (  
 

    <div className="animated fadeIn">  
      <Row>  
        <Col>  
          <Card>  
            <CardHeader>  
              <i className="fa fa-align-justify"></i> Final Verification 
              </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                  <th>LoanAccountNo</th>
                    <th>LoanId</th>  
                   <th>LoanAmount</th>
                    <th>Duration</th>
                    <th>OnlineRequest</th>
                    <th>FinalVerification</th>
                       
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      return <tr> 
                        <td>{item.LoanAccountNo}</td>   
                        <td>{item.LoanId}</td>  
                        <td>{item.LoanAmount}</td>
                        <td>{item.Duration}</td>
                        <td>{item.Status}</td>
                        <td style={{color:"green"}}><strong>{item.FinalStatus}</strong></td>     
                       
                      </tr>  
                    })}  
                </tbody>  
              </Table>  
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
    </div>  
  )  
}  
  
export default AdminClient;