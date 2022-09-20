import React from "react";
import CardTask from "./CardTask";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
function List() {
  const tasks = useSelector((state) => state);
  return (
    <div style={{display:'flex', justifyContent:'space-around'}}>
      {tasks.length !== 0 ? (
        tasks.map((task) => <CardTask key={task.id} task={task}/>)
      ) : (
        <Spinner animation="border" />
      )}
    </div>
  );
}

export default List;
