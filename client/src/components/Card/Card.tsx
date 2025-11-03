import CardIcon from '../../assets/images/icons/CardIcon';
import DotsMoreIcon from '../../assets/images/icons/DotsMoreIcon';
import './Card.css';

const Card = () => {
  return (
    <div className="creditCard">
      <div className="cardTitle">
        <h1>Wallet</h1>
        <button>
          <DotsMoreIcon />
        </button>
      </div>
      <div className="card">
        <header>
          <CardIcon />
          <DotsMoreIcon />
        </header>
      </div>
    </div>
  );
};

export default Card;
