import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Auth = () => {
  return (
    <div style={{ padding: "20px 30px" }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Auth;
