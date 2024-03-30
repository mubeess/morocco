import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandinPage from './pages/LandinPage/LandinPage';
import { ConfigProvider } from 'antd';
import Register from './pages/Forms/Register';
import Invoice from './pages/Invoice/Invoice';

import DashboardHome from './pages/Dashboard/DashboardHome';
import { Suspense } from 'react';
import Booking from './pages/Forms/Booking';
import BookingInvoice from './pages/Invoice/BookingInvoice';
import Login from './pages/Auth/Login';
import PrivateRoutes from './pages/PrivateRoutes';
import { Provider } from 'react-redux';
import store from './redux';

function App() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Provider store={store}>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: '#4CAF4F',

                // Alias Token
                colorBgContainer: '#f6ffed',
              },
            }}>
            <Routes>
              <Route path="/" element={<LandinPage />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Booking" element={<Booking />} />
              <Route path="/Invoice" element={<Invoice />} />
              <Route path="/BookingInvoice" element={<BookingInvoice />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/dashboard" element={<PrivateRoutes />}>
                <Route index element={<DashboardHome />} />
              </Route>
            </Routes>
          </ConfigProvider>
        </Provider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
