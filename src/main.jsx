import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Navigationbar from "./Navigationbar"

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigationbar />
    <Container>
      <Row className='row justify-content-center align-items-center'>
        <Row className="col-md-8 col-sm-10 col-xs-12">
            <App />
          </Row>
        </Row>
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
)
