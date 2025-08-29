import { Link } from 'react-router-dom';
import BackIcon from '../../assets/images/icons/BackIcon';
import './NotFound.css';
const NotFound = () => {
  return (
    <article className="notFound">
      <div className="notFoundPage">
        <h1>404</h1>
        <p>Page not found :(</p>
        <Link to="/">
          <button>
            <BackIcon color="white" />
            Back to home
          </button>
        </Link>
      </div>
    </article>
  );
};

export default NotFound;
