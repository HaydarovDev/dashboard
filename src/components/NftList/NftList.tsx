import { Link } from 'react-router-dom';
import './NftList.css';
import useTheme from '../../Context/UseTheme';
const NftList = () => {
  const { dark } = useTheme();
  return (
    <article className={dark ? 'dark' : ''}>
      <header>
        <h1>Top Collection</h1>
        <Link to="/" title="More">
          View More
        </Link>
      </header>
      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Collection</th>
              <th>Volume</th>
              <th>24h %</th>
              <th>Floor Price</th>
              <th>Owners</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="collection">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFBsXu_2-fEkO1O0VjkyACrjkySMbSlupyAA&s"
                    alt="avatar"
                  />
                  <div>
                    <p className="name">Alex Ca.</p>
                    <p className="author">By Alex</p>
                  </div>
                </div>
              </td>
              <td>8,456</td>
              <td className="percent">+27.78%</td>
              <td>3,5</td>
              <td>2,2K</td>
              <td>500</td>
            </tr>

            <tr>
              <td>
                <div className="collection">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFBsXu_2-fEkO1O0VjkyACrjkySMbSlupyAA&s"
                    alt="avatar"
                  />
                  <div>
                    <p className="name">John Doe</p>
                    <p className="author">By John</p>
                  </div>
                </div>
              </td>
              <td>4,780</td>
              <td className="percent">+19.22%</td>
              <td>7,9</td>
              <td>3,4K</td>
              <td>900</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default NftList;
