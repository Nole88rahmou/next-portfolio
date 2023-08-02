import "./header.css";
import Link from "next/link";

function Header() {
  return (
    <header className="header">
      <div className="logo">Meradji Abderrahim</div>
      <nav className="nav-links">
        <Link href="/">Accueil</Link>
        <Link href="/projets">Projets</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/reviews"> Témoignages</Link>
      </nav>
    </header>
  );
}

export default Header;
