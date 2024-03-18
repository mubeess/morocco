import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandinPage from './pages/LandinPage/LandinPage';
import { ConfigProvider } from 'antd';
import Register from './pages/Forms/Register';
import Invoice from './pages/Invoice/Invoice';
import DashboardLayout from './pages/Dashboard/DashboardLayout';
import DashboardHome from './pages/Dashboard/DashboardHome';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
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
            <Route path="/Invoice" element={<Invoice />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
            </Route>
          </Routes>
        </ConfigProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
