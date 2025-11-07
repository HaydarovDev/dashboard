import './Bids.css';

import Category from '../../assets/images/icons/Category';
import Collection from '../../assets/images/icons/Collection';
import DollarIcon from '../../assets/images/icons/DollarIcon';
import SearchIcon from '../../assets/images/icons/SearchIcon';
import { useState } from 'react';
import Etherium from '../../assets/images/icons/Etherium';
import NotFountNft from '../NotFoundNft/NotFountNft';
import { data } from '../../service/service';
import { Link } from 'react-router-dom';

const Bids = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchNftData, setSearchNftData] = useState<string | null>('');

  return (
    <article className="activities">
      <h1>Active Bids</h1>
      <div className="searchCards">
        <div className="buttons">
          <button aria-label="category">
            <Category size={20} />
            Category
          </button>
          <button aria-label="collection">
            <Collection />
            Collection
          </button>
          <button aria-label="price">
            <DollarIcon />
            Price
          </button>
        </div>
        <label htmlFor="searchNft" className={`searchNftcards `}>
          <SearchIcon />
          <input
            className="searchNftInput"
            type="text"
            placeholder="Search nft..."
            id="searchNft"
            onChange={(e) => setSearchNftData(e.target.value)}
          />
        </label>
      </div>
      <div>
        {data?.length === 0 ? (
          <NotFountNft />
        ) : (
          <div className="marketcollection">
            {data &&
              data?.map((card) => (
                <Link to={`/market/card/${card.id}`} key={card.id}>
                  <div className={`cards`}>
                    <div className="img">
                      <img src={card?.img} alt="not found" />
                    </div>
                    <h4>{card?.title}</h4>
                    <div className="card_text">
                      <div className="text">
                        <p>{card?.description}</p>
                        <span>
                          <Etherium
                            size={13}
                            // color={dark ? 'white' : 'black'}
                          />
                          {card?.price}
                        </span>
                      </div>
                      <button>PLACE BID</button>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default Bids;
