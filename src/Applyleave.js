import React,{Component, Fragment} from 'react';
import DatePicker from 'react-datepicker';
import {Container,Row,Col,Label,Input,Button} from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";
import Naavbar from './Naavbar';
import Side from './Side';

var x="";
class Applyleaves extends Component{
        constructor(props){
            super(props);
            this.state ={
                startDate: new Date(),
                startDatee: new Date(),
                Message:'',
                name:"",
                names:[],
              x:""
            };
        }

        

    handleChange = date =>{
        this.setState({
            startDate: date
            
        });
        console.log( this.state.startDate)
    };
    handleChangee = datee =>{
        this.setState({
            startDatee: datee
           
        });
        console.log( this.state.startDatee)
    };
    handleChangeee =mess =>{
       
            this.setState({Message:mess.target.value})
            console.log(this.state.Message)
    }
    handleChanges=name =>{  
        this.setState({name:name.target.value})
    }
    submit=e=>{
        console.log(e)
   
        var a=this.state.startDate;
        var b=this.state.startDatee;
        var c=this.state.Message;
        this.state.names.push(this.state.name);
        let nameData=this.state.names;
        localStorage.setItem("names", JSON.stringify(nameData))
        var y=JSON.parse(localStorage.getItem("names"))
        var z=y.length
        
        this.setState({"x":z})
        console.log("names",this.state.x)
      
    console.log(a,b,c)
//  localStorage.setItem("name",d)
  localStorage.setItem("start",a)
  localStorage.setItem("end",b)
  localStorage.setItem("message",c)

    }
render(){
    return(
     <Fragment>
         <Container fluid>
            
             <Row>
                 <Col col="12">
                <Naavbar />
                 </Col>
             </Row>
         </Container>
        <Container fluid> 
            <Row>
              <Col sm="3">
              <Side  propData = {this.state.names}
             
             />
              
              </Col>
              <Col sm="8">
                  <div style={{marginLeft:"80px",marginRight:"80px"}}>
                      
                      <h6 style={{marginLeft:"330px",marginTop:"20px"}}>Apply Leaves</h6>
                      <div style={{marginLeft:"250px"}}>
                      <p>Name</p><Input type="text" name='name' onChange={this.handleChanges} style={{width:"250px",textAlign:"center"}}/>
                      <p>Type</p><Input type="text" name='type' onChange={this.handleChangees} style={{width:"250px"}}/>
                      <p>startDate</p> <DatePicker
                         selected={this.state.startDate}
                         onChange={this.handleChange}/>
                      <p>EndDate</p> <DatePicker
                         selected={this.state.startDatee}
                         onChange={this.handleChangee}/>
                     
                     <br/><Label for="message">Message</Label>
                    <Input type="text" name="message" onChange={this.handleChangeee} style={{marginRight:"580px"}} style={{width:"250px"}}/>
                     <Button type="button" style={{marginTop:"20px" ,marginLeft:"80px"}} onClick={this.submit}>SUBMIT</Button>
              

                     </div>
                  </div>
               
              </Col>
</Row>
</Container>
</Fragment>
 );
    
}

}

export default Applyleaves;
