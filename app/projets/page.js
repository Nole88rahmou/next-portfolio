import "./ProjectPage.css";
import Link from "next/link";

function page() {
  const projects = [
    {
      id: 1,
      title: "Jeu: Tic-Tac-Tao",
    },
    {
      id: 2,
      title: "Menu de restaurant",
    },
  ];

  return (
    <div className="ProjectPage">
      <h1 className="text">Mes Projects</h1>
      <nav>
        {projects.map((project, i) => (
          <Link
            href={`/projets/${project.id}`}
            className="project-link"
            key={i}
          >
            {project.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default page;
