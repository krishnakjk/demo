import React,{Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Container,Row,Col,Button} from 'reactstrap';
import logo from './Assets/person.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './Content.js'
import Side from './Side.js';
import Naavbar from './Naavbar';
import Admin from './Admin';
import Applyleave from './Applyleave';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Add from './redux/Add';



class Home extends Component{
    constructor(props){
        super(props);

    }
render(){
    return(

       <Container fluid>   
       <Row>
           <Col col="12">
               <Naavbar />
           </Col>
       </Row>
            <Row >
                <Col sm="3"> <Side /></Col>
                <Col sm="9"> 
            <Content />
           
             </Col>
            </Row>
            
       </Container>
    );
}
}
export default Home;