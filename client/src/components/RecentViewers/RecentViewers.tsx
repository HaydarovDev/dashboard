import Etherium from '../../assets/images/icons/Etherium';
import MoreIcon from '../../assets/images/icons/MoreIcon';
import useTheme from '../../Context/UseTheme';
import { viewer_list } from '../../service/service';
import './RecentViewers.css';

const RecentViewers = () => {
  const { dark } = useTheme();

  return (
    <div className={`recents ${dark ? 'active' : ''}`}>
      <header>
        <h3>Recent Viewed</h3>
        <button aria-label="for more">
          <MoreIcon />
        </button>
      </header>

      <div className="users_content">
        <div className="viewers_list">
          {viewer_list &&
            viewer_list.slice(0, 3).map((user) => (
              <div className="view_list" key={user.id}>
                <div className="view_img">
                  <div className="img_wrapper">
                    <img src={user.img} alt={user.userName} />
                  </div>
                  <div className="view_text">
                    <p>{user.Name}</p>
                    <span>{user.userName}</span>
                  </div>
                </div>

                <div className="text_list">
                  <p>
                    <Etherium color={dark ? 'white' : 'black'} size={14} />
                    {user.list_price.toLocaleString()}
                  </p>
                  <span>{user.benefit}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecentViewers;
