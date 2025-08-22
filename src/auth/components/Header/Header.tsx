import Logo from "../../../assets/images/icons/Logo";
import useTheme from "../../../Context/UseTheme";
import "./Header.css";
const Header = () => {
  const { dark } = useTheme();
  return (
    <header>
      <a href="/" aria-label="company logo">
        <Logo color={dark ? "white" : "black"} /> 
      </a>
    </header>
  );
};

export default Header;
