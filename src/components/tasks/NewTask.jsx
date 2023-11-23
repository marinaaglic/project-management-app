import { useState, useContext } from "react";
import { ProjectContext } from "../../store/project-context";

export default function NewTask() {
  const { addTask } = useContext(ProjectContext);
  const [enteredTask, setEnteredTask] = useState("");
  function changeHandler(event) {
    setEnteredTask(event.target.value);
  }
  function clickHandler() {
    addTask(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={changeHandler}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={clickHandler}
      >
        Add Task
      </button>
    </div>
  );
}
