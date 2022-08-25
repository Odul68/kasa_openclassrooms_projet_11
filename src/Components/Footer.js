import { Link } from "react-router-dom";
import footerLogo from "../icons/footerLogo.png";

export default function Footer() {
  return (
    <footer>
      <Link to="/" className="siteName">
        <img src={footerLogo} alt="logo" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
