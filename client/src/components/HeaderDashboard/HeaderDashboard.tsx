// import NotificationIcon from '../../assets/images/icons/NotificationIcon';
import SearchIcon from '../../assets/images/icons/SearchIcon';
import useTheme from '../../Context/UseTheme';
import Account from '../Account/Account';
import Notification from '../Notification/Notification';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import './HeaderDashboard.css';

const HeaderDashboard = () => {
  const { dark } = useTheme();
  return (
    <header className={`dashboard-header ${dark ? 'dark' : ''}`}>
      <label
        htmlFor="searchId"
        className={`${dark ? 'dark' : ''} headerSaerch`}
      >
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          id="searchId"
          className={`headerInput ${dark ? 'dark' : ''}`}
        />
      </label>
      <div className="account-details">
        <Notification />
        <ThemeSwitch />
        <Account />
      </div>
    </header>
  );
};

export default HeaderDashboard;
