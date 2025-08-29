import './Sidebar.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/icons/Logo';
import useTheme from '../../Context/UseTheme';
import DashboardIcon from '../../assets/images/icons/DashboardIcon';
import MarketIcon from '../../assets/images/icons/MarketIcon';
import MessageIcon from '../../assets/images/icons/MessageIcon';
import WalletIcon from '../../assets/images/icons/WalletIcon';
import ActivityIcon from '../../assets/images/icons/ActivityIcon';
import HelpIcon from '../../assets/images/icons/HelpIcon';
import SettingsIcon from '../../assets/images/icons/SettingsIcon';

const Sidebar = () => {
  const { dark } = useTheme();

  return (
    <aside className={dark ? 'active' : ''}>
      <header>
        <Link to={'/'} className={dark ? 'active' : 'white'}>
          <Logo color={dark ? 'white' : 'black'} />
          DiveSea
        </Link>
        <ul>
          <li>
            <NavLink to={'/'} className={dark ? '' : ''}>
              {({ isActive }) => (
                <>
                  <DashboardIcon color={isActive ? 'black' : 'black'} />
                  Dashboard
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={'market'}>
              {({ isActive }) => (
                <>
                  <MarketIcon color={isActive ? 'black' : 'black'} />
                  Market
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={'message'}>
              {({ isActive }) => (
                <>
                  <MessageIcon color={isActive ? 'black' : 'black'} />
                  Messages
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={'wallet'}>
              {({ isActive }) => (
                <>
                  <WalletIcon color={isActive ? 'black' : 'black'} />
                  My Wallets
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={'activity'}>
              {({ isActive }) => (
                <>
                  <ActivityIcon color={isActive ? 'black' : 'black'} />
                  Activity
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </header>
      <footer>
        <ul>
          <li>
            <NavLink to={'help'}>
              {({ isActive }) => (
                <>
                  <HelpIcon color={isActive ? 'black' : 'black'} />
                  Get Help
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={'settings'}>
              {({ isActive }) => (
                <>
                  <SettingsIcon color={isActive ? 'black' : 'black'} />
                  Settings
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </footer>
    </aside>
  );
};

export default Sidebar;
