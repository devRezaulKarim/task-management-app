/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function TaskItem({ task }) {
  return (
    <div className="taskItem">
      <p className="task">{task.task}</p>
      <div className="btns">
        <div>
          <input type="checkbox" name="" id={task.id} />
          <label htmlFor={task.id}>Complete</label>
        </div>
        <button>
          <FaEdit className="editIcon" />
          Edit
        </button>
        <button>
          <MdDeleteForever className="deleteIcon" />
          Delete
        </button>
      </div>
    </div>
  );
}
