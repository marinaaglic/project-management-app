import Button from "../reusable/Button.jsx";
import { useContext } from "react";
import { ProjectContext } from "../../store/project-context.jsx";

function Sidebar() {
  const { showAddProjectForm, selectedProject, projectState } =
    useContext(ProjectContext);
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={showAddProjectForm}>+ Add Project</Button>
      </div>
      <div>
        <ul className="mt-8">
          {projectState.projects.map((project) => {
            let cssClasses =
              "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";
            if (project.id === projectState.selectedProjectId) {
              cssClasses += " bg-stone-800 text-stone-200";
            } else {
              cssClasses += " text-stone-400";
            }
            return (
              <li key={project.id}>
                <button
                  onClick={() => selectedProject(project.id)}
                  className={cssClasses}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
