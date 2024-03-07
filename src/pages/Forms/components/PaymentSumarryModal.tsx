import { Button, Modal } from 'antd';
import PaymentType from './PaymentType';
import { useNavigate } from 'react-router-dom';
interface IProps {
  isOpened: boolean;
  handleClose: () => void;
}

export default function PaymentSumarryModal({ isOpened, handleClose }: IProps) {
  const Buttons = [
    { title: 'Paystack', image: 'paystack.png' },
    { title: 'Use Code', image: 'num.png' },
  ];
  const navigate = useNavigate();
  return (
    <Modal
      footer={false}
      centered
      title=""
      onCancel={handleClose}
      open={isOpened}
      onOk={handleClose}>
      <div className="flex flex-col min-h-[400px] bg-white">
        <div className="h-[75px] bg-[#F2F2F2] w-full flex items-center pl-3">
          <h1 className="italic text-[#7A8599]">Payment History</h1>
        </div>
        <div className="h-[148px] w-full bg-white p-3">
          <div className="flex items-center justify-between border-b border-b-[#EAECF0] py-4">
            <h1>Item</h1>
            <span>Amount to pay</span>
          </div>

          <div className="flex items-center justify-between border-b border-b-[#EAECF0] py-4">
            <h1>Registration fee</h1>
            <span>₦ 120,000</span>
          </div>
        </div>
        <div className="flex flex-col flex-1 bg-[#F2F2F2] p-3">
          <span className="text-[#7A8599] text-[12px]">
            Select payment method
          </span>
          <div className="flex flex-col md:flex-row gap-3 items-center mt-3">
            {Buttons.map((methods, index) => (
              <PaymentType
                image={methods.image}
                title={methods.title}
                key={index.toString()}
              />
            ))}
          </div>
          <Button
            onClick={() => navigate('/Invoice')}
            type="primary"
            className="bg-lightGreen h-[38px] w-full mt-2 md:mt-[auto] mb-2">
            Make Payment
          </Button>
        </div>
      </div>
    </Modal>
  );
}
