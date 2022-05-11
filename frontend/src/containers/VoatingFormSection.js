import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Container, Row, Col, Input, Button } from "reactstrap";

import { addVoat } from "context/actions/VoatingAction";

const VoatingFormSection = ({
  voaters_list,
  voaters_loading,
  candidates_list,
  candidates_loading,
  addVoat,
}) => {
  const [voaterID, setVoaterID] = useState(null);
  const [candidateID, setCandidateID] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (voaterID !== null && candidateID !== null) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [voaterID, candidateID, isDisabled]);

  const handleSubmit = () => {
    addVoat(parseInt(voaterID), parseInt(candidateID));
    setVoaterID(null);
    setCandidateID(null);
    document.getElementById("selectCandidate").value = "";
  };

  return (
    <>
      {!voaters_loading && !candidates_loading && (
        <div className="section" id="votes_tables">
          <Container>
            <h1> Vote!</h1>
            <Row>
              <Col sm={12} md={5}>
                {voaters_loading ? (
                  "Loading..."
                ) : (
                  <Input
                    id="selectVoater"
                    name="select"
                    type="select"
                    onChange={(event) => setVoaterID(event.target.value)}
                  >
                    <option value="" hidden></option>
                    {voaters_list
                      .filter((el) => el.has_voted === false)
                      .map((voater, voater_idx) => (
                        <option
                          key={voater_idx}
                          value={voater.id}
                        >{`${voater.voater_name}`}</option>
                      ))}
                  </Input>
                )}
              </Col>
              <Col sm={12} md={5}>
                {candidates_loading ? (
                  "Loading..."
                ) : (
                  <Input
                    id="selectCandidate"
                    name="select"
                    type="select"
                    onChange={(event) => setCandidateID(event.target.value)}
                  >
                    <option value={null} hidden></option>
                    {candidates_list.map((candidate, candidate_idx) => (
                      <option
                        key={candidate_idx}
                        value={candidate.id}
                      >{`${candidate.candidate_name}`}</option>
                    ))}
                  </Input>
                )}
              </Col>
              <Col sm={12} md={2}>
                <Button
                  disabled={isDisabled}
                  className="btn-onvelo"
                  onClick={() => handleSubmit()}
                >
                  Submit!
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  voaters_list: state.VoatersReducer.voaters_list,
  voaters_loading: state.VoatersReducer.voaters_loading,
  candidates_list: state.CandidatesReducer.candidates_list,
  candidates_loading: state.CandidatesReducer.candidates_loading,
});

export default connect(mapStateToProps, { addVoat })(VoatingFormSection);
