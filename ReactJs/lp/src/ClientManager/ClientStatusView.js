import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  
import Header from '../Components/Header';

function ClientStatusView(props) {  
  const [data, setData] = useState([]);  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('https://localhost:44354/api/client/statusdetails');  
      setData(result.data);  
    };  
    GetData();  
  }, []);  
   
  const editasset = (id) => {  
    console.log(id);
    props.history.push({  
      pathname: '/FinalVerification/'+ id
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
              <i className="fa fa-align-justify"></i> Final Verification 
              </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                  <th>LoanAccountNo</th>
                   <th>LoanAmount</th>
                    <th>InterviewDate</th>
                    <th>OnlineRequest</th>
                    <th>FinalVerification</th>
                       
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      return <tr> 
                        <td>{item.LoanAccountNo}</td>   
                         <td>{item.LoanAmount}</td>
                        <td>
                          {item.InterviewDate}
                          </td>
                        <td>{item.Status}</td>
                        <td style={{color:"green"}}><strong>{item.FinalStatus}</strong></td>     
                        <td>  
                          <div class="btn-group">  
                            <button className="btn btn-info" onClick={() => { editasset(item.LoanAccountNo) }} >Edit</button>  
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
    </div></div>  
  )  
}  
  
export default ClientStatusView;