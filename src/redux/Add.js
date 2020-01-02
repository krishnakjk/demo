import React,{Component} from 'react';
import {Container,Row,Col,Button} from 'reactstrap';
import {connect} from 'react-redux';


class Add extends Component{
        constructor(props){
            super(props);

            console.log(this.props)
        }

        
render(){
    return(
        <Container fluid>
            <Row style={{marginTop:"50px"}}>
                <Col xxs="4">
                    <div className="App">
                      <h6 style={{marginTop:"40px"}}>Items</h6>
                        </div>
                </Col>
                <Col xxs="4">
                    <div className="App">
                   
                       <span><Button onClick={this.props.add}>+</Button>
                       <p>orders:{this.props.orders}</p>
                        <Button onClick={this.props.sub}>-</Button></span> 
                        </div>
                </Col>
                <Col xxs="4"  style={{marginTop:"20px"}}>
                    <div className="App">
                       <p>Total Amount</p> <p>{this.props.y}Rs</p> 
                        </div>
                </Col>
                <Col xxs="4"  style={{marginTop:"20px"}}>
                    <div className="App">
                   <Button type="button">Print</Button>
                        </div>
                </Col>
            </Row>
        </Container>

    )
}

}

const mapStateToProps=(state)=>{

     var k=state.orders;
     var y=k*150;
    return{
         orders:state.orders,y
    }
    
};


const mapDispachToProps=(dispach)=>{
    return{
        add:()=>dispach({type:'ADD'}),
        sub:()=>dispach({type:'SUB'})
    }
};

export default connect(mapStateToProps,mapDispachToProps) (Add);