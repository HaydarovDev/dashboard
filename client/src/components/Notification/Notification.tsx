import { useState } from 'react';
import NotificationIcon from '../../assets/images/icons/NotificationIcon';
import useTheme from '../../Context/UseTheme';
import './Notification.css';
import type { NotificationData } from '../../types/iconTypes';

const Notification = () => {
  const { dark } = useTheme();
  const [active, setActive] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, _] = useState<NotificationData[]>([]);

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
        <>
          <div
            className={`notificationItems ${dark ? 'dark' : ''} ${active ? 'active' : ''}`}
          >
            <h4>Notification</h4>
            <div>
              {data && data?.length === 0 ? (
                <p style={{ fontSize: '15px', textAlign: 'center' }}>
                  No data found (
                </p>
              ) : (
                data?.map((message) => {
                  return (
                    <div key={message.id}>
                      <h4>{message.title}</h4>
                      <p>{message.message}</p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;
