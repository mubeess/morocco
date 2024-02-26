import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandinPage from './pages/LandinPage/LandinPage';
import { ConfigProvider } from 'antd';

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
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
