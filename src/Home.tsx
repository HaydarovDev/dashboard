import { Link } from "react-router-dom";
import Sidebar from "./auth/components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Link to={"/auth"}>auth</Link>
    </div>
  );
};

export default Home;
