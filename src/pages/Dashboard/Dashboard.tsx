import Banner from '../../components/Banner/Banner';
import BestSellers from '../../components/BestSellers/BestSellers';
import NftCards from '../../components/NftCards/NftCards';
import NftList from '../../components/NftList/NftList';
import RecentViewers from '../../components/RecentViewers/RecentViewers';
import './Dashboard.css';
const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;
