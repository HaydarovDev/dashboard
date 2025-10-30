import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import DashboardLayout from './layout/DashboardLayout';
import Auth from './layout/Auth';

import Signin from './auth/SignIn/Signin';
import Signup from './auth/SignUp/Signup';
import Verify from './auth/Verify/Verify';
import Forget from './auth/Forget/Forget';
import Reset from './auth/ResetPassword/Reset';
import Loader from './components/Loader/Loader';
import NotFound from './pages/NotFound/NotFound';
import UserMe from './components/UserMe/UserMe';
import ChatLayout from './layout/Chats/ChatLayout';

const ChatUser = lazy(() => import('./components/ChatUser/ChatUser'));
const CardDetails = lazy(() => import('./components/CardDetails/CardDetails'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Market = lazy(() => import('./pages/Market/Market'));
const Wallet = lazy(() => import('./pages/Wallet/Wallet'));
const Activity = lazy(() => import('./pages/Activity/Activity'));
const Help = lazy(() => import('./pages/Help/Help'));
const Settings = lazy(() => import('./pages/Settings/Settings'));

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

            <Route path="/message" element={<ChatLayout />}>
              <Route path=":username" element={<ChatUser />} />
            </Route>

            <Route path="wallet" element={<Wallet />} />
            <Route path="activity" element={<Activity />} />
            <Route path="help" element={<Help />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<UserMe />} />
            <Route path="market/card/:id" element={<CardDetails />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
