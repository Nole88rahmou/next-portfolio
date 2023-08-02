import "./header.css";
import Link from "next/link";

function Header() {
  return (
    <header className="header">
      <div >
         <Link href= "/" className="logo"> Meradji Abderrahim</Link>
      </div>
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
