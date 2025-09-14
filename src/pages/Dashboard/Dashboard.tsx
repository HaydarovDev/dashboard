import Banner from '../../components/Banner/Banner';
import NftCards from '../../components/NftCards/NftCards';
import NftList from '../../components/NftList/NftList';
import './Dashboard.css';
const Dashboard = () => {
  return (
    <article className="dashboard">
      <div className="dashboard-main">
        <Banner />
        <NftList />
        <NftCards />
      </div>
      <div></div>
    </article>
  );
};

export default Dashboard;
