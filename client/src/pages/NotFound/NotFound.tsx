import { Link } from 'react-router-dom';
import './NotFound.css';
import BackIcon from '../../assets/images/icons/BackIcon';
const NotFound = () => {
  return (
    <article className="notFound">
      <div className="notFoundPage">
        <h1>404</h1>
        <p>Page not found :(</p>
        <Link to="/">
          <button className="notfoundBtn">
            <BackIcon />
            Back to home
          </button>
        </Link>
      </div>
    </article>
  );
};

export default NotFound;
