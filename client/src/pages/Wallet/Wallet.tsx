import { lazy } from 'react';
const Balance = lazy(() => import('../../components/Balance/Balance'));
const MoneyFlowChart = lazy(() => import('../../components/Chart/Chart'));
const Conversion = lazy(() => import('../../components/Conversion/Conversion'));
const Currency = lazy(() => import('../../components/Currency/Currency'));
import './Wallet.css';
import Card from '../../components/Card/Card';

const Wallet = () => {
  return (
    <article className="walletArticle">
      <div className="balans">
        <Balance />
        <MoneyFlowChart />
        <div className="content">
          <Currency />
          <Conversion />
        </div>
      </div>
      <div className="wallet">
        <Card />
      </div>
    </article>
  );
};

export default Wallet;
