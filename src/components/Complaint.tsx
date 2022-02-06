import NavBar from "./layout/NavBar";
import {FaFileAlt} from 'react-icons/fa';
import { Container, Row, Col, Form,Card, Button } from "react-bootstrap";
export default function Complaint() {
  return (
    <>
      <NavBar></NavBar>
      <Container className="mt-5">
        <Row>
          <Col lg={{offset:4,span:4}}>
            <Card>
            
                <Card.Body>
                <h4><FaFileAlt />  Complaint Form</h4>
          
          

            <Form className="mt-4">
              <Form.Group>
                <Form.Label>Plate #</Form.Label>
                <Form.Control placeholder="Enter the Plate #"></Form.Control>
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Enter your email"></Form.Control>
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Label>Phone No.</Form.Label>
                <Form.Control placeholder="Enter your Phone No."></Form.Control>
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Label>Category</Form.Label>
                <Form.Select>
                  <option>Select Category</option>
                  <option>Rude Behaviour</option>
                  <option>Cat Calling / Street Harassment</option>
                  <option>Reckless</option>
                  <option>Abusive</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Label>Complaint Details</Form.Label>

                <Form.Control
                  rows={5}
                  as="textarea"
                  placeholder="Please include the date and time of incident in your complaint"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mt-4 text-end">
                    <Button className="btn btn-dark">Submit Complaint</Button>
              </Form.Group>
            </Form>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
