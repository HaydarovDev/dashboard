import MoreIcon from '../../assets/images/icons/MoreIcon';
import useTheme from '../../Context/UseTheme';
import { bestSellers } from '../../service/service';
import './BestSellers.css';

const BestSellers = () => {
  const { dark } = useTheme();

  return (
    <div className={`bestSellersList ${dark ? 'active' : ''}`}>
      <header>
        <h3>Best sellers</h3>
        <button>
          <MoreIcon />
        </button>
      </header>
      <div className="users_content">
        {bestSellers &&
          bestSellers.map((user) => {
            return (
              <div className="user_id" key={user.id}>
                <div className="user_text">
                  <img src={user.avatar} alt="users" />
                  <p>
                    {user.userName}
                    <span>{user.userMail}</span>
                  </p>
                  <p>
                    <b></b>
                  </p>
                </div>
                <button className={`${dark ? 'active' : ''}`}>Follow</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BestSellers;
