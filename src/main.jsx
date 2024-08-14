import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppLogin from "./AppLogin.jsx";
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {  Row } from 'react-bootstrap';
import NavBar from './components/navbar.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container">
      <Row>
        <NavBar href="#" brandName="Admin Hotel" />
      </Row>
      <Row>
        <AppLogin />
      </Row>
    </div>
  </StrictMode>
);
