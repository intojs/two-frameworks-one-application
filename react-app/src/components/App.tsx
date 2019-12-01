import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import { LoanCalculator } from './LoanCalculator';

const col = { size: 8, offset: 2 };

export const App: React.FC = () => (
  <Container>
    <Row>
      <Col sm={col}>
        <LoanCalculator/>
      </Col>
    </Row>
  </Container>
);
