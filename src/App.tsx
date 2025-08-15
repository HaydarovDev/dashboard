import { Route, Routes } from "react-router-dom";
import Signin from "./auth/SignIn/Signin";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
};

export default App;
