import { useState } from 'react';
import ArrowDownIcon from '../../assets/images/icons/ArrowDownIcon';
import './Account.css';
import useTheme from '../../Context/UseTheme';
import { NavLink } from 'react-router-dom';
import UserIcon from '../../assets/images/icons/UserIcon';
import DashboardIcon from '../../assets/images/icons/DashboardIcon';
// import DocsIcon from '../../assets/images/icons/DocsIcon';
// import LogoutIcon from '../../assets/images/icons/LogoutIcon';
// import SettingsIcon from '../../assets/images/icons/SettingsIcon';

const Account = () => {
  const [active, setActive] = useState<boolean>(false);
  const { dark } = useTheme();

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  const userName: string = 'haydarov';
  return (
    <div className="account">
      <button
        className={`account ${dark ? 'active' : ''} ${active ? 'rotate' : ''}`}
        onClick={handleClick}
      >
        <span>{userName.slice(0, 1)}</span>
        {userName}
        <ArrowDownIcon color={dark ? '#f1f1f1' : '#1f1f1f'} />
      </button>
      {active && (
        <div
          className={`headersubmenu ${active ? 'active' : ''} ${dark ? 'dark' : ''}`}
        >
          <NavLink to="" className={dark ? 'dark' : ''}>
            Profile settings
          </NavLink>
          <NavLink to="" className={dark ? 'dark' : ''}>
            View profile
          </NavLink>
          <NavLink to="" className={dark ? 'dark' : ''}>
            <DashboardIcon color={dark ? 'white' : 'black'} />
            Dashboard
          </NavLink>
          <NavLink to="" className={dark ? 'dark' : ''}>
            <UserIcon size={18} color={dark ? 'white' : 'black'} />
            My account
          </NavLink>
          <NavLink to="" className={dark ? 'dark' : ''}>
            Logout
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Account;
