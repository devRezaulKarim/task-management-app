import { useContext } from "react";
import { GlobalContext } from "../../GlobalState";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList() {
  const { tasks } = useContext(GlobalContext);

  return (
    <div className="tasksList">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
