import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Container,Row,Col,Table} from 'reactstrap';
import ReactTable from "react-table";
// import "react-table/react-table.css";
import data from './data.json';
import Axios from 'axios';


class Content extends Component{  

    state={
        data:[]
    }
// 192.168.1.205:4000/user/login
componentWillMount(){
   Axios.get('http://dummy.restapiexample.com/api/v1/employees ')
    .then(response=>response.data)
    .then(data=>this.setState({data}))
    
}


render(){
    // const dataTableColumns = [
    //     {
    //       Header: "TEAM NAME",
    //       accessor: "teamName",
    //       filterable: true,
    //       Cell: props => <p className="text-muted1">{props.value}</p>
  
    //     },
  
    //     {
    //       Header: "TEAM LEAD",
    //       accessor: "teamLead.name.firstName",
    //       filterable: true,
    //       Cell: (props) => <p className="text-muted1">{props.value}</p>
  
    //     },
    //     {
    //       Header: "ORGANIZATION",
    //       accessor: "organization.displayName",
    //       filterable: true,
    //       Cell: (props) => <p className="text-muted1">{props.value}</p>
  
    //     },
    //     {
    //       Header: "LOCATION",
    //       accessor: "location",
    //       filterable: true,
    //       Cell: props => <p className="text-muted1">{props.value}</p>
    //     }]
return(
    <Container fluid>
        <Row >
            <Col style={{marginTop:"20px"}}>
           
    {/* <ReactTable
    defaultPageSize={10}
    data={this.state.data}
    columns={dataTableColumns}
    minRows={4}
    showPageJump={false}
  defaultFilterMethod={filterCaseInsensitive}
    showPageSizeOptions={false}
     PaginationComponent={DataTablePagination}
  /> */}
                <h4>Balance status</h4>
                <Table>
                    <thead>
                        <tr>
                            <th>Type </th>
                            <th>Remaining</th>
                            <th>Used</th>
                            <th>Allowance</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.Balancestatus.map(item=>(
                            <tr>
                            <td>{item.type}</td>
                            <td>{item.Remaining} </td>
                            <td>{item.used} </td>
                            <td>{item.allowance} </td>
                            <td>{item.leaves}</td>
                        </tr>
                            ))
                        }
                         </tbody>
                          </Table>

                          <h6 style={{marginTop:"50px"}}>Leave reports</h6>
                          <Table >
                              <tbody>
                              {  
                                    data.Leavereports.map(a=>(
                                        <tr>
                                        <td>{a.dates}</td>
                                        <td>{a.day}</td>
                                        <td>{a.request}<img src="https://img.icons8.com/carbon-copy/100/000000/pencil.png" style={{height:"25px",width:"25px",marginLeft:"80px"}}/><img src="https://img.icons8.com/dotty/80/000000/delete-forever.png" style={{height:"25px",width:"25px",marginLeft:"30px"}}/></td>
                                        </tr>
                                      ))
                                      }
                              </tbody>
                          </Table>
                          <Table >
                              <tbody>
                              {  
                                   this.state.data.map(data=>(
                                        <tr>
                                        <td>{data.id}----{data.employee_name}------{data.employee_salary}</td>
                                        </tr>
                                      ))
                                      }
                              </tbody>
                          </Table>
            </Col>
        </Row>        
  </Container>
);
}
}

export default Content;