import "./Sidebar.css";
import Logo from "../../../assets/images/icons/Logo";
import { Link, NavLink } from "react-router-dom";
import DashboardIcon from "../../../assets/images/icons/DashboardIcon";
import MarketIcon from "../../../assets/images/icons/MarketIcon";
import MessageIcon from "../../../assets/images/icons/MessageIcon";
import WalletIcon from "../../../assets/images/icons/WalletIcon";
import ActivityIcon from "../../../assets/images/icons/ActivityIcon";
import HelpIcon from "../../../assets/images/icons/HelpIcon";
import SettingsIcon from "../../../assets/images/icons/SettingsIcon";

const Sidebar = () => {
  return (
    <aside>
      <header>
        <Link to={"/"}>
          <Logo />
          DiveSea
        </Link>
        <ul>
          <li>
            <NavLink to={"/"}>
              <DashboardIcon />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"market"}>
              <MarketIcon />
              Market
            </NavLink>
          </li>
          <li>
            <NavLink to={"message"}>
              <MessageIcon />
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink to={"mywallets"}>
              <WalletIcon />
              My Wallets
            </NavLink>
          </li>
          <li>
            <NavLink to={"activity"}>
              <ActivityIcon />
              Activity
            </NavLink>
          </li>
        </ul>
      </header>
      <footer>
        <ul>
          <li>
            <NavLink to={"help"}>
              <HelpIcon />
              Get Help
            </NavLink>
          </li>
          <li>
            <NavLink to={"settings"}>
              <SettingsIcon />
              Settings
            </NavLink>
          </li>
        </ul>
      </footer>
    </aside>
  );
};

export default Sidebar;
