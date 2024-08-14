import {  Col, Container, Row } from "react-bootstrap";
import StackForm from "./components/StackForm";
import './index.css';
import CreateAcount from "./AppCreate";
function AppLogin() {

  return (
    <>
      <Container>
        <Row>
          <Col>
            <StackForm />
            <p className="text-muted mx-auto text-center">
              Más sobre nosotros{" "}
              <span className="text-primary">
                {" "}
                <a href="#">Aquí</a>.
              </span>
            </p>
          </Col>
          <Col>
            <CreateAcount />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AppLogin
