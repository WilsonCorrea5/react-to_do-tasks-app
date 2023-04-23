import { useState } from "react";

export const TaskGenerator = ({addTask}) => {
  const [taskName, setTaskName] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(taskName)
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
      <div className="col-9">
      <input
        type="text"
        placeholder="Add a new task here!"
        value={taskName}
        onChange={({ target }) => setTaskName(target.value)}
        className='form-control'
      />
      </div>
      <div className="col-3">
      <button className="btn btn-secondary fw-bold">Save</button>
      </div>
    </form>
  );
};
