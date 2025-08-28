import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Auth = () => {
  return (
    <main style={{ padding: '20px 20px' }}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Auth;
