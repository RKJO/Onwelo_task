import React from "react";

import { Container, Row, Col } from "reactstrap";

import VoatersCardTable from "components/VoatersCardTable";
import CandodatesCardTable from "components/CandodatesCardTable";
import ModalForm from "components/ModalForm";

const TablesSection = () => {
  return (
    <div className="section secion-blog cd-section" id="votes_tables">
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
      <ModalForm />
    </div>
  );
};

export default TablesSection;
