import { Outlet } from 'react-router-dom';
import DashbordIcon from './compopnents/DashbordIcon';

export default function DashboardLayout() {
  return (
    <div className="flex h-[100vh] w-full bg-white">
      <div className="w-0 md:w-[15%] h-full bg-[#F2F2F2] py-20 px-5">
        <h1 className="text-[12px] md:text-[14px] font-bold text-center mb-32">
          🇳🇬 NIGERIA-MOROCCO 🇲🇦
        </h1>
        <div className="w-full h-[40px] bg-lightGreen flex items-center px-3 rounded-md justify-center">
          <DashbordIcon />
          <h1 className="text-[14px] text-white ml-3">Dashboard</h1>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="bg-white h-[100px] w-full flex items-center justify-end px-10">
          <div className="flex items-center">
            <img src="/start.png" className="w-[40px] h-[40px] rounded-full" />
            <div className=" ml-5">
              <h1 className="text-[14px] text-[#4C4C4C]">Mubarak Ibrahim</h1>
              <p className="text-[14px]">Admin</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-10">{<Outlet />}</div>
      </div>
    </div>
  );
}
