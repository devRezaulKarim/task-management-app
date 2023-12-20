import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../GlobalState/GlobalState";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList() {
  const { tasks } = useContext(GlobalContext);
  const [isEdit, setIsEdit] = useState(null);

  useEffect(() => {
    setIsEdit(null);
  }, [tasks]);

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
