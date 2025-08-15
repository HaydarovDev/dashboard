import "./Header.css";
import logo from "../../../assets/images/logo.svg";
const Header = () => {
  return (
    <header>
      <a href="/" aria-label="company logo">
        <img src={logo} alt="company logo" width={40} loading="lazy" />
      </a>
    </header>
  );
};

export default Header;
