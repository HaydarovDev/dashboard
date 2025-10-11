import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import useTheme from '../Context/UseTheme';
import './Auth.css';

const Auth = () => {
  const { dark } = useTheme();

  return (
    <main style={{ padding: '20px 20px' }} className={dark ? 'dark' : ''}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Auth;
