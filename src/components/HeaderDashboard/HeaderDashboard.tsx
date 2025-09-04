import SearchIcon from '../../assets/images/icons/SearchIcon';
import useTheme from '../../Context/UseTheme';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import './HeaderDashboard.css';

const HeaderDashboard = () => {
  const { dark } = useTheme();
  return (
    <header className={`dashboard-header ${dark ? 'dark' : ''}`}>
      <label htmlFor="searchId" className={`${dark ? 'dark' : ''}`}>
        <SearchIcon />
        <input type="text" placeholder="Search" id="searchId" />
      </label>
      <ThemeSwitch />
    </header>
  );
};

export default HeaderDashboard;
