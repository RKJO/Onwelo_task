import React, { useState } from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { Card, CardBody, CardHeader, Table } from "reactstrap";
// actions
import { addVoater } from "context/actions/VoatersActions";
// components
import ModalForm from "./ModalForm";

const VoatersCardTable = ({ voaters_list, voaters_loading, addVoater }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card>
        <CardHeader>
          <h4>Voaters</h4>
          <FontAwesomeIcon
            className={"btn-card-onvelo"}
            icon={faCirclePlus}
            onClick={() => setShowModal(true)}
          />
        </CardHeader>
        <CardBody>
          {voaters_loading ? (
            <h5>Loading...</h5>
          ) : (
            <Table bordered size="sm" className="text-center">
              <thead>
                <tr>
                  <th className="name">Name</th>
                  <th className="info">Has Voted</th>
                </tr>
              </thead>
              <tbody>
                {voaters_list.map((voater) => {
                  return (
                    <tr key={voater.id}>
                      <td>{voater.voater_name}</td>
                      <td>
                        {voater.has_voted ? (
                          <FontAwesomeIcon
                            className={"text-success"}
                            icon={faCheck}
                          />
                        ) : (
                          <FontAwesomeIcon
                            className={"text-danger"}
                            icon={faXmark}
                          />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </CardBody>
      </Card>
      <ModalForm
        inputName={"Voater"}
        showModal={showModal}
        setShowModal={setShowModal}
        handleSave={addVoater}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  voaters_list: state.VoatersReducer.voaters_list,
  voaters_loading: state.VoatersReducer.voaters_loading,
});

export default connect(mapStateToProps, { addVoater })(VoatersCardTable);
