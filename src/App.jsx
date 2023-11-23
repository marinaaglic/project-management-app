import { useContext } from "react";
import NewProject from "./components/projects/NewProject.jsx";
import NoSelectedProject from "./components/projects/NoSelectedProject.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import SelectedProject from "./components/projects/SelectedProject.jsx";
import { ProjectContext } from "./store/project-context.jsx";

function App() {
  const { projectState } = useContext(ProjectContext);

  let content = <SelectedProject />;
  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoSelectedProject />;
  }

  return (
    <main className="h-screen my-8 flex gap-8 ">
      <Sidebar />
      {content}
    </main>
  );
}

export default App;
