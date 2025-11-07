import { useEffect, useState } from 'react';
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
  const [active, setActive] = useState<boolean>(false);
  const { dark } = useTheme();

  useEffect(() => {
    if (active) localStorage.setItem('active', 'active');
    const saved = localStorage.getItem('active');
    if (saved === 'active') setActive(true);
  }, [active]);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <aside className={dark ? 'active' : ''}>
      <header>
        <Link to={'/'} className={dark ? 'active' : 'white'}>
          <Logo color={dark ? 'white' : 'black'} />
          DiveSea
        </Link>
        <ul>
          <li>
            <NavLink to={'/'} className={dark ? 'dark' : ''}>
              {({ isActive }) => (
                <>
                  <DashboardIcon color={isActive || dark ? 'white' : 'black'} />
                  Dashboard
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={'market'} className={dark ? 'dark' : ''}>
              {({ isActive }) => (
                <>
                  <MarketIcon color={isActive || dark ? 'white' : 'black'} />
                  Market
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={'message'} className={dark ? 'dark' : ''}>
              {({ isActive }) => (
                <>
                  <MessageIcon color={isActive || dark ? 'white' : 'black'} />
                  Messages
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={'wallet'} className={dark ? 'dark' : ''}>
              {({ isActive }) => (
                <>
                  <WalletIcon color={isActive || dark ? 'white' : 'black'} />
                  My Wallets
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'activity/activities'}
              className={`activeBids ${dark ? 'dark' : ''}`}
              onClick={() => handleClick()}
            >
              {({ isActive }) => (
                <>
                  <ActivityIcon color={isActive || dark ? 'white' : 'black'} />
                  Activity
                </>
              )}
            </NavLink>

            {active && (
              <div className={`activityBids ${active ? 'active' : ''}`}>
                <NavLink to="activity/activities">Active Bids</NavLink>
                <NavLink to="activity/collection">
                  {/* {({ isActive }) => {
                    return isActive ? setActive(true) : setActive(false);
                  }} */}
                  Collection
                </NavLink>
              </div>
            )}
          </li>
        </ul>
      </header>
      <footer>
        <ul>
          <li>
            <NavLink to={'help'} className={dark ? 'dark' : ''}>
              {({ isActive }) => (
                <>
                  <HelpIcon color={isActive || dark ? 'white' : 'black'} />
                  Get Help
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={'settings'} className={dark ? 'dark' : ''}>
              {({ isActive }) => (
                <>
                  <SettingsIcon color={isActive || dark ? 'white' : 'black'} />
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
