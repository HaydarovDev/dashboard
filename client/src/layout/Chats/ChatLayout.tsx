import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import './ChatLayout.css';
import Loader from '../../components/Loader/Loader';
const UsersList = lazy(() => import('../../components/UsersList/UsersList'));

const ChatLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
};

export default ChatLayout;
