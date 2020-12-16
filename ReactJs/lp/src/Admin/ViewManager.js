import React from 'react'  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  
import DeleteIcon from '@material-ui/icons/Delete';

function ViewManager(props) {  
  const [data, setData] = useState([]);  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('https://localhost:44354/api/admin/clientdetails');  
      setData(result.data);  
    };  
    GetData();  
  }, []);  
  const deletemanager = (id) => {  
    debugger;  
    
    axios.delete('https://localhost:44354/api/admin/removeclient?id=' + id)  
      .then((result) => {  
        alert("You removed a staff successfully!")
      });  
  };  
  
  return (  
    <div className="animated fadeIn">  
      <Row>  
        <Col>  
          <Card>  
            <CardHeader>  
              <i className="fa fa-align-justify"></i> Managers List 
              </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                  <th>Id</th>
                  <th>Name</th>
                  <th>DOB</th>
                  <th>Email</th>
                 <th>Address</th>  
                <th>Phone</th>
                <th>Password</th>      
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      return <tr> 
                        <td>{item.Id}</td>   
                        <td>{item.Name}</td>  
                        <td>{item.DOB}</td>  
                        <td>{item.Email}</td>  
                        <td>{item.Address}</td>
                        <td>{item.Phone}</td>
                        <td>{item.Password}</td>   
                        <td>  
                          <div class="btn-group">  
                           
                            <button className="btn1 btn-danger" onClick={() => { deletemanager(item.Id) }}><DeleteIcon/></button>  
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
    </div>  
  )  
}  
  
export default ViewManager