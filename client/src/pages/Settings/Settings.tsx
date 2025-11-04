import './Settings.css';
import user from '../../assets/images/nft3.png';

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
      </div>
    </article>
  );
};

export default Settings;
