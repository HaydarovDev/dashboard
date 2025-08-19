import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Link to={"/privacy"}>Privacy Policy</Link>
      <p>© Copyright 2025</p>
    </footer>
  );
};

export default Footer;
