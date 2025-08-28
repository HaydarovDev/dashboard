import MoonIcon from '../../assets/images/icons/MoonIcon';
import SearchIcon from '../../assets/images/icons/SearchIcon';
import SunIcon from '../../assets/images/icons/SunIcon';
import useTheme from '../../Context/UseTheme';
import './HeaderDashboard.css';

const HeaderDashboard = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <header className="dashboard-header">
      <label htmlFor="">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </label>
      <button onClick={toggleTheme}>
        {dark ? (
          <MoonIcon color={dark ? 'white' : 'black'} />
        ) : (
          <SunIcon color={dark ? 'black' : 'white'} />
        )}
      </button>
      <h1>hello</h1>
    </header>
  );
};

export default HeaderDashboard;
