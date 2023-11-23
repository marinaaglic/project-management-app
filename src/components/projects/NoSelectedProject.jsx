import noProjectImg from "../../assets/no-projects.png";
import Button from "../reusable/Button.jsx";
import { useContext } from "react";
import { ProjectContext } from "../../store/project-context.jsx";

function NoSelectedProject() {
  const { showAddProjectForm } = useContext(ProjectContext);
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="No project image"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={showAddProjectForm}>Create new project</Button>
      </p>
    </div>
  );
}

export default NoSelectedProject;
