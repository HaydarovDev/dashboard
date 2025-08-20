import Logo from "../../../assets/images/icons/Logo";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <a href="/" aria-label="company logo">
        <Logo />
      </a>
    </header>
  );
};

export default Header;
