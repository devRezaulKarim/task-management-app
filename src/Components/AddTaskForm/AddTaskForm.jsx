import { useContext } from "react";
import { GlobalContext } from "../../GlobalState";
import { IoMdAddCircleOutline } from "react-icons/io";

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
          <button>
            <IoMdAddCircleOutline className="addIcon" />
            <span>Add task</span>
          </button>
        </div>
      </form>
    </div>
  );
}
