import { NavLink } from 'react-router-dom';
import './BottomNavbar.css';
import DashboardIcon from '../../assets/images/icons/DashboardIcon';
import MarketIcon from '../../assets/images/icons/MarketIcon';
import MessageIcon from '../../assets/images/icons/MessageIcon';
import WalletIcon from '../../assets/images/icons/WalletIcon';
import useTheme from '../../Context/UseTheme';
import UserIcon from '../../assets/images/icons/UserIcon';

const BottomNavbar = () => {
  const { dark } = useTheme();

  return (
    <nav className="bottomNav">
      <ul className={dark ? 'active' : ''}>
        <li>
          <NavLink to={'/'} className={dark ? 'dark' : ''}>
            {({ isActive }) => (
              <>
                <DashboardIcon color={isActive || dark ? 'white' : 'black'} />
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={'market'} className={dark ? 'dark' : ''}>
            {({ isActive }) => (
              <>
                <MarketIcon color={isActive || dark ? 'white' : 'black'} />
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={'message'} className={dark ? 'dark' : ''}>
            {({ isActive }) => (
              <>
                <MessageIcon color={isActive || dark ? 'white' : 'black'} />
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={'wallet'} className={dark ? 'dark' : ''}>
            {({ isActive }) => (
              <>
                <WalletIcon color={isActive || dark ? 'white' : 'black'} />
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={'account'} className={dark ? 'dark' : ''}>
            {({ isActive }) => (
              <>
                <UserIcon
                  color={isActive || dark ? 'white' : 'black'}
                  size={20}
                />
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavbar;
