import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Signin from "./auth/SignIn/Signin";
import Signup from "./auth/SignUp/Signup";
import Loader from "./auth/components/Loader/Loader";
import Verify from "./auth/Verify/Verify";
import Forget from "./auth/Forget/Forget";
import Reset from "./auth/ResetPassword/Reset";
import Auth from "./layout/Auth";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Market from "./pages/Market/Market";
import Wallet from "./pages/Wallet/Wallet";
import Activity from "./pages/Activity/Activity";
import Help from "./pages/Help/Help";
import Settings from "./pages/Settings/Settings";

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/auth" element={<Auth />}>
            <Route index element={<Signin />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forget-password" element={<Forget />} />
            <Route path="verify" element={<Verify />} />
            <Route path="reset-password" element={<Reset />} />
          </Route>

          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="market" element={<Market />} />
            <Route path="message" element={<Market />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="activity" element={<Activity />} />
            <Route path="help" element={<Help />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
