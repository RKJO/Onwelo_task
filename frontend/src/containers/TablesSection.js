import React from "react";

import { Container, Row, Col } from "reactstrap";

import VoatersCardTable from "components/VoatersCardTable";
import CandodatesCardTable from "components/CandodatesCardTable";

const TablesSection = () => {
  return (
    <div className="section" id="votes_tables">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <VoatersCardTable />
          </Col>
          <Col sm={12} md={6}>
            <CandodatesCardTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TablesSection;
