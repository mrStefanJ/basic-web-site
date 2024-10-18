import { useNavigate, useParams } from "react-router-dom";
import { data } from "../../data/data";
import "./style.css";

const ProjectDetails = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const projectId = id ? parseInt(id) : NaN;

  if (isNaN(projectId)) {
    return <p>Invalid Project ID</p>; // Handle invalid or missing id
  }

  const project = data.find((proj) => proj.id === projectId);

  if (!project) {
    return <p>Project not found!</p>;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="project">
      <button onClick={handleGoBack}>Go Back</button>
      <div className="project__details">
        <h1 className="title">{project?.title}</h1>
        <p className="description">{project?.description}</p>
      </div>
    </section>
  );
};

export default ProjectDetails;
