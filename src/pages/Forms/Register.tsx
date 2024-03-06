import { useEffect, useState } from 'react';
import Input from '../../components/Input';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Modal, Upload } from 'antd';
import PaymentSumarryModal from './components/PaymentSumarryModal';

const { Dragger } = Upload;

export default function Register() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openSummary, setOpenSummary] = useState(false);

  const openSummaryModal = () => {
    setOpenSummary(true);
  };

  const closeSummary = () => {
    setOpenSummary(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [availabilityOptions] = useState([
    'Raw material/input',
    'Logistic',
    'Production Process Technology',
    'Production/Formulation',
  ]);
  // const [selectedAvailability, setSelectedAvailabilty] = useState([]);
  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  useEffect(() => {
    showModal();
  }, []);
  return (
    <div
      style={{ backgroundImage: 'url(rectangle.png)' }}
      className="bg-cover bg-center h-[100vh] w-full relative overflow-y-auto ">
      <div
        style={{
          backgroundImage: 'url(round.png)',
          backgroundRepeat: 'no-repeat',
        }}
        className="fixed top-0 bottom-0 right-0 left-0 bg-bgImage h-[100vh] overflow-y-scroll bg-contain bg-center flex flex-col items-center p-11">
        <h1 className="text-lightGreen font-bold text-4xl">Register Now!</h1>
        <span>to be a part of the exhibition.</span>
        <p className="text-2xl"> Fill the information carefully</p>

        <div className="flex-1 flex-col bg-transparent min-[200px] w-full md:w-[70%] mt-5">
          <span className="text-[18px] text-lightGreen">
            Company/Personal Information
          </span>
          <div className="flex flex-col md:flex-row gap-0 md:gap-3 items-center">
            <Input
              className="w-full md:w-[70%]"
              required
              label="Company Name"
              placeholder="Enter the name of the company"
              outlined={false}
            />

            <Input
              className="w-full md:w-[30%]"
              required
              label="Date of Craetion"
              placeholder="Enter the name of the company"
              outlined={false}
              type="date"
            />
          </div>

          <Input
            required
            label="Address"
            outlined={false}
            placeholder="Type your address"
          />
          <div className="flex flex-col md:flex-row gap-0 md:gap-3 items-center">
            <Input
              className="w-full md:w-[70%]"
              label="Website"
              placeholder="www.example.com"
              outlined={false}
            />

            <Input
              className="w-full md:w-[30%]"
              label="Number of employees"
              outlined={false}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-0 md:gap-3 items-center">
            <Input
              className="w-full md:w-[30%]"
              label="Mobile Number"
              outlined={false}
            />

            <Input
              className="w-full md:w-[70%]"
              label="Email Address"
              outlined={false}
            />
          </div>
          <span className="my-5">Your Company is</span>
          {availabilityOptions.map((options) => (
            <div className="mt-3 flex items-center" key={options}>
              <input
                className="mr-2"
                // onChange={(e) => {
                //   if (e.target.checked) {
                //     setSelectedAvailabilty((prev) => [...prev, options]);
                //   } else {
                //     const filtered = selectedAvailability.filter(
                //       (selected) => selected !== options
                //     );
                //     setSelectedAvailabilty(filtered);
                //   }
                //   console.log(e.target.checked);
                // }}
                type="checkbox"
              />
              <span className="text-[12px]">{options}</span>
            </div>
          ))}

          <Input
            label="What are the products you wish to import from Morocco?"
            outlined={false}
            placeholder="Type here"
          />

          <Input
            className="mb-10"
            label="What are the products you wish to export from Morocco?"
            outlined={false}
            placeholder="Type here"
          />
          <span className="mt-5">
            Which sectors do you wish to have a B2B meeting with at the event?
          </span>
          {availabilityOptions.map((options) => (
            <div className="my-3 flex items-center" key={options}>
              <input
                className="mr-2"
                // onChange={(e) => {
                //   if (e.target.checked) {
                //     setSelectedAvailabilty((prev) => [...prev, options]);
                //   } else {
                //     const filtered = selectedAvailability.filter(
                //       (selected) => selected !== options
                //     );
                //     setSelectedAvailabilty(filtered);
                //   }
                //   console.log(e.target.checked);
                // }}
                type="checkbox"
              />
              <span className="text-[12px]">{options}</span>
            </div>
          ))}

          <span className="mt-5">Upload Passport</span>
          <div className="h-[150px] mt-4">
            <Dragger className="h-[150px]" {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">Please Upload your passport</p>
            </Dragger>
          </div>

          <div className="flex gap-4 items-center justify-end mt-10">
            <Button className="border-lightGreen bg-transparent text-lightGreen h-[38px]">
              Reset
            </Button>
            <Button
              onClick={openSummaryModal}
              className="bg-lightGreen h-[38px]"
              type="primary">
              Submit & proceed to payment
            </Button>
          </div>
        </div>
      </div>

      <Modal
        closable={false}
        keyboard={false}
        footer={false}
        centered
        title=""
        open={isModalOpen}
        onOk={handleOk}>
        <div className="flex flex-col min-h-[400px] bg-white  items-cente p-3">
          <h1 className="text-[16px] text-black">Terms and Conditions</h1>
          <div className="border-[#9D9DB7] border h-[217px] w-full my-5 overflow-y-scroll p-[10px]">
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur. Nibh aliquet vel ut
              bibendum. Mauris ultrices justo fermentum malesuada ullamcorper.
              Faucibus sit nulla quam consequat odio pharetra sit scelerisque.
              Sit mauris risus gravida orci ut lacus posuere. Enim lobortis
              ultrices aliquet eget. Sem orci odio vitae lobortis viverra
              suspendisse tortor morbi dui. Adipiscing augue semper mi tristique
              iaculis et. Rhoncus porta at nec consequat. Tortor in sollicitudin
              mattis mattis sit risus. Et integer accumsan justo quam enim
              tincidunt ipsum tellus. Integer ut dolor sit fermentum porta.
              Egestas sed suscipit donec ornare tempus risus. Scelerisque
              vulputate porta magna vulputate consequat eget sit bibendum
              imperdiet. Aliquet nulla habitant magna egestas aliquam.
            </p>
          </div>
          <div className="my-3 flex items-center">
            <input className="mr-2" type="checkbox" />
            <span className="text-[12px]">I accept term and condition</span>
          </div>

          <div className="flex gap-4 items-center justify-end mt-5">
            <Button
              onClick={handleCancel}
              className="border-lightGreen bg-transparent text-lightGreen h-[38px]">
              Cancel
            </Button>
            <Button
              onClick={handleCancel}
              className="bg-lightGreen h-[38px]"
              type="primary">
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
      <PaymentSumarryModal isOpened={openSummary} handleClose={closeSummary} />
    </div>
  );
}
