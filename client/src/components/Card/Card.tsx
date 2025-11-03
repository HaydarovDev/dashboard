import CardIcon from '../../assets/images/icons/CardIcon';
import CardRecieveIcon from '../../assets/images/icons/CardRecieveIcon';
import CardSendIcon from '../../assets/images/icons/CardSendIcon';
import DotsMoreIcon from '../../assets/images/icons/DotsMoreIcon';
import InvoicingIcon from '../../assets/images/icons/InvoicingIcon';
import MoreAppIcon from '../../assets/images/icons/MoreAppIcon';
import './Card.css';

const Card = () => {
  const cardNumber: string = '1234567812345678';
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
          <button>
            <DotsMoreIcon />
          </button>
        </header>
        <div className="cardNumber">
          <p>{cardNumber.slice(0, 4)}</p>
          <p>{cardNumber.slice(4, 8)}</p>
          <p>{cardNumber.slice(8, 12)}</p>
          <p>{cardNumber.slice(12, 16)}</p>
        </div>
        <h4>Card Name</h4>
      </div>

      <div className="details">
        <div>
          <button>
            <CardSendIcon />
          </button>
          <p>Send</p>
        </div>
        <div>
          <button>
            <CardRecieveIcon />
          </button>
          <p>Receive</p>
        </div>
        <div>
          <button>
            <InvoicingIcon />
          </button>
          <p>Invoicing</p>
        </div>
        <div>
          <button>
            <MoreAppIcon />
          </button>
          <p>Receive</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
