/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./useReduce.js";
import { types } from "./actionTypes.js";

const initValue = JSON.parse(localStorage.getItem("initValue")) ?? {};
export const GlobalContext = createContext(initValue);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initValue);

  function addTask(task) {
    dispatch({
      type: types.addTask,
      payload: task,
    });
  }

  function deleteTask(id) {
    dispatch({
      type: types.addTask,
      payload: id,
    });
  }

  useEffect(() => {
    localStorage.setItem("initValue", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        deleteTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
