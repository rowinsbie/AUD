import { Container,Navbar,Nav,Image } from "react-bootstrap"
import AUDLogo from '../../assets/images/logo.png';
import {FaBell,FaUserCircle} from 'react-icons/fa';
export default function NavBar()
{
    return (
        <>
           <Navbar className="custom-bg-white navbar" >
    <Container>
    <Navbar.Brand href="#home">
        <Image src={AUDLogo} fluid={true} width="100" />
    </Navbar.Brand>
    <Nav className="ml-auto">
     
      <Nav.Link><h3><FaBell /></h3></Nav.Link>
      <Nav.Link ><h3><FaUserCircle /></h3></Nav.Link>
    </Nav>
   
    </Container>
  </Navbar>
       
  
        </>
    )
}