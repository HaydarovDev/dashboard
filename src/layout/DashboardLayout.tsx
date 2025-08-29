import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import HeaderDashboard from '../components/HeaderDashboard/HeaderDashboard';

const DashboardLayout = () => {
  return (
    <main style={{ display: 'flex', width: '100%' }}>
      <Sidebar />
      <div
        style={{
          display: 'flex',
          width: '100%',
          padding: '10px',
          flexDirection: 'column',
        }}
      >
        <HeaderDashboard />
        <Outlet />
      </div>
    </main>
  );
};

export default DashboardLayout;
