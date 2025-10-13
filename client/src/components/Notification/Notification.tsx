import { useState } from 'react';
import NotificationIcon from '../../assets/images/icons/NotificationIcon';
import useTheme from '../../Context/UseTheme';
import './Notification.css';

const Notification = () => {
  const { dark } = useTheme();
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="notification">
      <button
        className={`notificationBtn ${dark ? 'dark' : ''}`}
        aria-label="notification"
        onClick={() => handleClick()}
      >
        <NotificationIcon color={dark ? '#f1f1f1' : '#1f1f1f'} />
      </button>

      {active && (
        <div
          className={`notificationItems ${dark ? 'dark' : ''} ${active ? 'active' : ''}`}
        >
          Notification
        </div>
      )}
    </div>
  );
};

export default Notification;
