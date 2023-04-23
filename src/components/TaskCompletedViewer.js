export const TaskCompletedViewer = ({
  setShowCompleted,
  cleanTask,
  isChecked,
  tasks,
}) => {
  const handleDelete = () => {
    console.time('run')
    if (tasks.some((t) => t.done === true)) {
      confirmDelete();
    } else {
      alert("No tasks have yet been completed");
    }
    console.timeEnd('run');
  };

  const confirmDelete = () => {
    if (window.confirm("Are you sure you want to delete the completed task?")) {
      cleanTask();
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          type="checkbox"
          onChange={(e) => setShowCompleted(e.target.checked)}
          checked={isChecked}
          className="form-check-input"
        />
<label className="fw-bold">
        Show finished Task{" "}
        
      </label>
      </div>
      
      <button
        onClick={handleDelete}
        className="d-flex justify-content-end btn btn-warning btn-sm ml-auto p-2 fw-bold"
      >
        Clear finished task
      </button>
    </div>
  );
};
