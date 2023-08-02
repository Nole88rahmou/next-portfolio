import "./Project.css";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Jeu: Tic-Tac-Tao",
    description:
      "Ceci est une description du Projet 1: Le jeu TicTacToe, aussi connu sous le nom de Morpion, est un jeu de société informel pour deux joueurs, qui peut être facilement joué sur une feuille de papier. Le jeu se joue sur une grille de 3x3, où les joueurs prennent des tours pour placer un marqueur (habituellement une croix ou un cercle) dans une cellule vide de la grille. Le but du jeu est d'être le premier à obtenir trois de ses propres marqueurs en ligne, que ce soit horizontalement, verticalement ou en diagonale. En termes de développement avec React, le jeu TicTacToe est un bon choix pour s'entraîner à utiliser l'état et les props de React, ainsi que pour comprendre comment le concept de 'lifting state up' fonctionne. Le jeu implique un certain nombre de composants interactifs, y compris les cellules individuelles de la grille de jeu, ainsi qu'un composant de tableau de bord pour afficher le joueur actuel et le gagnant du jeu.",
    imgSrc: "/pictures/project1.jpg",
    techList: ["React", "JavaScript", "CSS"],
    githubLink: "https://github.com/username/projet1",
  },
  {
    id: 2,
    title: "Menu de restaurant",
    description:
      "Ceci est une description du Projet 2: La création d'une page web pour un menu de restaurant est un excellent moyen de mettre en pratique et de démontrer vos compétences en React.js. Le projet consisterait à développer une application web simple, mais attrayante et fonctionnelle, qui affiche les différents plats proposés par le restaurant.",
    imgSrc: "/pictures/project2.jpg",
    techList: ["React", "JavaScript", "CSS"],
    githubLink: "https://github.com/username/projet2",
  },
];

function page({ params: { id } }) {
  const project = projects.find((project) => project.id === Number(id));
  return (
    <div className="project">
      <div className="project-content">
        <img
          src={project.imgSrc}
          alt={project.title}
          className="project-image"
        />
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>
        <ul className="project-tech-list">
          {project.techList.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <Link href={project.githubLink} className="project-link">
          Code Source (Lien vers le github)
        </Link>
      </div>
    </div>
  );
}

export default page;
