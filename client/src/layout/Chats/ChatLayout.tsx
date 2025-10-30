import { Outlet } from 'react-router-dom';
import UsersList from '../../components/UsersList/UsersList';
import './ChatLayout.css';

const ChatLayout = () => {
  return (
    <article className="chats">
      <div className="users">
        <h2>Users</h2>
        {/* <label htmlFor="search" className="">
          <SearchIcon />
          <input type="text" placeholder="Search..." id="search" />
        </label> */}
        <UsersList />
      </div>

      <Outlet />
    </article>
  );
};

export default ChatLayout;
