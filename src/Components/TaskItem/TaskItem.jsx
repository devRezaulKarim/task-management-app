/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { GlobalContext } from "../../GlobalState/GlobalState";
import { IoMdSave } from "react-icons/io";

export default function TaskItem({ task, edit: { isEdit, setIsEdit } }) {
  const { id, task: taskText, isComplete } = task;
  const { completeTask, deleteTask, updateTask } = useContext(GlobalContext);
  const [updateText, setUpdateText] = useState(taskText);

  const handleUpdate = () => {
    if (updateText.trim().length > 0) {
      updateTask({ id: isEdit, task: updateText });
      setIsEdit(null);
    } else alert("Task can't be empty.");
  };

  return (
    <div className="taskItem">
      {isEdit === id ? (
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          value={updateText}
          onChange={(e) => setUpdateText(e.target.value)}
        ></textarea>
      ) : (
        <p className={`task ${isComplete && "complete"}`}>{taskText}</p>
      )}

      <div className={`btns ${isEdit === id && "btnEnd"}`}>
        {isEdit !== id && (
          <div className="checkBox">
            <input
              checked={isComplete}
              onChange={() => completeTask(id)}
              type="checkbox"
              name=""
              id={id}
            />
            <label htmlFor={id}>{isComplete ? "Completed" : "Complete"}</label>
          </div>
        )}
        {!isComplete &&
          (isEdit !== id ? (
            <button onClick={() => setIsEdit(id)} className="editBtn">
              <AiFillEdit className="editIcon" />
              <span>Edit</span>
            </button>
          ) : (
            <button onClick={handleUpdate} className="editBtn">
              <IoMdSave className="editIcon saveIcon" />
              <span>Save</span>
            </button>
          ))}
        {isEdit !== id && (
          <button onClick={() => deleteTask(id)} className="deleteBtn">
            <MdDeleteForever className="deleteIcon" />
            <span>Delete</span>
          </button>
        )}
      </div>
    </div>
  );
}
