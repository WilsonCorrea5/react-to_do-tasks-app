import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleCheckBox, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleCheckBox={toggleCheckBox} />
      ));
  };

  return (
    <table className="table table-info table-striped table-bordered">
      <thead>
        <tr className="table-dark">
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};
