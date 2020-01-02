import React,{Component} from 'react';
import data from './data.json';
import {Container,Row,Col,Table,Card,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import Naavbar from './Naavbar.js';
import Side from './Side.js';
import './admin.css';
import { valueToNode, isTemplateElement } from '@babel/types';


class Admin extends Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        this.state={
          a:""
        }
    }


     submit(e){
          var b=e.target.id
         if(b=="Approve"){
             var d="Approved"
            localStorage.setItem("Approve",d)
         }else if(b=="Reject"){
            var c="Reject"
            localStorage.setItem("Approve",c)
         }else{
            var h="Pending"
            localStorage.setItem("Approve",h)
         }
        
     }
     





render(){
    var k=JSON.parse(localStorage.getItem("names"))

        var t=k.map(vale=>{
            let obj={}
            return obj[vale.key]=vale.value
        })
   console.log( "hellllllllllllo",k)
    return(
        <Container fluid>
            <Row>
            <p>{this.state.approved}</p>
            <Col col="12">
                <Naavbar />
        </Col>
            </Row>  
          
        <Row>
            <Col sm="3">
                <Side/>
            </Col>

            <Col sm="7" >
               <h6 >Apply Leaves</h6>    
                <div>
                <Row>
                    {
                            k.map(name=>(
                            <Col sm="6" style={{marginTop:"10px"}} >
                            <Card>   
                        <CardTitle>Name : {name}</CardTitle>
                        <CardSubtitle>Date   :       {localStorage.getItem("start")} TO {localStorage.getItem("end")}</CardSubtitle>
                        <CardText>Response   :      {localStorage.getItem("message")} </CardText>
                        {(localStorage.getItem("Email") == "satya@gmail.com")?  
                         <span><Button id="Approve" type="button" style={{marginLeft:"80px" , backgroundColor:"green"}} onClick={this.submit}>Approve</Button>
                        <Button id="Reject" type="button" style={{marginLeft:"50px",backgroundColor:"red"}}onClick={this.submit}>Reject</Button></span>:<p>&nbsp;</p>}
                        </Card>
                        </Col> 
                        ))
                    }
</Row>
           </div>
            </Col>
          
        </Row>
    </Container>
    );
}

}
export default Admin;