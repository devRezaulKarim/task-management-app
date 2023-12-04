import { useContext } from "react";
import { GlobalContext } from "../../GlobalState";

export default function AddTaskForm() {
  const { addTask } = useContext(GlobalContext);
  const handleAddTask = (e) => {
    e.preventDefault();

    const elements = [...e.target.elements];
    const task = elements[0].value;
    const newTask = {
      id: Date.now(),
      isComplete: false,
      task,
    };
    if (task.trim() > 0) {
      addTask(newTask);
      elements[0].value = "";
    }
    else alert("")
  };
  return (
    <div className="addTaskForm">
      <form onSubmit={handleAddTask} action="">
        <input type="text" name="" id="" placeholder="Note your task" />
        <div>
          <span className="material-symbols-outlined">add_task</span>
          <button>Add task</button>
        </div>
      </form>
    </div>
  );
}
