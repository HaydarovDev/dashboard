import { Route, Routes } from "react-router-dom";
import Signin from "./auth/SignIn/Signin";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
};

export default App;
