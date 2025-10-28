import SearchIcon from '../../assets/images/icons/SearchIcon';
import './Message.css';

const Message = () => {
  return (
    <article className="chats">
      <div className="users">
        <label htmlFor="search" className="">
          <SearchIcon />
          <input type="text" placeholder="Search..." id="search" />
        </label>
        <div></div>
      </div>

      <section></section>
    </article>
  );
};

export default Message;
