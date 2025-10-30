import Balance from '../../components/Balance/Balance';
import MoneyFlowChart from '../../components/Chart/Chart';
import Currency from '../../components/Currency/Currency';
import './Wallet.css';

const Wallet = () => {
  return (
    <article className="walletArticle">
      <div className="balans">
        <Balance />
        <MoneyFlowChart />
        <div>
          <Currency />
        </div>
      </div>
      <div className="wallet"></div>
    </article>
  );
};

export default Wallet;
