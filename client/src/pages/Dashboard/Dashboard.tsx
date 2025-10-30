import { Suspense, lazy } from 'react';
import './Dashboard.css';
import Loader from '../../components/Loader/Loader';

const Banner = lazy(() => import('../../components/Banner/Banner'));
const BestSellers = lazy(
  () => import('../../components/BestSellers/BestSellers')
);
const NftCards = lazy(() => import('../../components/NftCards/NftCards'));
const NftList = lazy(() => import('../../components/NftList/NftList'));
const RecentViewers = lazy(
  () => import('../../components/RecentViewers/RecentViewers')
);

const Dashboard = () => {
  return (
    <Suspense fallback={<Loader />}>
      <article className="dashboard">
        <div className="dashboard-main">
          <Banner />
          <NftList />
          <NftCards />
        </div>
        <div className="usersList">
          <BestSellers />
          <RecentViewers />
        </div>
      </article>
    </Suspense>
  );
};

export default Dashboard;
