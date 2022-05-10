import React, { useState } from "react";

import { Modal, FormGroup, Label, Input, Button } from "reactstrap";

const ModalForm = ({ inputName, showModal, setShowModal, handleSave }) => {
  const [newName, setNewName] = useState("");

  return (
    <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
      <div className="modal-header">
        <h5 className="modal-title text-center" id={`add${inputName}Name`}>
          {`Add ${inputName} Form`}
        </h5>
      </div>
      <div className="modal-body">
        <FormGroup>
          <Label>{`Write ${inputName} Name`}</Label>

          <Input
            placeholder=""
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </FormGroup>
      </div>
      <div className="modal-footer">
        <div className="left-side">
          <Button
            className="btn-link"
            color="success"
            type="button"
            onClick={() => {
              handleSave(newName);
              setNewName("");
              setShowModal(false);
            }}
          >
            {`Save new ${inputName}`}
          </Button>
        </div>
        <div className="divider" />
        <div className="right-side">
          <Button
            className="btn-link"
            color="danger"
            type="button"
            onClick={() => {
              setNewName("");
              setShowModal(false);
            }}
          >
            Never mind
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalForm;
