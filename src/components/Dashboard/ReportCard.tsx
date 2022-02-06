import { Card,Row,Col,Container } from "react-bootstrap"
export default function ReportCard()
{
    return (
        <Card className="main-card">
            <Card.Body>
                <div className="text-center">
                    <span>Reported Violations</span>
                    <h1 className="total_no_1">150</h1>
                </div>
                <Container>
                <Row className="text-center">
                    <Col lg={3}>
                        <span>Resolved</span>
                        <h1>50</h1>
                    </Col>

                    <Col lg={3}>
                        <span>Unresolved</span>
                        <h1>50</h1>
                    </Col>
                    <Col lg={3}>
                        <span>Escalated</span>
                        <h1>50</h1>
                    </Col>
                    <Col lg={3}>
                        <span>Trashed</span>
                        <h1>0</h1>
                    </Col>
                </Row>
                </Container>
               
            </Card.Body>
        </Card>
    )
}