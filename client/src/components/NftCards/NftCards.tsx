import { Link } from 'react-router-dom';
import Etherium from '../../assets/images/icons/Etherium';
import nft from '../../assets/images/nft.png';
import './NftCards.css';
import useTheme from '../../Context/UseTheme';

const NftCards = () => {
  const { dark } = useTheme();

  const data = [
    {
      id: 1,
      img: nft,
      title: 'Sun-Glass',
      description: 'Current bid',
      icon: <Etherium size={13} color={dark ? 'white' : 'black'} />,
      price: 1.75,
    },
    {
      id: 2,
      img: nft,
      title: 'Sun-Glass',
      description: 'Current bid',
      icon: <Etherium size={13} color={dark ? 'white' : 'black'} />,
      price: 1.75,
    },
    {
      id: 3,
      img: nft,
      title: 'Sun-Glass',
      description: 'Current bid',
      icon: <Etherium size={13} color={dark ? 'white' : 'black'} />,
      price: 1.75,
    },
    {
      id: 4,
      img: nft,
      title: 'NuEvey',
      description: 'Current bid',
      icon: <Etherium size={13} color={dark ? 'white' : 'black'} />,
      price: 1.25,
    },
  ];

  return (
    <article className="cards">
      <header>
        <h1>Trending</h1>
        <Link to="/">View More</Link>
      </header>
      <div className="cardContainer">
        {data &&
          data.map((card) => (
            <div className={`cards ${dark ? 'active' : ''}`} key={card.id}>
              <div className="img">
                <img src={card?.img} alt="not found" />
              </div>
              <h4>{card?.title}</h4>
              <div className="card_text">
                <div className="text">
                  <p>{card?.description}</p>
                  <span>
                    {card?.icon}
                    {card?.price}
                  </span>
                </div>
                <button>PLACE BID</button>
              </div>
            </div>
          ))}
      </div>
    </article>
  );
};

export default NftCards;
