import Banner from '../../components/Banner/Banner';
import './Dashboard.css';
const Dashboard = () => {
  return (
    <article className="dashboard">
      <div className="dashboard-main">
        <Banner />
      </div>
      <div>{/* <Banner /> */}</div>
    </article>
  );
};

export default Dashboard;
