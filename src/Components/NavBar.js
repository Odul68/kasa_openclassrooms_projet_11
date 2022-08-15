import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/404" className="siteName">
        <img src={process.env.PUBLIC_URL + "images/logo.png"} alt="logo"></img>
      </Link>
      <ul>
        <CustomLink to="/Home">Accueil</CustomLink>
        <CustomLink to="/About">À propos</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  // Nav stays on each page with active links
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
