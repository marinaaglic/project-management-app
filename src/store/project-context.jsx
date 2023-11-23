import { createContext, useReducer } from "react";

const initialState = {
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
};
//CREATING CONTEXT
export const ProjectContext = createContext();

function projectReducer(state, action) {
  if (action.type === "ADD_PROJECT") {
    return {
      ...state,
      selectedProjectId: undefined,
      projects: [
        ...state.projects,
        {
          ...action.payload.projectData,
          id: action.payload.projectId,
        },
      ],
    };
  }
  if (action.type === "DELETE_PROJECT") {
    return {
      ...state,
      selectedProjectId: undefined,
      projects: state.projects.filter(
        (project) => project.id !== state.selectedProjectId
      ),
    };
  }
  if (action.type === "SELECT_PROJECT") {
    return {
      ...state,
      selectedProjectId: action.payload,
    };
  }
  if (action.type === "SHOW_ADD_FORM") {
    return {
      ...state,
      selectedProjectId: null,
    };
  }
  if (action.type === "CANCEL_FORM") {
    return {
      ...state,
      selectedProjectId: undefined,
    };
  }
  if (action.type === "ADD_TASK") {
    return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          text: action.payload.text,
          projectId: action.payload.projectId,
          id: action.payload.taskId,
        },
      ],
    };
  }
  if (action.type === "DELETE_TASK") {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload),
    };
  }
  return state;
}

//USEREDUCER
export default function ProjectContextProvider({ children }) {
  const [projectState, projectDispatch] = useReducer(
    projectReducer,
    initialState
  );

  function addHandler(projectData) {
    const projectId = Math.random();
    projectDispatch({
      type: "ADD_PROJECT",
      payload: {
        projectData,
        projectId,
      },
    });
  }

  function deleteHandler() {
    projectDispatch({
      type: "DELETE_PROJECT",
    });
  }

  function selectedProjectHandler(id) {
    projectDispatch({
      type: "SELECT_PROJECT",
      payload: id,
    });
  }

  function showAddProjectFrom() {
    projectDispatch({
      type: "SHOW_ADD_FORM",
    });
  }

  function cancelProjectForm() {
    projectDispatch({
      type: "CANCEL_FORM",
    });
  }

  function addTaskHandler(text) {
    const taskId = Math.random();
    const projectId = projectState.selectedProjectId;
    projectDispatch({
      type: "ADD_TASK",
      payload: {
        text,
        taskId,
        projectId,
      },
    });
  }

  function deleteTaskHandler(id) {
    projectDispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }

  const ctxValue = {
    projectState,
    addProject: addHandler,
    deleteProject: deleteHandler,
    selectedProject: selectedProjectHandler,
    showAddProjectForm: showAddProjectFrom,
    cancelProjectForm: cancelProjectForm,
    addTask: addTaskHandler,
    deleteTask: deleteTaskHandler,
  };

  return (
    <ProjectContext.Provider value={ctxValue}>
      {children}
    </ProjectContext.Provider>
  );
}
