import CarouselItem from './componets/CarouselItem';
import { Carousel } from 'react-responsive-carousel';
import ProgramItems from './componets/ProgramItems';
import { Button } from 'antd';
export default function LandinPage() {
  const ITEMS = ['SLIDE', 'SLIDE2', 'SLIDE3'];
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <div className="min-h-screen bg-silver flex flex-col">
        <div className="nav px-5 md:px-20 lg:px-40  min-h-20 p-0  bg-silver flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold">
            🇳🇬 NIGERIA-MOROCCO 🇲🇦
          </h1>
          <div className="hidden md:flex flex-items-center space-x-6">
            <a href="/">Sample</a>
            <a href="/">Sample</a>
            <a href="/">Sample</a>
            <a href="/">Sample</a>
          </div>
        </div>
        <Carousel
          showStatus={false}
          stopOnHover={false}
          interval={4000}
          autoPlay
          showArrows={false}
          infiniteLoop
          className="flex flex-col w-full min-h-[50vh] md:min-h-[80vh] justify-start text-start">
          {ITEMS.map((item) => (
            <CarouselItem key={item} />
          ))}
        </Carousel>
      </div>

      {/* END OF HERO SECTION */}

      {/* OUR PARTNERS */}
      <div className="flex flex-col items-center p-10">
        <h1 className="text-2xl">Our Partners</h1>
        <p className="my-5 text-center">
          We have been working with some biggest companies
        </p>
        <div className="grid  place-items-center px-0 grid-cols-2 md:grid-cols-6 gap-5 w-full md:px-32 mt-10">
          <img src="sponsor.png" />
          <img src="Logo.png" />
          <img src="sponsor.png" />
          <img src="sponsor.png" />
          <img src="sponsor.png" />
          <img src="sponsor.png" />
        </div>
      </div>

      {/* OUR PROGRAMS */}

      <div className="flex flex-col items-center p-10">
        <h1 className="text-2xl">Multi-sectoral Programme</h1>
        <p className="my-5 text-center">
          The programme is designed to be multi-sectoral with particular focus
          in some areas
        </p>
        <div className="grid  place-items-center px-0 grid-cols-1 md:grid-cols-3 gap-5 w-full md:px-32 mt-10">
          <ProgramItems />
          <ProgramItems />
          <ProgramItems />
        </div>
      </div>

      {/* ABOUT US */}

      <div className="flex flex-col md:flex-row justify-between my-10 items-center w-full px-5  md:px-20  gap-10 lg:px-40">
        <img src="start.png" className="w-full md:w-1/2" />

        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h1 className="text-2xl  font-bold">
            Promoting Commercial Trade/Exchange Between Nigeria and Morocco
          </h1>
          <p className="text-justify">
            We invite you to participate at the 1st Edition of the
            Nigeria-Morocco Business Week, scheduled to take place at the
            Exhibition Parks and Economic Zones in Casablanca, Morocco from May
            27-29, 2024. The event, which is to be organized by Coalition of
            Northern States Chambers of Commerce, Industry, and Agriculture
            (CONSCCIMA) and Spectre Trans-Trade Global is aimed at boosting the
            Agricultural potentials of Northern Nigeria and the Country at large
            through export and improved yield in the Kingdom of Morocco is
            expected to host individual Participants and Exhibitors from
            Nigeria.
          </p>
          <Button className="bg-lightGreen w-1/2 mt-4 md:w-1/3 h-12 text-white hover:bg-black">
            Learn More
          </Button>
        </div>
      </div>

      {/* Space Booking */}
      <div className="flex bg-silver h-52 justify-center flex-col md:flex-row md:justify-between my-10 items-center w-full px-5  md:px-20 gap-2 md:gap-10 lg:px-40">
        <div className="gap-4">
          <h1 className="text-2xl text-center">
            Want an
            <span className="text-lightGreen ml-1">Exhibition space?</span>
          </h1>
          <p className="text-center">
            We reached here with our hard work and dedication
          </p>
        </div>

        <Button className="bg-lightGreen w-1/2 mt-4 md:w-1/3 h-12 text-white hover:bg-black">
          Book A Space
        </Button>
      </div>
    </div>
  );
}
