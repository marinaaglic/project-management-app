import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProjectContextProvider from "./store/project-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProjectContextProvider>
    <App />
  </ProjectContextProvider>
);
