import { Link, useNavigate, useParams } from 'react-router-dom';
import BackIcon from '../../assets/images/icons/BackIcon';
import './CardDetails.css';
import { data } from '../../service/service';
import Etherium from '../../assets/images/icons/Etherium';
import ShoppingIcon from '../../assets/images/icons/ShoppingIcon';

const CardDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const cardDetails = data.find((details) => details?.id == id);

  return (
    <article className="cardDetails">
      <header>
        <h3 onClick={() => navigate(-1)}>
          <BackIcon /> Product Detail
        </h3>
      </header>
      <div className="product">
        <img
          width={400}
          src={cardDetails?.img}
          alt="nft image"
          loading="lazy"
        />
        <div className="details">
          <h1>{cardDetails?.title}</h1>
          <p>{cardDetails?.about}</p>
          <div className="users">
            <div className="creator">
              <img src={cardDetails?.img} alt="nft image" loading="lazy" />
              <div>
                <p>Created by</p>
                <h4>{cardDetails?.creator}</h4>
              </div>
            </div>
            <div className="owner">
              <img src={cardDetails?.img} alt="nft image" loading="lazy" />
              <div>
                <p>Owned by</p>
                <h4>{cardDetails?.owner}</h4>
              </div>
            </div>
          </div>
          <div className="cardPrice">
            <div>
              <span>{cardDetails?.description}</span>
              <h2>
                <Etherium color="red" size={20} />
                {cardDetails?.price}
              </h2>
            </div>
            <div>
              <span>End in</span>
              <p>{cardDetails?.endin}</p>
            </div>
          </div>
          <button aria-label="buy">
            <ShoppingIcon /> Place Bid
          </button>
        </div>
      </div>

      {data.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="ownerCollection">
          {data &&
            data?.slice(0, 5).map((card) => (
              <Link to={`/market/card/${card.id}`} key={card.id}>
                <div className="cards">
                  <div className="img">
                    <img src={card?.img} alt="not found" />
                  </div>
                  <h4>{card?.title}</h4>
                  <div className="card_text">
                    <div className="text">
                      <p>{card?.description}</p>
                      <span>
                        <Etherium size={13} />
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
    </article>
  );
};

export default CardDetails;
