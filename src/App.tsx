import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandinPage from './pages/LandinPage/LandinPage';
import { ConfigProvider } from 'antd';
import Register from './pages/Forms/Register';

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
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
