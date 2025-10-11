import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import HeaderDashboard from '../components/HeaderDashboard/HeaderDashboard';
import BottomNavbar from '../components/BottomNavbar/BottomNavbar';

const DashboardLayout = () => {
  return (
    <main style={{ display: 'flex', width: '100%' }}>
      <Sidebar />
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
        }}
      >
        <HeaderDashboard />
        <Outlet />
        <BottomNavbar />
      </div>
    </main>
  );
};

export default DashboardLayout;
