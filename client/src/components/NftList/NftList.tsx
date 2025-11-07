import { Link } from 'react-router-dom';
import './NftList.css';
import useTheme from '../../Context/UseTheme';
import { tableData } from '../../service/service';

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
            {tableData &&
              tableData.slice(0, 2).map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="collection">
                      <img src={item.img} loading="lazy" alt="avatar" />
                      <div>
                        <p className="name">{item.name}</p>
                        <p className="author">{item.author}</p>
                      </div>
                    </div>
                  </td>
                  <td>{item.volume}</td>
                  <td className="percent">{item.percent}</td>
                  <td>{item.floor}</td>
                  <td>{item.owners}</td>
                  <td>{item.items}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default NftList;
