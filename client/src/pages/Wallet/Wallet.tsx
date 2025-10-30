import MoneyFlowChart from '../../components/Chart/Chart';
import './Wallet.css';

const Wallet = () => {
  return (
    <article className="walletArticle">
      <div className="balans">
        <MoneyFlowChart />
      </div>
      <div className="wallet"></div>
    </article>
  );
};

export default Wallet;
