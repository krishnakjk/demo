import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import img from './Assets/img.jpg';
import imgg from './Assets/imgg.jpg';
import {Container,Row,Col,Button,Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap';
import {Link,NavLink} from 'react-router-dom';
import './side.css';
import Applyleaves from './Applyleave';



var x=""

class Side extends Component{

      constructor(props){
        super(props);
        
      this.state={
         z:''
       }

      }
      componentWillMount(){
      //  var k=this.props.propData; 
      //    var y=JSON.parse(localStorage.getItem("names"))
      //     x=y.length
      //     this.setState({"z":x})
      //    console.log("Props in sidejs",x)
      //    var t=localStorage.getItem("names").includes(localStorage.getItem("user"))
      
      //    console.log(t)
       }
render(){
return(

    <Container fluid>
    <Row >
        <Col sm="2" style={{marginTop:"20px"}}>
          <p></p>
<img src={img} style={{height:"80px",width:"80px",borderRadius:"50%"}}/>
</Col>
<Col sm="7">
<h4 style={{marginTop:"40px" ,marginLeft:"8px"}}>{localStorage.getItem("user")}</h4>
<p style={{marginLeft:"15px",height:"8px"}}> UX Designer</p>
<p style={{marginLeft:"15px",height:"8px"}}>12 days OOF in 9 months</p>
<NavLink to="/Applyleave"><Button color="info" style={{marginTop:"35px",marginLeft:"1px",borderRadius:"20px"}}>Apply Leaves</Button></NavLink>
<NavLink to="/Admin"><Button color="info" style={{marginTop:"35px" ,borderRadius:"20px"}}>Leaves View</Button></NavLink>
</Col>
</Row>        
<Row style={{marginTop:"100px"}}><h6>Notification</h6></Row>
<Row id="notifi" style={{marginLeft:"28px", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)" }}>
<Row >
<Col sm="2">
    <img src={img} style={{borderRadius:"50%",height:"50px",width:"50px"}}/>
</Col>
<Col sm="10">
{/* <p>{localStorage.getItem("user")}</p>  
  {
(localStorage.getItem("names").includes(localStorage.getItem("user"))==true)? <div><p style={{color:"silver"}}>{localStorage.getItem("start")}</p>
<p style={{color:"silver"}}>{localStorage.getItem("end")}</p>
<p>{localStorage.getItem("message")}</p>
<p>{localStorage.getItem("Approve")}</p>
<p>Leaves {this.state.z}</p></div>:(localStorage.getItem("names").includes(localStorage.getItem("user"))==true) ? <div><p style={{color:"silver"}}>{localStorage.getItem("start")}</p>
<p style={{color:"silver"}}>{localStorage.getItem("end")}</p>
<p>{localStorage.getItem("message")}</p>
<p>{localStorage.getItem("Approve")}</p>
<p>Leaves {this.state.z}</p></div>:(localStorage.getItem("names").includes(localStorage.getItem("user"))==true) ? <div><p style={{color:"silver"}}>{localStorage.getItem("start")}</p>
<p style={{color:"silver"}}>{localStorage.getItem("end")}</p>
<p>{localStorage.getItem("message")}</p>
<p>{localStorage.getItem("Approve")}</p>
<p>Leaves {this.state.z}</p></div>:(localStorage.getItem("names").includes(localStorage.getItem("user"))==true) ? <div><p style={{color:"silver"}}>{localStorage.getItem("start")}</p>
<p style={{color:"silver"}}>{localStorage.getItem("end")}</p>
<p>{localStorage.getItem("message")}</p>
<p>{localStorage.getItem("Approve")}</p>
<p>Leaves {this.state.z}</p></div>:(localStorage.getItem("user")=="Satya") ? <div><p style={{color:"silver"}}>{localStorage.getItem("start")}</p>
<p style={{color:"silver"}}>{localStorage.getItem("end")}</p>
<p>{localStorage.getItem("message")}</p>
<p>{localStorage.getItem("Approve")}</p>
<p>Leaves {this.state.z}</p></div>:<p style={{marginLeft:"20px"}}>No Leaves</p> }*/}



</Col>
</Row>
<Row><img src="https://img.icons8.com/carbon-copy/100/000000/chat-message.png" style={{marginLeft:"20px",height:"30px",width:"30px"}} ></img>
<span><p style={{color:"#0055FF",marginTop:"2px"}}>Chat</p></span>
</Row>
</Row>
  </Container>
);
}
}
export default Side;