import { useContext, useState } from "react";
import { GlobalContext } from "../../GlobalState/GlobalState";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList() {
  const { tasks } = useContext(GlobalContext);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="tasksList">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          length={tasks.length}
          edit={{ isEdit, setIsEdit }}
        />
      ))}
    </div>
  );
}
