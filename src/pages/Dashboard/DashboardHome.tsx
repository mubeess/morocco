import { Button } from 'antd';
import DashboardCard from './compopnents/DashboardCard';
import Input from '../../components/Input';

export default function DashboardHome() {
  return (
    <div className="flex flex-col flex-1 bg-white overflow-y-scroll">
      <h1 className="text-[24px] text-fontColor">
        NIGERIA-MOROCCO BUSINESS WEEK
      </h1>
      <div className="flex justify-between items-center w-full min-h-[100px] bg-white gap-4">
        <div className="flex items-center gap-8">
          <DashboardCard color="#009a48bf" />
          <DashboardCard color="#c1272cb8" />
          <DashboardCard color="#2121219e" />
        </div>

        <div className="flex-1 h-[290px] bg-silver p-3 pt-6">
          <h1 className="text-black font-bold text-center">Live codes</h1>
          <div className="flex justify-between items-center mt-[30px] w-full">
            <h1 className="font-bold text-[12px]">4UYYIII</h1>
            <p className="text-fontColor text-[12px]">Used</p>
            <p className="text-fontColor text-[12px]">Expired</p>
          </div>

          <div className="flex justify-between items-center mt-[30px] w-full">
            <h1 className="font-bold text-[12px]">4UYYIII</h1>
            <p className="text-fontColor text-[12px]">Used</p>
            <p className="text-fontColor text-[12px]">Expired</p>
          </div>

          <div className="flex justify-between items-center mt-[30px] w-full">
            <h1 className="font-bold text-[12px]">4UYYIII</h1>
            <p className="text-fontColor text-[12px]">Used</p>
            <p className="text-fontColor text-[12px]">Expired</p>
          </div>

          <div className="flex items-center mt-[40px] mb-3 justify-end">
            <Button className="bg-lightGreen text-white h-[32px]">
              Generate New Code
            </Button>
            <span className="font-bold ml-3">View Codes</span>
          </div>
        </div>
      </div>

      <div className="flex w-1/2 items-center justify-between">
        <h1 className="font-bold">All Participants</h1>
        <Input
          className="bg-gray"
          placeholder="Search Results"
          label=""
          outlined={true}
        />
      </div>
    </div>
  );
}
