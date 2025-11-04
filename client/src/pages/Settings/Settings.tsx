import './Settings.css';
import user from '../../assets/images/nft3.png';
import EditIcon from '../../assets/images/icons/EditIcon';

const Settings = () => {
  const username: string = 'Joseph Ren';
  return (
    <article className="settings">
      <div>
        <h2>Personal Informations</h2>
        <div className="userProfile">
          <img src={user} alt="" />
          <div>
            <h1>{username}</h1>
            <div className="buttons">
              <button>Upload New picture</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
        <form action="" className="formValidation">
          <label htmlFor="name">
            <input
              type="text"
              placeholder="Asadbek Haydarov"
              id="name"
              required
            />
            <EditIcon />
          </label>
          <label htmlFor="username">
            <input
              type="text"
              placeholder="haydarov_dev"
              id="username"
              required
            />
            <EditIcon />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              placeholder="asadbek.haydarov.code@gmail.com"
              id="email"
              required
            />
            <EditIcon />
          </label>
          <label htmlFor="address">
            <input type="text" placeholder="Navoi" id="address" required />
            <EditIcon />
          </label>
          <button>Update</button>
        </form>
      </div>
    </article>
  );
};

export default Settings;
