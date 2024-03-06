export default function Invoice() {
  return (
    <div className="flex flex-col min-h-[100vh] w-full bg-white items-center justify-center">
      <div className="h-[756px] w-[95%] md:w-[40%] bg-[#F2F2F2] flex flex-col p-2">
        <h1 className="text-black text-xl font-bold">Invoice #123456</h1>
        <div className="flex justify-between items-center my-5">
          <div>
            <span className="text-[#404955] text-[12px] mb-2">Issued On</span>
            <h1 className="text-black text-[16px] font-bold">28 July, 2024</h1>
          </div>

          <div>
            <span className="text-[#404955] text-[12px] mb-2">
              Payment Method
            </span>
            <h1 className="text-black text-[16px] font-bold">Paystack</h1>
          </div>
        </div>

        <div className="mt-10">
          <span className="text-[#404955] text-[12px] mb-2">Billed to</span>
          <h1 className="text-black text-[16px] font-bold">Mubarak Ibrahim</h1>
          <h1 className="text-[#404955] text-[16px]">mubara@flexisaf.com</h1>

          <h1 className="text-[#404955] text-[16px] mt-4">
            123, Casablanca Street, Wuse II
          </h1>
          <h1 className="text-[#404955] text-[16px]"> Abuja, Nigeria</h1>
          <h1 className="text-[#404955] text-[16px]">(234) 8123456789</h1>
        </div>

        <div className="flex flex-col flex-1 bg-white p-5 mt-4">
          <h1 className="text-black text-[16px] font-bold mt-8">
            Invoice Details
          </h1>
          <div className="flex items-center justify-between border-b border-b-[#EAECF0] py-4">
            <h1>Item</h1>
            <span>Amount</span>
          </div>

          <div className="flex items-center justify-between border-b border-b-[#EAECF0] py-4">
            <h1>Registration fee</h1>
            <span>₦ 120,000</span>
          </div>
          <img
            src="qr.png"
            className="h-[85px] w-[85px] ml-[auto] mr-[auto] mt-[auto] mb-5"
          />
        </div>
        <div className="flex items-center justify-between  py-4">
          <h1>Total Item Payed</h1>
          <span>₦ 120,000</span>
        </div>
      </div>
    </div>
  );
}
