export const TaskRow = ({ task, toggleCheckBox }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleCheckBox(task)}
        />
      </td>
    </tr>
  );
};
