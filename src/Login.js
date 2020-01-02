import React,{Component} from 'react';
import {Container,Row,Col,Form,FormGroup,Label,Input,Button} from 'reactstrap';
// import back from './Assets/smoke.jpg';
import './Login.css';

 
// import { withRouter } from "react-router-dom";
let passwordError="";
let emailError= "";
class Login extends Component{
    constructor(props){
        super(props);

       
        this.state={
            email:'',
            password:'',
            emailError:'',
            passwordError:''
            
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
    }
    
    handleSubmit(e){
        console.log(e)
    var a=this.state.email;
    localStorage.setItem("Email",a)
    var b=this.state.password;  
    if(a==="jayakrishna@gmail.com" && b==="1234" ){
        var c="Jayakrishna"
        localStorage.setItem("user",c)
     
        console.log("props",this.props)
        e.preventDefault();
        this.props.history.push("/home");
    }else if(a==="satya@gmail.com" && b==="12345"){
        var d="Satya"
        localStorage.setItem("user",d)
       this.props.history.push("/admin");
    }else if(a==="lavanya@gmail.com" && b==="123456"){
        var h="Lavanya"
        localStorage.setItem("user",h)
        this.props.history.push("/home");
    } else if(a==="supriya@gmail.com" && b==="1234567"){
        var f="Supriya"
        localStorage.setItem("user",f)
            this.props.history.push("/home")
    }else if(a==="bhargav@gmail.com" && b==="12345678"){
        var g="Bhargav"
        localStorage.setItem("user",g)
        this.props.history.push("/home")
    }else if(!a && !b){
         emailError ='Email cannot blank';
         this.setState({emailError})
         passwordError = 'password cannot blank';
             this.setState({passwordError})
       
    }
}
     handleChange(e){
        this.setState({email:e.target.value})
       // const name=e.target.value
       let emailError= "";
       if(!this.state.email.includes('@') && !this.state.email.includes(".")){
           emailError ='invalidemail';
           this.setState({emailError})
       }else{
        emailError = 'good';
        this.setState({emailError})
       }
         }
      
     handlePasswordChange(e){ 
        this.setState({password:e.target.value})
        let passwordError="";
        if(this.state.password.length<3){
            passwordError = 'password at least 4 NUM';
            this.setState({passwordError})
        }else{
            passwordError= 'good';
            this.setState({passwordError})
           }
     }
    


    render(){
        const { formErrors } = this.state;
        return(
          <Container fluid id="cont" >
              <Row  >
                  <Col sm='2' id="log">
                      <p style={{textAlign:"center",color:"white",fontSize:"20px"}}>Login</p>
                  <Form  onSubmit={this.handleSubmit}>
                      <FormGroup>
                          <Label for="email" id="email">Email</Label>
                          <Input type="text" name="Email" placeholder="Email"  onChange={this.handleChange}></Input>
                        <div style={{color:"red"}}>{this.state.emailError}</div>
                      </FormGroup>
                      <FormGroup>
                          <Label for="password" id="email">Password</Label>
                            <Input type="Password" name="Password" placeholder="Password" onChange={this.handlePasswordChange}></Input>
                            <div style={{color:"red"}}>{this.state.passwordError}</div>
                      </FormGroup>
                      <Button style={{marginLeft:"100px"}} type='submit'>Submit</Button>
                  </Form>  
                  </Col>
              </Row>
          </Container>
        )
    }
}

export default Login;