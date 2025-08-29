import MoonIcon from '../../assets/images/icons/MoonIcon';
import SunIcon from '../../assets/images/icons/SunIcon';
import useTheme from '../../Context/UseTheme';
import './ThemeSwitch.css';
const ThemeSwitch = () => {
  const { dark, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {dark ? (
        <MoonIcon color={dark ? 'white' : 'black'} />
      ) : (
        <SunIcon color={dark ? 'black' : 'white'} />
      )}
    </button>
  );
};

export default ThemeSwitch;
