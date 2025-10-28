import { NavLink } from 'react-router-dom';
import { users } from '../../service/service';

const UsersList = () => {
  const handleUserAvatar = async (username: string) => {
    return username.slice(0, 1);
  };

  return (
    <div className="userlist">
      {users &&
        users.map((user) => {
          return (
            <NavLink to={user.username} key={user.id}>
              <div className="userdetails">
                {user.image ? (
                  <img src={user.image} alt="userImage" />
                ) : (
                  <span>{handleUserAvatar(user.username)}</span>
                )}
                {user.username}
              </div>
            </NavLink>
          );
        })}
    </div>
  );
};

export default UsersList;
