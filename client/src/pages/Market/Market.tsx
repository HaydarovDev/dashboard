import { useState } from 'react';
import Category from '../../assets/images/icons/Category';
import Collection from '../../assets/images/icons/Collection';
import DollarIcon from '../../assets/images/icons/DollarIcon';
import Etherium from '../../assets/images/icons/Etherium';
import SearchIcon from '../../assets/images/icons/SearchIcon';
import useTheme from '../../Context/UseTheme';
import { data } from '../../service/service';
import './Market.css';
import NotFountNft from '../../components/NotFoundNft/NotFountNft';
import { Link } from 'react-router-dom';

const Market = () => {
  const [searchNftData, setSearchNftData] = useState<string | null>();
  const { dark } = useTheme();

  const filteredNft = data.filter((nft) =>
    nft.title
      ?.toLocaleLowerCase()
      .includes(searchNftData?.toLocaleLowerCase() || '')
  );

  return (
    <article className="market">
      <h1>Discover NFTs</h1>
      <div className="searchCards">
        <div className="buttons">
          <button aria-label="category" className={dark ? 'active' : ''}>
            <Category size={20} />
            Category
          </button>
          <button aria-label="collection" className={dark ? 'active' : ''}>
            <Collection />
            Collection
          </button>
          <button aria-label="price" className={dark ? 'active' : ''}>
            <DollarIcon />
            Price
          </button>
        </div>
        <label
          htmlFor="searchNft"
          className={`searchNftcards ${dark ? 'dark' : ''}`}
        >
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
        {filteredNft.length === 0 ? (
          <NotFountNft />
        ) : (
          <div className="marketcollection">
            {filteredNft &&
              filteredNft?.map((card) => (
                <Link to={`card/${card.id}`} key={card.id}>
                  <div className={`cards ${dark ? 'dark' : ''}`}>
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
                            color={dark ? 'white' : 'black'}
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

export default Market;
