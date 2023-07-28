import ceo from "../../../src/assets/director.jpg";
import sub from "../../../src/assets/sub.jpg";
import Heading from "../../Shared/Heading/Heading";
import Fade from 'react-reveal/Fade';
import { MdCheckCircle } from 'react-icons/md';

const AboutUs = () => {
  return (
    <div className="w-full p-8 md:p-16">
      <div className="max-w-[1280px] mx-auto text-justify bg-white rounded-lg shadow-lg p-8 md:p-16">
        <div className="flex flex-col items-center pb-8">
          <Heading
            heading={"About Us"}
            text={
              "Welcome to Our Academy, the number one Summer Academy for students. Join us to unlock your potential and achieve greatness!"
            }
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Fade>
              <img
                className="object-cover rounded-xl h-72 w-full"
                src={ceo}
                alt="CEO"
              />
            </Fade>
            <Fade>
              <img
                className="absolute hidden md:block bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white shadow-lg"
                width={140}
                src={sub}
                alt="Sub"
              />
            </Fade>
          </div>
          <div className="space-y-6">
            <Fade>
              <div>
                <h3 className="text-2xl font-semibold flex items-center">
                  <MdCheckCircle className="mr-4 text-yellow-600" />
                  Our Mission
                </h3>
                <p className="text-gray-800 text-md leading-relaxed">
                  Our mission is to provide a unique and transformative Summer Academy experience for students. We focus on specific subjects and skill development, empowering participants to explore their passions and unlock their potential.
                </p>
              </div>
            </Fade>
            <Fade>
              <div>
                <h3 className="text-2xl font-semibold flex items-center">
                  <MdCheckCircle className="mr-4 text-yellow-600" />
                  Our Vision
                </h3>
                <p className="text-gray-800 text-md leading-relaxed">
                  Our vision is to be the catalyst for personal growth and success. We aim to nurture well-rounded individuals who embrace lifelong learning, excel academically, and make positive contributions to their communities.
                </p>
              </div>
            </Fade>
            <Fade>
              <div>
                <h3 className="text-2xl font-semibold flex items-center">
                  <MdCheckCircle className="mr-4 text-yellow-600" />
                  Our Principles
                </h3>
                <p className="text-gray-800 text-md leading-relaxed">
                  Our principles are based on excellence, innovation, inclusivity, and fostering a love for learning. As a principal of Our Academy, we ensure a safe and nurturing environment for all students, providing strategic leadership and collaborative learning opportunities.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
