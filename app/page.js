import "./HomePage.css";

export default function Home() {
  return (
    <div className="home-page">
      <img className="profile-pic" src="/pictures/profile.jpg" alt="Profile" />
      <div className="intro">Bonjour !!!</div>
      <div className="skills">
        Je suis un passionné des mathématiques avec un vif intérêt pour le
        développement web. J'ai un parcours académique solide en mathématiques
        qui m'a permis d'acquérir des compétences en résolution de problèmes, en
        logique et en pensée analytique. Ces compétences se sont révélées
        extrêmement bénéfiques lors de mon immersion dans le monde du
        développement web. J'ai acquis des compétences techniques solides dans
        plusieurs langages de programmation, dont JavaScript, HTML, CSS et la
        bibliothèque React.js. J'ai développé une gamme de projets qui
        illustrent mes compétences techniques, ma créativité et ma capacité à
        travailler en équipe.
      </div>
    </div>
  );
}
