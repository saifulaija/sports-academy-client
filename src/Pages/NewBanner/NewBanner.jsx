 
import { AiOutlineSearch } from 'react-icons/ai';
import { Fade } from 'react-reveal';
import backgroundImage from '../../../src/assets/bannern4.jpg';

const HeroSection = () => {
  return (
    <div
      className="relative bg-gray-800 flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="text-center z-10 px-6 sm:px-12 md:px-24 lg:px-32 xl:px-40">
        <Fade top>
          <h1 className="text-4xl md:text-4xl font-bold text-white mb-4">Welcome to</h1>
        </Fade>
        <Fade top delay={300}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#ff6c2f] mb-6">Sports Academy</h1>
        </Fade>
        <Fade top delay={600}>
          <p className="text-xl md:text-2xl text-white mb-8">
            Sports Academy is a popular students' academy of Bangladesh. It was established in the
            year 2022 and has since become the first choice for students all over the country.
          </p>
        </Fade>
        <Fade top delay={900}>
          
            <button className="bg-[#ff6c2f] hover:bg-[#502310] text-white px-6 py-1 rounded-md">
              <AiOutlineSearch className='inline-block' /> Explore
            </button>
          
        </Fade>
      </div>
    </div>
  );
};

export default HeroSection;
