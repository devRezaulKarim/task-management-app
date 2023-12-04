/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { GlobalContext } from "../../GlobalState";

export default function TaskItem({ task }) {
  const { id, task: taskText, isComplete } = task;
  const { completeTask } = useContext(GlobalContext);

  return (
    <div className="taskItem">
      <p className={`task ${isComplete && "complete"}`}>{taskText}</p>
      <div className="btns">
        <div>
          <input
            checked={isComplete}
            onChange={() => completeTask(id)}
            type="checkbox"
            name=""
            id={id}
          />
          <label htmlFor={id}>Complete</label>
        </div>
        {
          <button>
            <FaEdit className="editIcon" />
            Edit
          </button>
        }
        <button>
          <MdDeleteForever className="deleteIcon" />
          Delete
        </button>
      </div>
    </div>
  );
}
