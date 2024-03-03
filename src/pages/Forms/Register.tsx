export default function Register() {
  return (
    <div
      style={{ backgroundImage: 'url(rectangle.png)' }}
      className="bg-cover bg-center min-h-[100vh] w-full relative">
      <div
        style={{
          backgroundImage: 'url(round.png)',
          backgroundRepeat: 'no-repeat',
        }}
        className="absolute top-0 bottom-0 right-0 left-0 bg-bgImage bg-contain bg-center flex flex-col items-center p-11">
        <h1 className="text-lightGreen font-bold text-4xl">Register Now!</h1>
        <span>to be a part of the exhibition.</span>
        <p className="text-2xl"> Fill the information carefully</p>

        <div className="flex flex-1 flex-col bg-transparent min-[200px] w-[70%] mt-5">
          <span className="text-[18px] text-lightGreen">
            Company/Personal Information
          </span>
        </div>
      </div>
    </div>
  );
}
