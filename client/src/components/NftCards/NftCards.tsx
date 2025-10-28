import { Link } from 'react-router-dom';
import Etherium from '../../assets/images/icons/Etherium';
import './NftCards.css';
import useTheme from '../../Context/UseTheme';
import { data } from '../../service/service';

const NftCards = () => {
  const { dark } = useTheme();

  return (
    <article className="cards">
      <header>
        <h1>Trending</h1>
        <Link to="/">View More</Link>
      </header>
      <div className="cardContainer">
        {data &&
          data.slice(0, 4).map((card) => (
            <Link to={`/market/card/${card.id}`} key={card.id}>
              <div className={`cards ${dark ? 'active' : ''}`} key={card.id}>
                <div className="img">
                  <img src={card?.img} alt="not found" />
                </div>
                <h4>{card?.title}</h4>
                <div className="card_text">
                  <div className="text">
                    <p>{card?.description}</p>
                    <span>
                      <Etherium size={13} color={dark ? 'white' : 'black'} />
                      {card?.price}
                    </span>
                  </div>
                  <button>PLACE BID</button>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </article>
  );
};

export default NftCards;
