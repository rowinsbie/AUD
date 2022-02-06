import NavBar from "./layout/NavBar"
import UserIdentification from "./user/UserIdentification";
import SideBar from "./layout/SideBar";
import ReportCard from "./Dashboard/ReportCard";
import { Container,Row,Col } from "react-bootstrap";

import '../assets/scss/Dashboard.scss';

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
                    <Col lg={7}>
                        <ReportCard />
                    </Col>
                </Row>
               
            </Container>
        </>
    )
}