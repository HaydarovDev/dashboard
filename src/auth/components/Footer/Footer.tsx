import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Link to={"/privacy"}>Privacy Policy</Link>
      <p>Copyright 2022</p>
    </footer>
  );
};

export default Footer;
