import { useState } from 'react';
import ArrowDownIcon from '../../assets/images/icons/ArrowDownIcon';
import './Account.css';
import useTheme from '../../Context/UseTheme';
import { NavLink } from 'react-router-dom';

const Account = () => {
  const [active, setActive] = useState<boolean>(false);
  const { dark } = useTheme();

  const handleClick = () => {
    setActive((prev) => !prev);
  };
  console.log(active);

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
        <div className={`headersubmenu ${active ? 'active' : ''}`}>
          <NavLink to="">View my page</NavLink>
          <NavLink to="">Dashboard</NavLink>
          <NavLink to="">My account</NavLink>
          <NavLink to="">Logout</NavLink>
        </div>
      )}
    </div>
  );
};

export default Account;
