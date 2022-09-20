import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTask } from "../Redux/Actions";
import { useDispatch } from "react-redux";
function Add() {
  const dispatch = useDispatch();
  //State locale
  const [task, setTask] = useState({ id: "", text: "", done: false });
  const handleChange = (e) => {
    setTask({
      ...task,
      id: Math.floor(Math.random() * 10000) + 1,
      text: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(task));
    setTask({ id: "", text: "", done: false })
  };
  return (
    <Form style={{ width: "50%", margin: "auto" }} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Add your task</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task"
          onChange={handleChange}
          value={task.text}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Add;
