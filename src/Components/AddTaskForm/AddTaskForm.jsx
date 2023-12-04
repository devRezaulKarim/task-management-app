import { useContext } from "react";
import { GlobalContext } from "../../GlobalState";

export default function AddTaskForm() {
  const { addTask } = useContext(GlobalContext);
  const handleAddTask = (e) => {
    e.preventDefault();

    const elements = [...e.target.elements];
    const task = elements[0].value.trim();
    const newTask = {
      id: Date.now(),
      isComplete: false,
      task,
    };
    if (task.length > 0) {
      addTask(newTask);
      elements[0].value = "";
    } else alert("Task can't be empty.");
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
