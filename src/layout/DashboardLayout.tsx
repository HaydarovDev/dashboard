import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

const DashboardLayout = () => {
  return (
    <main style={{ display: 'flex', width: '100%' }}>
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default DashboardLayout;
