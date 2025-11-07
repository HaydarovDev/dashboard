import { useState } from 'react';
import FilterIcon from '../../assets/images/icons/FilterIcon';
import SearchIcon from '../../assets/images/icons/SearchIcon';
import { tableData } from '../../service/service';
import './Collection.css';

const Collection = () => {
  const [value, setValue] = useState<string | null>('');

  const handleSearch = () => {
    
  }

  return (
    <article className="collection">
      <header>
        <label htmlFor="search">
          <SearchIcon />
          <input type="text" placeholder="Search" id="search" />
        </label>

        <div className="buttons">
          <button>+ Add new</button>
          <button>
            <FilterIcon />
            Filters
          </button>
        </div>
      </header>

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
            tableData.map((item) => (
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
    </article>
  );
};

export default Collection;
