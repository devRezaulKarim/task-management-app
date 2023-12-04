/* eslint-disable no-unused-vars */
import AddTaskForm from "../Components/AddTaskForm/AddTaskForm";
import TaskList from "../Components/TaskList/TaskList";
import "./AllStyles.css";



export default function HomePage() {


  return (
    <>
      <div className="homeContainer">
        <h1>
          Task <span>Manage</span>ment
        </h1>
        <AddTaskForm />
        <TaskList />
      </div>
    </>
  );
}
