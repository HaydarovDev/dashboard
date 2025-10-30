import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import HeaderDashboard from '../components/HeaderDashboard/HeaderDashboard';
import BottomNavbar from '../components/BottomNavbar/BottomNavbar';
import './DashboardLayout.css';

const DashboardLayout = () => {
  return (
    <main style={{ display: 'flex', width: '100%' }}>
      <Sidebar />
      <div className="layoutDashboard">
        <HeaderDashboard />
        <Outlet />
        <BottomNavbar />
      </div>
    </main>
  );
};

export default DashboardLayout;
