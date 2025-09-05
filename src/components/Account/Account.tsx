import { useState } from 'react';
import ArrowDownIcon from '../../assets/images/icons/ArrowDownIcon';
import './Account.css';
import useTheme from '../../Context/UseTheme';

const Account = () => {
  const [active, setActive] = useState<boolean>(false);
  const { dark } = useTheme();

  const handleClick = () => {
    setActive((prev) => !prev);
  };
  console.log(active);

  const userName: string = 'haydarov';
  return (
    <button
      className={`account ${dark ? 'active' : ''} ${active ? 'rotate' : ''}`}
      onClick={handleClick}
    >
      <span>{userName.slice(0, 1)}</span>
      {userName}
      <ArrowDownIcon color={dark ? '#f1f1f1' : '#1f1f1f'} />
    </button>
  );
};

export default Account;
