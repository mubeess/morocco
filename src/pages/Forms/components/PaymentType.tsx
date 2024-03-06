interface IProps {
  title: string;
  image: string;
}

export default function PaymentType({ image, title }: IProps) {
  return (
    <div className="w-1/2 h-[48px] border border-[#9D9DB7] rounded flex items-center p-2 bg-white">
      <input className="mr-2" type="checkbox" />
      <img src={image} className="h-[20px] w-[20px] mx-4" />
      <h1>{title}</h1>
    </div>
  );
}
