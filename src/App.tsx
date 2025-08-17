import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Signin from "./auth/SignIn/Signin";
import Home from "./Home";
import Auth from "./auth/layout/Auth";
import Signup from "./auth/SignUp/Signup";
import Loader from "./auth/components/Loader/Loader";
import Verify from "./auth/Verify/Verify";
import Forget from "./auth/Forget/Forget";
import Reset from "./auth/ResetPassword/Reset";

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
            <Route path="forget-password" element={<Forget />} />
            <Route path="verify" element={<Verify />} />
            <Route path="reset-password" element={<Reset />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
