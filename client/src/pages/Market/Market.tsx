import Etherium from '../../assets/images/icons/Etherium';
import useTheme from '../../Context/UseTheme';
import { data } from '../../service/service';
import './Market.css';

const Market = () => {
  const { dark } = useTheme();

  return (
    <article className="market">
      <h1>Discover NFTs</h1>
      <div>
        <button>category</button>
        <button>collection</button>
        <button>price</button>
      </div>
      <div className="marketcollection">
        {data &&
          data?.map((card) => (
            <div className={`cards ${dark ? 'dark' : ''}`} key={card.id}>
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
          ))}
      </div>
    </article>
  );
};

export default Market;
