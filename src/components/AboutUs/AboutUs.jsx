import ceo from "../../../src/assets/director.jpg";
import sub from "../../../src/assets/sub.jpg";
import Heading from "../../Shared/Heading/Heading";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const AboutUs = () => {
  return (
    <div className="w-full  bg-neutral-100 p-16">
      <div className="max-w-[1280px] mx-auto border-[1px] border-yellow-500 rounded-lg p-6 shadow-xl">
       <div className="flex justify-center items-center pb-10">
       <Heading
        
        heading={"About us"}
        text={
          "Our Academy is the number one Sumer Academy for students. Day by day the number of students is increasing"
        }
      ></Heading>

       </div>
        <div className="md:flex justify-between items-center gap-8 font-mono">
          <div className="relative">
           <Zoom>
           <img className="object-cover rounded-2xl" src={ceo} alt="" />
           </Zoom>
            <img
              className="absolute hidden md:block top-[230px] shadow-2xl rounded-xl "
              width={200}
              src={sub}
              alt=""
            />
          </div>
          <div className="flex-1 divide-y-8 divide-yellow-300">
           <Fade top>
           <div className="space-y-2">
              <h3 className="text-2xl uppercase font-bold text-neutral-900">Our Mission</h3>
              <p className="text-justify">
                The Summer Academy mission typically refers to a program or
                educational initiative conducted during the summer months. While
                the specific mission can vary depending on the organization or
                institution hosting the Summer Academy, the general objective is
                to provide a unique learning experience for participants, often
                focusing on specific subjects or skill development.
              </p>
            </div>
           </Fade>
           <Fade bottom>
           <div>
              <h3 className="text-2xl uppercase font-bold text-neutral-900">Our Vision</h3>
              <p className="text-justify" >
              Our vision is to create an inspiring and transformative Summer Academy that empowers students to explore their passions, expand their knowledge, and develop the skills needed for future success. We envision a dynamic learning environment where participants engage in innovative and hands-on experiences, fostering curiosity, critical thinking, and creativity. Through collaboration, mentorship, and experiential learning, our Summer Academy aims to nurture well-rounded individuals who embrace lifelong learning, excel academically, and make positive contributions to their communities. We aspire to be a catalyst for personal
              </p>
            </div>
           </Fade>
            <Fade bottom>
            <div>
              <h3 className="text-2xl uppercase font-bold text-neutral-900">Our Principles</h3>
              <p className="text-justify">
              As a principal of a Summer Academy, your role is crucial in ensuring the successful implementation of the program and overseeing its overall operations. Here are some key responsibilities and tasks that principals typically have:


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
