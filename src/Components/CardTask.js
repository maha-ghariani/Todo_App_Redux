import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { deleteTask } from "../Redux/Actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { updateTASK } from "../Redux/Actions";
import Form from 'react-bootstrap/Form';
import { doneTASK } from "../Redux/Actions";
function CardTask({ task }) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(" ");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteTask(task.id));
  };
  const handleUpdate = () => {
    dispatch(updateTASK(task.id,text));
    handleClose();
  };
  const handleDone=()=>{
    dispatch(doneTASK(task.id));
  }
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title style={task.done? {textDecoration: "line-through"}: {textDecoration:"none"}}>{task && task.text}</Card.Title>
          <Form.Check type="checkbox" onClick={handleDone}  />
          <Button variant="primary" onClick={handleShow} style={{marginRight:30}}>
            Update task
          </Button>
          <Button variant="danger" onClick={handleClick} >
            Delete task
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            placeholder={task.text}
            onChange={(e) => setText(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardTask;
