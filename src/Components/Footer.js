import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Link to="/Home" className="siteName">
        <img
          src={process.env.PUBLIC_URL + "images/footerLogo.png"}
          alt="logo"
        />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
