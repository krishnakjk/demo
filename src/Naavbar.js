import React,{Component} from 'react';
import {Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText} from 'reactstrap';
    import img from './Assets/img.jpg';
    import login from './Login';
    import  {Link} from "react-router-dom";

class Naavbar extends Component{
    constructor(props){
        super(props);
      
    }

   
render(){  
  
   
return(
<div>
<Navbar color="light" light  expand="md">

            <Link to='/home' style={{color:"black" ,height:"35px",marginTop:"10px"}}>Home</Link>
  
    <NavbarToggler />
    <Collapse navbar>
        <Nav className="mr-auto" navbar>
        <NavItem>
            <Link to='/About' style={{color:"black" ,height:"20px",marginLeft:"15px"}}>About</Link>
        </NavItem>
        <NavItem>
            <Link to="/Add" style={{color:"black" ,height:"20px",marginLeft:"15px"}}>Contact</Link>
        </NavItem>
        <NavItem>
            <Link href="/Conatct" style={{color:"black" ,height:"20px",marginLeft:"15px"}}>Faq</Link>
        </NavItem>
        </Nav>
        {localStorage.getItem("Email")}
        <UncontrolledDropdown navbar inNavbar>
                <DropdownItem>
                <img src={img} style={{borderRadius:"50%",height:"50px",width:"50px"}}/>
                </DropdownItem>
                {(localStorage.getItem("Email") == 'satya@gmail.com')? 
                  <DropdownMenu right>
                  <DropdownItem>
                  <NavLink href="/">LOGOUT</NavLink>
                  </DropdownItem>
                  </DropdownMenu>:
                <DropdownMenu right>
                <DropdownItem>
                Settings
                </DropdownItem>
                <DropdownItem>
                 Forgotpassword
                </DropdownItem>
                <DropdownItem>
                <NavLink href="/">LOGOUT</NavLink>
                </DropdownItem>
                </DropdownMenu>}
        </UncontrolledDropdown>
    </Collapse>
</Navbar>
</div>

    );

}
}

export default Naavbar;