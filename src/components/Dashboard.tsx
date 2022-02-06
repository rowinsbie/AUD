import NavBar from "./layout/NavBar"
import UserIdentification from "./user/UserIdentification";
import SideBar from "./layout/SideBar";
import { Container,Row,Col } from "react-bootstrap";
export default function Dashboard()
{
    return (
        <>
            <NavBar></NavBar>
            <Container className="mt-5">
                <Row>
                    <Col lg={2}>
                    <UserIdentification />
                    <hr />
                    <SideBar  />

                       
                        
                    </Col>
                </Row>
               
            </Container>
        </>
    )
}