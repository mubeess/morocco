import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandinPage from './pages/LandinPage/LandinPage';
import { ConfigProvider } from 'antd';
import Register from './pages/Forms/Register';
import Invoice from './pages/Invoice/Invoice';

function App() {
  return (
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
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
