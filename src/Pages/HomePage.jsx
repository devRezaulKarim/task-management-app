/* eslint-disable no-unused-vars */
import { useContext } from "react";
import AddTaskForm from "../Components/AddTaskForm/AddTaskForm";
import TaskList from "../Components/TaskList/TaskList";
import "./AllStyles.css";
import { GlobalContext } from "../GlobalState/GlobalState";

export default function HomePage() {
  const { tasks } = useContext(GlobalContext);

  return (
    <>
      <div className="homeContainer">
        <h1>
          Task <span>Manage</span>ment
        </h1>
        <AddTaskForm />
        {tasks.length > 0 && <TaskList />}
      </div>
    </>
  );
}
