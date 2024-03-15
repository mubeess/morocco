import { Button } from 'antd';
import DashboardCard from './compopnents/DashboardCard';
import Input from '../../components/Input';

export default function DashboardHome() {
  return (
    <div className="flex flex-col flex-1 bg-white overflow-y-scroll overflow-x-hidden">
      <h1 className="text-[24px] text-fontColor">
        NIGERIA-MOROCCO BUSINESS WEEK
      </h1>
      <div className="flex flex-col  md:flex-row justify-between items-center w-full min-h-[100px] bg-white gap-4">
        <div className="flex w-full md:w-auto flex-col gap-2  md:flex-row items-center md:gap-8">
          <DashboardCard color="#009a48bf" />
          <DashboardCard color="#c1272cb8" />
          <DashboardCard color="#2121219e" />
        </div>

        <div className="flex-1 h-[290px] w-full md:w-auto bg-silver p-3 pt-6">
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

      <div className="flex w-full md:w-1/2 items-center justify-between">
        <h1 className="font-bold">All Participants</h1>
        <div className="flex items-center">
          <Input
            style={{ marginTop: 0, marginRight: 10 }}
            className="bg-gray"
            placeholder="Search Results"
            label=""
            outlined={true}
          />
          <Button>Filter</Button>
        </div>
      </div>

      <div className="mt-4 max-w-[80vw] overflow-x-scroll">
        <table className="w-full divide-y divide-gray-200 rounded ">
          <thead className="bg-silver">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 overflow-x-scroll">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">Acme Inc.</td>
              <td className="px-6 py-4 whitespace-nowrap">Active</td>
              <td className="px-6 py-4 whitespace-nowrap">123-456-7890</td>
              <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Button className="h-[30px] items-center flex justify-center">
                  ...
                </Button>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">Acme Inc.</td>
              <td className="px-6 py-4 whitespace-nowrap">Active</td>
              <td className="px-6 py-4 whitespace-nowrap">123-456-7890</td>
              <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Button className="h-[30px] items-center flex justify-center">
                  ...
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
