import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFound">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="link404">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
