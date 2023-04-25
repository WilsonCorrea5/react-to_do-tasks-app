import { useEffect, useState } from "react";
import "./App.css";
import { TaskGenerator } from "./components/TaskGenerator";
import { TaskTable } from "./components/TaskTable";
import { TaskCompletedViewer } from "./components/TaskCompletedViewer";

function App() {
  const [taskItem, setTaskItem] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  //se recibe de taskGenerator una nueva tarea, se valida si existe en el [{},{}]. si ? se agrega : no
  const addTask = (newTask) => {
    if (taskItem.find((task) => task.name === newTask) || newTask.trim().length <= 1) return;
    setTaskItem([...taskItem, { name: newTask, done: false }]);
  };
  //se oculta o muestra la Task cuando clicamos el checkbox
  const toggleCheckBox = (task) => {
    setTaskItem(
      taskItem.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };
  //este efecto obtiene de localstorage el item Task, lo guarda en una variable y lo pasa a la funcion que actualiza setTaskItem. esto se realiza solo una vez
  useEffect(() => {
    let data = localStorage.getItem("Task");
    if (data) {
      setTaskItem(JSON.parse(data));
    }
  }, []);

  //se actualiza el estado con las tareas filtradas marcadas como false o no finalizadas
  const cleanTask = () => {
    setTaskItem(taskItem.filter((task) => !task.done));
    setShowCompleted(false);
  };

  //este efecto secundario convierte a cadena el array de objetos y lo guarda en localstorage. cada vez que taskItem cambie.
  useEffect(() => {
    localStorage.setItem("Task", JSON.stringify(taskItem));
  }, [taskItem]);

  return (
    <main className="bg-info vh-100 text-black">
      <div className="container col-md-6 offset-md-3">
        <h1 className="fw-bold text-center">To-Do App</h1>
        <TaskGenerator addTask={addTask} />
        <TaskTable tasks={taskItem} toggleCheckBox={toggleCheckBox} />
        <TaskCompletedViewer
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTask={cleanTask}
          isChecked={showCompleted}
          tasks={taskItem}
        />
        {showCompleted === true && (
          <TaskTable
            tasks={taskItem}
            toggleCheckBox={toggleCheckBox}
            showCompleted={showCompleted}
          />
        )}
      </div>
    </main>
  );
}

export default App;
