import SearchIcon from '../../assets/images/icons/SearchIcon';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import './HeaderDashboard.css';

const HeaderDashboard = () => {
  return (
    <header className="dashboard-header">
      <label htmlFor="searchId">
        <SearchIcon />
        <input type="text" placeholder="Search" id="searchId" />
      </label>
      <ThemeSwitch />
    </header>
  );
};

export default HeaderDashboard;
