import { useParams } from 'react-router-dom';
import BackIcon from '../../assets/images/icons/BackIcon';
import './CardDetails.css';
import { data } from '../../service/service';
import Etherium from '../../assets/images/icons/Etherium';

const CardDetails = () => {
  const { id } = useParams();

  const cardDetails = data.find((details) => details.id == id);

  return (
    <article className="cardDetails">
      <header>
        <h3>
          <BackIcon /> Product Detail
        </h3>
      </header>
      <div className="product">
        <img width={400} src={cardDetails?.img} alt="" loading="lazy" />
        <div className="details">
          <h1>{cardDetails?.title}</h1>
          <p></p>
          <div>
            <div>
              <img src="" alt="" loading="lazy" />
              <p></p>
              <h4></h4>
            </div>
            <div>
              <img src="" alt="" loading="lazy" />
              <p></p>
              <h4></h4>
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
              <p></p>
            </div>
          </div>
          <button></button>
        </div>
      </div>
    </article>
  );
};

export default CardDetails;
