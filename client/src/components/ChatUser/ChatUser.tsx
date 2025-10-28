import { useParams } from 'react-router-dom';
import './ChatUser.css';
import { users } from '../../service/service';
import VideoIcon from '../../assets/images/icons/VideoIcon';
import PhoneIcon from '../../assets/images/icons/PhoneIcon';
import DotsMoreIcon from '../../assets/images/icons/DotsMoreIcon';

const ChatUser = () => {
  const { username } = useParams();

  const userDetails = users.find((user) => user.username === username);
  console.log(userDetails);

  return (
    <article className="chat">
      <header>
        <div className="user">
          {userDetails?.image === '' ? (
            <span>{userDetails?.username.slice(0, 1)}</span>
          ) : (
            <img src={userDetails?.image} alt="avatar" />
          )}
          <div>
            <h4>{userDetails?.username}</h4>
            <p>Online</p>
          </div>
        </div>
        <div className="icons">
          <button aria-label="videochat">
            <VideoIcon />
          </button>
          <button aria-label="call">
            <PhoneIcon />
          </button>
          <button aria-label="moresettings">
            <DotsMoreIcon />
          </button>
        </div>
      </header>
    </article>
  );
};

export default ChatUser;
