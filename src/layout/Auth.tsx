import { Outlet } from "react-router-dom";
import Header from "../auth/components/Header/Header";
import Footer from "../auth/components/Footer/Footer";

const Auth = () => {
  return (
    <main style={{ padding: "20px 30px" }}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Auth;
