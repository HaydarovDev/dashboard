import { Route, Routes } from "react-router-dom";
import Signin from "./auth/SignIn/Signin";
import Home from "./Home";
import Auth from "./auth/layout/Auth";
import Signup from "./auth/SignUp/Signup";
import Reset from "./auth/Reset/Reset";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import Verify from "./auth/Verify/Verify";

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/auth" element={<Auth />}>
            <Route index element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<Reset />} />
            <Route path="verify" element={<Verify />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
