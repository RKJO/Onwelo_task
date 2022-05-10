import React, { useState } from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { Card, CardBody, CardHeader, Table } from "reactstrap";
// actions
import { AddCandidate } from "context/actions/CandidateActions";
// components
import ModalForm from "./ModalForm";

const CandodatesCardTable = ({
  candidates_list,
  candidates_loading,
  AddCandidate,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card>
        <CardHeader>
          <h4>Candidates</h4>
          <FontAwesomeIcon
            className={"btn-onvelo"}
            icon={faCirclePlus}
            onClick={() => setShowModal(true)}
          />
        </CardHeader>
        <CardBody>
          <Table bordered size="sm" className="text-center">
            <thead>
              <tr>
                <th className="name">Name</th>
                <th className="info">Votes</th>
              </tr>
            </thead>
            <tbody>
              {candidates_list.map((candidate) => {
                return (
                  <tr key={candidate.id}>
                    <td>{candidate.candidate_name}</td>
                    <td>{candidate.votes}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <ModalForm
        inputName={"Candidate"}
        showModal={showModal}
        setShowModal={setShowModal}
        handleSave={AddCandidate}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  candidates_list: state.CandidatesReducer.candidates_list,
  candidates_loading: state.CandidatesReducer.candidates_loading,
});

export default connect(mapStateToProps, { AddCandidate })(CandodatesCardTable);
