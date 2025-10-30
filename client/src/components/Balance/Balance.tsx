import MoreIcon from '../../assets/images/icons/MoreIcon';
import './Balance.css';

const Balance = () => {
  const balance: number = 500000;

  return (
    <div className="balanceCard">
      <h3>
        Balance <MoreIcon />
      </h3>
      <h1>
        {balance.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </h1>
      <p>
        <span>2,05%</span>
        <span>DECEMBER 25, 2022</span>
      </p>
    </div>
  );
};

export default Balance;
