import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/home" className="siteName">
        <img src={process.env.PUBLIC_URL + "images/logo.png"} alt="logo"></img>
      </Link>
      <ul>
        <CustomLink to="/home">Accueil</CustomLink>
        <CustomLink to="/about">À propos</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
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
