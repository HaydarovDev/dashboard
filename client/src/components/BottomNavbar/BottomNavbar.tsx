import { NavLink } from 'react-router-dom';
import './BottomNavbar.css';
import DashboardIcon from '../../assets/images/icons/DashboardIcon';
import MarketIcon from '../../assets/images/icons/MarketIcon';
import MessageIcon from '../../assets/images/icons/MessageIcon';
import WalletIcon from '../../assets/images/icons/WalletIcon';
import ActivityIcon from '../../assets/images/icons/ActivityIcon';
import useTheme from '../../Context/UseTheme';

const BottomNavbar = () => {
  const { dark } = useTheme();

  return (
    <nav className="bottomNav">
      <ul>
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
          <NavLink to={'activity'} className={dark ? 'dark' : ''}>
            {({ isActive }) => (
              <>
                <ActivityIcon color={isActive || dark ? 'white' : 'black'} />
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavbar;
